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

export const proof = {
  eyebrow: "Track record",
  title: "Already shipped. Now porting.",
  description:
    "Everything below is live on StellarTools today. We are bringing it to Whitechain.",
  items: [
    "TypeScript SDK on npm (@stellartools/core)",
    "REST API with versioned requests and cursor pagination",
    "Testnet and mainnet API keys",
    "Hosted checkout and customer portal",
    "Onchain subscriptions with trials, pause, cancel at period end",
    "Metered (usage-based) billing",
    "Payouts",
    "Signed webhooks with retries, delivery logs and manual resend",
    "MCP server for AI agents",
    "7 framework adapters plus a plugin SDK",
    "App marketplace (Resend, Loops)",
    "Two-factor authentication",
  ],
  footnote:
    "SCF #40 awardee · All grant milestones delivered · Vercel OSS Spring 2026",
  footnoteHref: links.stellartools,
} as const;

export const primitives = {
  id: "product",
  eyebrow: "Product",
  title: "Everything a business needs to get paid onchain.",
  description:
    "The building blocks, each with an honest status and the milestone it lands in.",
  items: [
    {
      title: "Payments",
      description:
        "Price in USD, NGN, EUR and more. Customers pay in WBT, USDT or USDC on Whitechain.",
      icon: "CreditCard",
      status: "porting",
      milestone: "M1",
    },
    {
      title: "Subscriptions",
      description:
        "Daily, weekly, monthly, yearly or custom intervals. Trials, pause, resume, cancel at period end.",
      icon: "RefreshCw",
      status: "porting",
      milestone: "M1",
    },
    {
      title: "Hosted checkout",
      description:
        "Branded payment pages from a single API call. No frontend code.",
      icon: "LayoutTemplate",
      status: "porting",
      milestone: "M1",
    },
    {
      title: "Customer portal",
      description: "Customers manage plans, wallets and invoices themselves.",
      icon: "UserCog",
      status: "porting",
      milestone: "M2",
    },
    {
      title: "Webhooks",
      description:
        "Signed events for every state change: payment.confirmed, subscription.renewed and more.",
      icon: "Webhook",
      status: "porting",
      milestone: "M1",
    },
    {
      title: "Access checks",
      description:
        "One call to know if a customer has an active plan. Powers the adapters.",
      icon: "KeyRound",
      status: "porting",
      milestone: "M1",
    },
    {
      title: "Refunds",
      description: "Refund to the customer's wallet from the dashboard or API.",
      icon: "Undo2",
      status: "porting",
      milestone: "M2",
    },
    {
      title: "Gasless for customers",
      description:
        "A paymaster sponsors gas so customers pay in stablecoins without holding WBT.",
      icon: "Fuel",
      status: "planned",
      milestone: "M2",
    },
  ] satisfies Feature[],
} as const;

