import { NextRequest, NextResponse } from "next/server";
import { buildDiscoverySystemPrompt } from "@/lib/discovery-prompt";
import { PAGE_CONFIGS } from "@/lib/discovery-configs";
import { createEmptyExtractedData } from "@/lib/consultation-defaults";
import type { ExtractedConsultationData } from "@/lib/types";

/**
 * Generate a signed URL for the ElevenLabs ConvAI Discovery agent.
 * POST /api/elevenlabs/signed-url
 *
 * Returns a signed URL + the system prompt to use as an override.
 * Keeps ELEVENLABS_API_KEY server-side (never exposed to browser).
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

    // Build the discovery system prompt (same one used by text chat)
    const pageConfig = slug ? PAGE_CONFIGS[slug] : undefined;
    const systemPrompt = buildDiscoverySystemPrompt(currentData, pageConfig);

    // Build first message — personalized if we have page config, generic otherwise
    // Research-backed: keep it SHORT, get a "small yes" early, get them talking within 10-15 seconds
    let firstMessage: string;
    if (pageConfig?.firstMessage) {
      firstMessage = pageConfig.firstMessage;
    } else if (pageConfig?.customQuestionFramework) {
      // Custom page without explicit firstMessage
      firstMessage =
        `Hey! I'm from Outpace — we're a growth consultancy. We've done a bit of research on your business already, so I've got some good context. What I'd love to do is ask you a few questions so our team can put together a tailored growth proposal. Takes about ten minutes. Sound good?`;
    } else {
      // Generic discovery page
      firstMessage =
        "Hey! I'm from Outpace — we're a growth consultancy for businesses in Ireland and the UK. I'd love to ask you a few questions about your business so our team can put together some tailored recommendations. Takes about ten minutes. Sound good?";
    }

    // Get signed URL from ElevenLabs
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

    return NextResponse.json({
      signedUrl: data.signed_url,
      systemPrompt,
      firstMessage,
    });
  } catch (err) {
    console.error("[Signed URL] Error:", err);
    return NextResponse.json(
      { error: "Internal error generating voice session" },
      { status: 500 }
    );
  }
}
