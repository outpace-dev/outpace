import { NextRequest, NextResponse } from "next/server";
import { buildDiscoverySystemPrompt } from "@/lib/discovery-prompt";
import { loadDiscoveryConfig } from "@/lib/discovery-config-loader";
import { createEmptyExtractedData } from "@/lib/consultation-defaults";
import type { ExtractedConsultationData } from "@/lib/types";

/**
 * Generate a signed URL for the ElevenLabs ConvAI Discovery agent.
 * POST /api/elevenlabs/signed-url
 *
 * SECURITY: The system prompt and first message are configured on the
 * ElevenLabs agent server-side via the Update Agent API — they are
 * NEVER returned to the browser. The client receives only the signed URL.
 */

const API_BASE = "https://api.elevenlabs.io";

export async function POST(req: NextRequest) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const agentId = process.env.ELEVENLABS_DISCOVERY_AGENT_ID;

  if (!apiKey || !agentId) {
    return NextResponse.json(
      { error: "Voice agent not configured" },
      { status: 503 }
    );
  }

  try {
    // Parse request body for slug and current consultation data
    const body = await req.json().catch(() => ({}));
    const slug = body.slug || null;
    const currentData: ExtractedConsultationData =
      body.currentData || createEmptyExtractedData();

    // Load config from Supabase (sensitive) + codebase (non-sensitive)
    const pageConfig = slug ? await loadDiscoveryConfig(slug) : undefined;

    // ── Diagnostic logging ──
    console.log("[Signed URL] slug:", slug || "(none)");
    console.log("[Signed URL] pageConfig loaded:", !!pageConfig);
    if (pageConfig) {
      console.log("[Signed URL] hasFirstMessage:", !!pageConfig.firstMessage);
      console.log("[Signed URL] hasCustomFramework:", !!pageConfig.customQuestionFramework);
      console.log("[Signed URL] firstMessage preview:", pageConfig.firstMessage?.slice(0, 80) || "(none)");
    }

    const systemPrompt = buildDiscoverySystemPrompt(currentData, pageConfig);

    // Build first message
    let firstMessage: string;
    let firstMessageSource: string;
    if (pageConfig?.firstMessage) {
      firstMessage = pageConfig.firstMessage;
      firstMessageSource = "supabase";
    } else if (pageConfig?.customQuestionFramework) {
      firstMessage =
        "Hey! I'm from Outpace — we're a business development consultancy. We've done a bit of research on your business already, so I've got some good context. What I'd love to do is ask you a few questions so our team can put together a tailored proposal. Takes about ten minutes. Sound good?";
      firstMessageSource = "fallback-with-framework";
    } else {
      firstMessage =
        "Hey! I'm from Outpace — we help businesses win more clients. I'd love to ask you a few questions about your business so our team can put together some tailored recommendations. Takes about ten minutes. Sound good?";
      firstMessageSource = "generic-default";
    }
    console.log("[Signed URL] firstMessageSource:", firstMessageSource);

    // ── Step 1: Patch the ElevenLabs agent with the prompt server-side ──
    // This means the prompt lives on ElevenLabs' servers, NOT in the browser.
    const patchRes = await fetch(`${API_BASE}/v1/convai/agents/${agentId}`, {
      method: "PATCH",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conversation_config: {
          agent: {
            prompt: { prompt: systemPrompt },
            first_message: firstMessage,
          },
        },
      }),
    });

    if (!patchRes.ok) {
      const errText = await patchRes.text();
      console.error("[Signed URL] Agent patch FAILED:", patchRes.status, errText);
      // Non-fatal: fall back to existing agent config if patch fails
    } else {
      console.log("[Signed URL] Agent patch SUCCESS — prompt length:", systemPrompt.length, "firstMessage length:", firstMessage.length);
    }

    // ── Step 2: Get signed URL (prompt is already on the agent) ──
    const response = await fetch(
      `${API_BASE}/v1/convai/conversation/get-signed-url?agent_id=${agentId}`,
      {
        headers: { "xi-api-key": apiKey },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "[Signed URL] ElevenLabs API error:",
        response.status,
        errorText
      );
      return NextResponse.json(
        { error: "Failed to generate voice session" },
        { status: 502 }
      );
    }

    const data = await response.json();

    // ── SECURITY: Only return the signed URL — no prompt, no first message ──
    return NextResponse.json({
      signedUrl: data.signed_url,
    });
  } catch (err) {
    console.error("[Signed URL] Error:", err);
    return NextResponse.json(
      { error: "Internal error generating voice session" },
      { status: 500 }
    );
  }
}
