import type { LucideIconName } from "@/lib/icons";

export type Status = "shipped-stellar" | "porting" | "planned";
export type Milestone = "M1" | "M2" | "M3" | "M4";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIconName;
  status: Status;
  milestone?: Milestone;
  /** Features already live on StellarTools that are being ported get both badges. */
  shippedOnStellar?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export const links = {
  stellartools: "https://stellartools.dev",
  docs: "https://docs.stellartools.dev",
  apiReference: "https://docs.stellartools.dev/api-reference/introduction",
  github: "https://github.com/payrouteshq/stellartools",
  adapterPlayground: "https://docs.stellartools.dev/adapter-playground",
  buildingApps: "https://docs.stellartools.dev/marketplace/building-apps",
  teamPage: "https://stellartools.dev/team",
  x: "https://x.com/devodii_",
  linkedin: "https://www.linkedin.com/in/emmanuelodii/",
} as const;

export const site = {
  name: "WhitechainTools",
  wordmark: { lead: "Whitechain", accent: "Tools" },
  title: "WhitechainTools: financial infrastructure for Whitechain",
  description:
    "Payments, subscriptions, usage billing, hosted checkout, customer portal, payouts and webhooks, with SDK framework adapters, an app marketplace and an AI copilot. Everything a business needs to get paid in WBT, USDT and USDC.",
  email: "hello@whitechaintools.xyz",
  disclaimer:
    "WhitechainTools is an independent project and is not affiliated with or endorsed by Whitechain, WhiteBIT or W Group. Roadmap items are planned and subject to change.",
  footerTagline:
    "The financial infrastructure layer for the Whitechain economy.",
} as const;

export const statusLabels: Record<Status, string> = {
  "shipped-stellar": "Shipped on Stellar",
  porting: "Porting to Whitechain",
  planned: "Planned",
};

export const announcement = {
  text: "From the team behind StellarTools (SCF #40). Now building on Whitechain.",
  linkLabel: "See StellarTools",
  href: links.stellartools,
} as const;

export const navLinks: NavLink[] = [
  { label: "Platform", href: "#platform" },
  { label: "Developers", href: "#developers" },
  { label: "Adapters", href: "#adapters" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Copilot", href: "#copilot" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

/** Links shown inline in the header at medium widths; the rest go under "More". */
export const primaryNavCount = 5;

export const footerColumns = {
  product: [
    { label: "Platform", href: "#platform" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Developers", href: "#developers" },
    { label: "Adapters", href: "#adapters" },
    { label: "Marketplace", href: "#marketplace" },
    { label: "Copilot", href: "#copilot" },
    { label: "Roadmap", href: "#roadmap" },
  ] satisfies NavLink[],
  stellartools: [
    { label: "StellarTools", href: links.stellartools },
    { label: "StellarTools docs", href: links.docs },
    { label: "API reference", href: links.apiReference },
    { label: "GitHub", href: links.github },
  ] satisfies NavLink[],
  contact: [
    { label: "X", href: links.x },
    { label: "LinkedIn", href: links.linkedin },
    { label: site.email, href: `mailto:${site.email}` },
  ] satisfies NavLink[],
};

export const hero = {
  eyebrow: "Building on Whitechain",
  title: "The financial infrastructure for the Whitechain economy.",
  description: site.description,
  primaryCta: { label: "Join the waitlist", href: "#waitlist" },
  secondaryCta: {
    label: "See what we shipped on Stellar",
    href: links.docs,
  },
  openSource: "Open source. Built by the StellarTools team.",
  githubLabel: "Star on GitHub",
} as const;

export const dashboardPages = [
  "Overview",
  "Products",
  "Transactions",
  "Customers",
  "Subscriptions",
  "Payouts",
  "Marketplace",
  "Copilot",
  "Developers",
  "Settings",
] as const;

export type DashboardPage = (typeof dashboardPages)[number];

export const dashboardPageIcons: Record<DashboardPage, LucideIconName> = {
  Overview: "LayoutDashboard",
  Products: "Package",
  Transactions: "ArrowLeftRight",
  Customers: "Users",
  Subscriptions: "RefreshCw",
  Payouts: "Landmark",
  Marketplace: "Store",
  Copilot: "Sparkles",
  Developers: "Code",
  Settings: "Settings",
};

export const heroMockup = {
  // TODO(founder): verify the Whitechain Sepolia chain id before launch
  network: "Whitechain Sepolia · 1874",
  sampleDataLabel: "Sample data",
  testModeLabel: "Test mode",
  kpis: [
    { label: "MRR", value: "$12,000" },
    { label: "Gross volume", value: "$48,000" },
    { label: "Active subscriptions", value: "600" },
    { label: "Active trials", value: "100" },
    { label: "New customers", value: "250" },
    { label: "Renewal success rate", value: "95%" },
  ],
  chartTitle: "Recurring revenue, last 30 days",
  chartSeries: Array.from({ length: 30 }, (_, i) => ({
    day: `Day ${i + 1}`,
    revenue: 6000 + i * 200 + (i % 4) * 300,
  })),
  copilotBubble: {
    message:
      "3 renewals failed: allowance too low. Want me to email those customers?",
    action: "Draft email",
  },
} as const;
