import { createGateway, streamText } from "ai";
import { NextResponse } from "next/server";
import { z } from "zod";

import { buildSystemPrompt } from "@/lib/chat-context";
import { takeToken } from "@/lib/rate-limit";

const MAX_MESSAGES = 8;
const MAX_OUTPUT_TOKENS = 400;

const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(1000),
      }),
    )
    .min(1)
    .max(MAX_MESSAGES * 2),
});

export async function POST(request: Request) {
  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) return new Response(null, { status: 404 });

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";
  if (!takeToken(`chat:${ip}`, { capacity: MAX_MESSAGES, refillMs: 60_000 })) {
    return NextResponse.json(
      { ok: false, error: "Too many messages, try again in a minute" },
      { status: 429 },
    );
  }

  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 },
    );
  }

  const gateway = createGateway({ apiKey });
  const result = streamText({
    model: gateway(process.env.AI_MODEL ?? "anthropic/claude-haiku-4.5"),
    system: buildSystemPrompt(),
    messages: parsed.data.messages.slice(
      parsed.data.messages.findIndex((m) => m.role === "user"),
    ),
    maxOutputTokens: MAX_OUTPUT_TOKENS,
  });

  return result.toTextStreamResponse();
}
