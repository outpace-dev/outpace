import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { consultationId, role, content, toolCalls } = await req.json();

    if (!consultationId || !role || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase
      .from("messages")
      .insert({
        consultation_id: consultationId,
        role,
        content,
        tool_calls: toolCalls || null,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: data });
  } catch {
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}
