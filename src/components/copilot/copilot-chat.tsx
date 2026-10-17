"use client";

import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { CopilotBlockView } from "@/components/copilot/copilot-blocks";
import { SampleBadge } from "@/components/mock/sample-badge";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { copilot, type CopilotBlock } from "@/content/site";

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
  block?: CopilotBlock;
  followUp?: string;
  typing?: boolean;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function CopilotChat({ live }: { live: boolean }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState("");
  const scroller = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const cancelled = useRef(false);

  useEffect(() => {
    cancelled.current = false;
    return () => {
      cancelled.current = true;
    };
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  function patch(id: number, changes: Partial<Message>) {
    setMessages((current) =>
      current.map((m) => (m.id === id ? { ...m, ...changes } : m)),
    );
  }

  function add(message: Omit<Message, "id">) {
    const id = nextId.current++;
    setMessages((current) => [...current, { ...message, id }]);
    return id;
  }

  async function streamWords(id: number, text: string) {
    const words = text.split(" ");
    const delay = prefersReducedMotion() ? 0 : 35;
    for (let i = 0; i < words.length; i++) {
      if (cancelled.current) return;
      patch(id, { text: words.slice(0, i + 1).join(" "), typing: false });
      if (delay) await sleep(delay);
    }
  }

  async function playScript(index: number) {
    const script = copilot.scripts[index];
    if (!script || busy) return;
    setBusy(true);
    add({ role: "user", text: script.prompt });
    const replyId = add({ role: "assistant", text: "", typing: true });
    if (!prefersReducedMotion()) await sleep(900);
    await streamWords(replyId, script.reply);
    if (cancelled.current) return;
    patch(replyId, { block: script.block, followUp: script.followUp });
    setBusy(false);
  }

  async function askLive(text: string, replyId: number) {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: text }],
        }),
      });
      if (!response.ok || !response.body) throw new Error("unavailable");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done || cancelled.current) break;
        reply += decoder.decode(value, { stream: true });
        patch(replyId, { text: reply, typing: false });
      }
      if (!reply) throw new Error("empty");
    } catch {
      await streamWords(replyId, copilot.demoReply);
    }
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    setBusy(true);
    add({ role: "user", text });
    const replyId = add({ role: "assistant", text: "", typing: true });
    if (live) {
      await askLive(text, replyId);
    } else {
      if (!prefersReducedMotion()) await sleep(600);
      await streamWords(replyId, copilot.demoReply);
    }
    if (!cancelled.current) setBusy(false);
  }

  return (
    <Card className="gap-0 overflow-hidden py-0">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3">
        <p className="text-sm font-semibold">WhitechainTools Copilot</p>
        <div className="flex flex-wrap items-center gap-2">
          <SampleBadge label={copilot.sampleDataLabel} />
          <StatusBadge status="planned" milestone="M3" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-b px-4 py-3">
        {copilot.scripts.map((script, index) => (
          <Button
            key={script.prompt}
            type="button"
            variant="outline"
            size="xs"
            disabled={busy}
            onClick={() => playScript(index)}
            className="h-auto max-w-full py-1 text-left whitespace-normal"
          >
            {script.prompt}
          </Button>
        ))}
      </div>

      <div
        ref={scroller}
        className="h-80 space-y-3 overflow-y-auto px-4 py-4"
        aria-live="polite"
      >
        {messages.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            Pick a prompt above to see Copilot at work.
          </p>
        ) : null}
        {messages.map((message) =>
          message.role === "user" ? (
            <div
              key={message.id}
              className="bg-primary text-primary-foreground ml-auto w-fit max-w-[85%] rounded-lg px-3 py-2 text-sm"
            >
              {message.text}
            </div>
          ) : (
            <div key={message.id} className="max-w-[92%] space-y-2">
              <div className="bg-secondary text-secondary-foreground w-fit rounded-lg px-3 py-2 text-sm">
                {message.typing ? (
                  <span
                    className="flex items-center gap-1 py-1"
                    aria-label="Copilot is typing"
                  >
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="bg-muted-foreground size-1.5 animate-bounce rounded-full motion-reduce:animate-none"
                        style={{ animationDelay: `${dot * 120}ms` }}
                      />
                    ))}
                  </span>
                ) : (
                  message.text
                )}
              </div>
              {message.block ? (
                <CopilotBlockView block={message.block} />
              ) : null}
              {message.followUp ? (
                <p className="text-muted-foreground text-sm">
                  {message.followUp}
                </p>
              ) : null}
            </div>
          ),
        )}
      </div>

      <form onSubmit={submit} className="flex gap-2 border-t p-3">
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={copilot.inputPlaceholder}
          aria-label={copilot.inputPlaceholder}
          disabled={busy}
        />
        <Button type="submit" size="icon" disabled={busy || !input.trim()}>
          <Send />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </Card>
  );
}