// Items live on StellarTools and being ported carry shippedOnStellar plus a
// "porting" status, so they render both badges.
// TODO(founder): correct any status or milestone in this map.
export const platformMap: { tab: string; items: Feature[] }[] = [
  {
    tab: "Payments",
    items: [
      {
        title: "One-time products",
        description: "Software licenses, downloads and access passes.",
        icon: "Package",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Local-currency pricing",
        description:
          "Price in USD, NGN, GHS, KES, EUR and more; customers pay in tokens.",
        icon: "Globe",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Multi-asset",
        description:
          "WBT, USDT, USDC, plus any ERC-20 on the Whitechain token list.",
        icon: "Coins",
        status: "porting",
        milestone: "M1",
      },
      {
        title: "Hosted checkout and payment links",
        description: "Branded payment pages from one API call.",
        icon: "LayoutTemplate",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Transactions view",
        description: "The onchain transaction hash for every payment.",
        icon: "Receipt",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Refunds",
        description: "Refund to the customer's wallet.",
        icon: "Undo2",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
    ],
  },
  {
    tab: "Billing",
    items: [
      {
        title: "Subscriptions",
        description: "Daily, weekly, monthly, yearly or custom intervals.",
        icon: "RefreshCw",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Trials, pause and renewal",
        description:
          "Trials, pause, resume, cancel at period end, automatic renewal.",
        icon: "Timer",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Usage-based billing",
        description: "Metered billing for APIs, seats and anything you count.",
        icon: "Gauge",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
      {
        title: "Access checks and entitlements",
        description:
          "customers.access.verify returns whether a customer can use a product.",
        icon: "KeyRound",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
    ],
  },
  {
    tab: "Customers",
    items: [
      {
        title: "Customer records",
        description: "Customer records with custom metadata.",
        icon: "Users",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Wallet payment methods",
        description: "Wallets linked per customer.",
        icon: "Wallet",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Self-serve customer portal",
        description: "Customers manage subscriptions, wallets and invoices.",
        icon: "UserCog",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
    ],
  },
  {
    tab: "Money out",
    items: [
      {
        title: "Payouts dashboard",
        description: "Withdraw to a merchant wallet.",
        icon: "Landmark",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
      {
        title: "Fiat cash-out",
        description:
          "Cash out to local bank accounts. We will explore this with ecosystem partners.",
        icon: "Banknote",
        status: "planned",
      },
      {
        title: "Fiat on-ramp",
        description:
          "Let customers pay by card or bank transfer into a stablecoin.",
        icon: "ArrowDownToLine",
        status: "planned",
      },
    ],
  },
  {
    tab: "Developers",
    items: [
      {
        title: "REST API with cursor pagination",
        description: "limit, starting_after and ending_before on every list.",
        icon: "ListOrdered",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "API versioning",
        description: "A dated version header, pinned per key or per request.",
        icon: "Tag",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Testnet and mainnet keys",
        description: "The key encodes the environment, no flags needed.",
        icon: "Key",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "TypeScript SDK",
        description: "A typed client for every API resource.",
        icon: "Code",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "OpenAPI spec",
        description: "Generate clients in any language.",
        icon: "FileJson",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "Signed webhooks",
        description:
          "Signed payloads, retries, delivery logs and manual resend.",
        icon: "Webhook",
        status: "porting",
        milestone: "M1",
        shippedOnStellar: true,
      },
      {
        title: "MCP server",
        description: "For Cursor, Claude and other agents.",
        icon: "Terminal",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
      {
        title: "Adapter playground",
        description: "Live demos of every adapter.",
        icon: "FlaskConical",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
    ],
  },
  {
    tab: "Ecosystem",
    items: [
      {
        title: "Framework adapters",
        description: "Plug into the stack you already run. See the adapters.",
        icon: "Plug",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
      {
        title: "App marketplace",
        description: "Apps that run inside the dashboard. See the marketplace.",
        icon: "Store",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
      {
        title: "Plugin SDK",
        description: "Build metered integrations on top of the platform.",
        icon: "Puzzle",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
    ],
  },
  {
    tab: "Growth and security",
    items: [
      {
        title: "AI Merchant Copilot",
        description: "Your billing team, in a chat box. See the copilot.",
        icon: "Sparkles",
        status: "planned",
        milestone: "M3",
      },
      {
        title: "Experiments and cohorts",
        description:
          "Test prices and checkout variants, build cohorts from billing events and sync with PostHog.",
        icon: "FlaskConical",
        status: "planned",
      },
      {
        title: "Two-factor authentication",
        description: "Protect the dashboard with 2FA.",
        icon: "ShieldCheck",
        status: "porting",
        milestone: "M2",
        shippedOnStellar: true,
      },
      {
        title: "Team roles and org settings",
        description: "Invite teammates and control what they can do.",
        icon: "UsersRound",
        status: "planned",
      },
    ],
  },
];

export const platform = {
  eyebrow: "Platform",
  title: "One platform. Every way money moves.",
  description:
    "WhitechainTools is the whole money stack, not a single feature.",
} as const;
