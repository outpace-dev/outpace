import type { DiscoveryPageConfig } from "./types";

export const PAGE_CONFIGS: Record<string, DiscoveryPageConfig> = {
  security: {
    slug: "security",
    heroTitle: "Growth strategy for security companies",
    heroSubtitle:
      "We've helped security firms scale through targeted outreach, AI-powered prospecting, and digital presence. Let's explore what we can do for you.",
    valueProps: [
      "Identify high-value commercial prospects",
      "AI outbound calling for security sales",
      "SEO for local security keywords",
      "CRM setup for long sales cycles",
    ],
    industry: "Security & Fire Safety",
  },
  construction: {
    slug: "construction",
    heroTitle: "Growth strategy for construction firms",
    heroSubtitle:
      "From project pipeline management to reaching the right decision-makers, we help construction companies win more contracts.",
    valueProps: [
      "Target facility managers and developers",
      "Multi-touch email campaigns",
      "Project showcase video production",
      "LinkedIn thought leadership",
    ],
    industry: "Construction & Building",
  },
  "professional-services": {
    slug: "professional-services",
    heroTitle: "Growth strategy for professional services",
    heroSubtitle:
      "Whether you're in accounting, legal, or consulting, we'll help you build a predictable pipeline of ideal clients.",
    valueProps: [
      "Target your ideal client profile",
      "Content marketing & thought leadership",
      "Referral system optimisation",
      "Digital presence overhaul",
    ],
    industry: "Professional Services",
  },
  hospitality: {
    slug: "hospitality",
    heroTitle: "Growth strategy for hospitality businesses",
    heroSubtitle:
      "Hotels, restaurants, and event venues — we help you fill rooms and tables through targeted digital marketing and outreach.",
    valueProps: [
      "Targeted corporate event outreach",
      "Google & social advertising",
      "Reputation management strategy",
      "Loyalty & retention programmes",
    ],
    industry: "Hospitality",
  },
  manufacturing: {
    slug: "manufacturing",
    heroTitle: "Growth strategy for manufacturers",
    heroSubtitle:
      "We help manufacturing companies reach procurement managers and grow their B2B pipeline with targeted outreach.",
    valueProps: [
      "Reach procurement decision-makers",
      "Trade show follow-up automation",
      "Technical content marketing",
      "Export market prospecting",
    ],
    industry: "Manufacturing",
  },
  rayn: {
    slug: "rayn",
    heroTitle: "Growth consultation for RAYN",
    heroSubtitle:
      "Ireland's leading independent security and safety provider deserves a growth strategy to match. Let's identify your biggest opportunities.",
    companyLogo: "https://rayn.ie/wp-content/uploads/2025/06/RAYN_Logo_Colour.svg",
    companyName: "RAYN Safety & Security",
    heroImage: "https://rayn.ie/wp-content/uploads/2025/06/rayn-security-limerick.png",
    companyDescription:
      "Ireland's leading independent security and safety provider. End-to-end fire safety and security solutions — CCTV, access control, intruder alarms, fire protection, and TotalSafe by RAYN. Offices in Limerick and Dublin.",
    contactName: "Ray Nash",
    website: "rayn.ie",
    knownClients: ["HSE", "ESB", "Nestlé", "Defence Forces"],
    valueProps: [
      "Targeted outreach to high-value sectors",
      "Digital presence for security & fire safety",
      "Cross-sell the full TotalSafe offering",
      "Pipeline & CRM for long sales cycles",
    ],
    industry: "Security & Safety",
    // NOTE: firstMessage and customQuestionFramework are stored in Supabase
    // (discovery_configs table) — NOT in source code. This prevents team
    // members with repo access from copying the agent methodology.
    // The discovery-config-loader.ts merges Supabase data at runtime.
  },
};
