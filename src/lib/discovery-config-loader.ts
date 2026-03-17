import { createAdminClient } from "@/lib/supabase/admin";
import { PAGE_CONFIGS } from "@/lib/discovery-configs";
import type { DiscoveryPageConfig } from "@/lib/types";

/**
 * Load a full discovery page config by merging:
 *  1. Non-sensitive data from the codebase (discovery-configs.ts)
 *  2. Sensitive prompt data from Supabase (discovery_configs table)
 *
 * This keeps the custom question framework, first message, and
 * system prompt additions OUT of the source code, so repo access
 * alone doesn't expose the methodology.
 *
 * Server-side only — uses the service-role key.
 */

interface SupabaseDiscoveryConfig {
  first_message: string | null;
  custom_question_framework: string | null;
  system_prompt_additions: string | null;
}

// Simple in-memory cache to avoid hitting Supabase on every request
const cache = new Map<string, { config: SupabaseDiscoveryConfig; fetchedAt: number }>();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

export async function loadDiscoveryConfig(
  slug: string
): Promise<DiscoveryPageConfig | undefined> {
  const baseConfig = PAGE_CONFIGS[slug];
  if (!baseConfig) return undefined;

  // Try to fetch sensitive config from Supabase
  const sensitiveConfig = await fetchSensitiveConfig(slug);

  if (!sensitiveConfig) {
    // No Supabase entry — return base config as-is
    // (fallback for configs that haven't been migrated yet)
    return baseConfig;
  }

  // Merge: Supabase values override codebase values
  return {
    ...baseConfig,
    ...(sensitiveConfig.first_message && {
      firstMessage: sensitiveConfig.first_message,
    }),
    ...(sensitiveConfig.custom_question_framework && {
      customQuestionFramework: sensitiveConfig.custom_question_framework,
    }),
    ...(sensitiveConfig.system_prompt_additions && {
      systemPromptAdditions: sensitiveConfig.system_prompt_additions,
    }),
  };
}

async function fetchSensitiveConfig(
  slug: string
): Promise<SupabaseDiscoveryConfig | null> {
  // Check cache first
  const cached = cache.get(slug);
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
    return cached.config;
  }

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("discovery_configs")
      .select("first_message, custom_question_framework, system_prompt_additions")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      // No entry found — not an error, just means this slug
      // hasn't been migrated to Supabase yet
      return null;
    }

    const config = data as SupabaseDiscoveryConfig;
    cache.set(slug, { config, fetchedAt: Date.now() });
    return config;
  } catch (err) {
    console.error(`[discovery-config-loader] Failed to fetch config for "${slug}":`, err);
    return null;
  }
}

/**
 * Invalidate the cache for a slug (call after updating config).
 */
export function invalidateConfigCache(slug?: string) {
  if (slug) {
    cache.delete(slug);
  } else {
    cache.clear();
  }
}
