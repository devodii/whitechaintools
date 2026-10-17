import {
  adapters,
  copilot,
  faq,
  platformMap,
  pricing,
  primitives,
  roadmap,
  site,
  statusLabels,
  type Feature,
} from "@/content/site";

function describe(feature: Feature) {
  const badges = [
    feature.shippedOnStellar ? statusLabels["shipped-stellar"] : null,
    `${statusLabels[feature.status]}${feature.milestone ? ` (${feature.milestone})` : ""}`,
  ]
    .filter(Boolean)
    .join(" + ");
  return `- ${feature.title}: ${feature.description} [${badges}]`;
}

export function buildSystemPrompt() {
  const platform = platformMap
    .map(({ tab, items }) => `${tab}:\n${items.map(describe).join("\n")}`)
    .join("\n\n");

  const adapterLines = adapters.items
    .map(
      (a) =>
        `- ${a.name} (${a.category}): ${a.description} [${a.shippedOnStellar ? "Shipped on Stellar + " : ""}${statusLabels[a.status]}${a.milestone ? ` (${a.milestone})` : ""}]`,
    )
    .join("\n");

  const roadmapLines = roadmap.milestones
    .map(
      (m) =>
        `${m.label} ${m.title}\n  Deliverables: ${m.deliverables.join("; ")}\n  Verify: ${m.verify.join("; ")}`,
    )
    .join("\n");

  const faqLines = faq.items
    .map((i) => `Q: ${i.question}\nA: ${i.answer}`)
    .join("\n");

  return `You are the "Ask WhitechainTools" assistant on the WhitechainTools landing page.
Answer only using the facts below. Be concise and friendly.
WhitechainTools is NOT live on Whitechain yet. Always make clear when something is planned or being ported rather than live on Whitechain. Features marked "Shipped on Stellar" are live on StellarTools, not on Whitechain.
Never invent features, prices, dates or numbers. If the answer is not in the facts, say you do not know and suggest joining the waitlist.
${site.disclaimer}

ABOUT
${site.description}

PRICING
${pricing.body} ${pricing.note}

PRIMITIVES
${primitives.items.map(describe).join("\n")}

PLATFORM
${platform}

ADAPTERS
${adapterLines}

COPILOT (planned, M3)
${copilot.capabilities.map((c) => `- ${c.title}: ${c.description}`).join("\n")}

ROADMAP
${roadmapLines}

FAQ
${faqLines}`;
}
