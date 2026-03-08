/* ──────────────────────────────────────────────────────────────
 * Blog configuration — 20 articles (2 per pillar), config-driven
 * ────────────────────────────────────────────────────────────── */

// ─── Types ───────────────────────────────────────────────────

export type BlogCategory =
  | "business-analysis"
  | "lead-generation"
  | "digital-presence"
  | "systems-operations"
  | "content-video"
  | "ai-growth-tools"
  | "sales-enablement"
  | "customer-retention"
  | "brand-positioning"
  | "partnerships";

export interface BlogAuthor {
  name: string;
  role: string;
}

export interface BlogSection {
  heading: string;
  content: string;
  bullets?: string[];
}

export interface BlogPostConfig {
  slug: string;
  title: string;
  metaDescription: string;
  category: BlogCategory;
  author: BlogAuthor;
  publishDate: string;
  excerpt: string;
  readingTimeMinutes: number;
  sections: BlogSection[];
  relatedSlugs: string[];
  ctaText: string;
  ctaLink: string;
}

// ─── Categories ──────────────────────────────────────────────

export const BLOG_CATEGORIES: Record<
  BlogCategory,
  { label: string; serviceSlug: string; gradient: string; pillarNumber: number }
> = {
  "business-analysis": {
    label: "Business Analysis",
    serviceSlug: "business-analysis",
    gradient: "from-blue-500 to-cyan-400",
    pillarNumber: 1,
  },
  "lead-generation": {
    label: "Lead Generation",
    serviceSlug: "lead-generation",
    gradient: "from-emerald-500 to-teal-400",
    pillarNumber: 2,
  },
  "digital-presence": {
    label: "Digital Presence",
    serviceSlug: "digital-presence",
    gradient: "from-violet-500 to-purple-400",
    pillarNumber: 3,
  },
  "systems-operations": {
    label: "Systems & Operations",
    serviceSlug: "systems-operations",
    gradient: "from-orange-500 to-amber-400",
    pillarNumber: 4,
  },
  "content-video": {
    label: "Content & Video",
    serviceSlug: "content-video",
    gradient: "from-pink-500 to-rose-400",
    pillarNumber: 5,
  },
  "ai-growth-tools": {
    label: "AI Growth Tools",
    serviceSlug: "ai-growth-tools",
    gradient: "from-cyan-500 to-blue-400",
    pillarNumber: 6,
  },
  "sales-enablement": {
    label: "Sales Enablement",
    serviceSlug: "sales-enablement",
    gradient: "from-teal-500 to-emerald-400",
    pillarNumber: 7,
  },
  "customer-retention": {
    label: "Customer Retention",
    serviceSlug: "customer-retention",
    gradient: "from-amber-500 to-yellow-400",
    pillarNumber: 8,
  },
  "brand-positioning": {
    label: "Brand Positioning",
    serviceSlug: "brand-positioning",
    gradient: "from-indigo-500 to-violet-400",
    pillarNumber: 9,
  },
  partnerships: {
    label: "Partnerships",
    serviceSlug: "partnerships",
    gradient: "from-rose-500 to-pink-400",
    pillarNumber: 10,
  },
};

// ─── Default author ──────────────────────────────────────────

const DEFAULT_AUTHOR: BlogAuthor = {
  name: "Outpace Team",
  role: "Growth Strategy",
};

// ─── Articles ────────────────────────────────────────────────

export const BLOG_POSTS: Record<string, BlogPostConfig> = {
  /* ═══════════════════════════════════════════════════════════
   * PILLAR 1 — BUSINESS ANALYSIS
   * ═══════════════════════════════════════════════════════════ */

  "how-to-run-a-business-audit-that-drives-growth": {
    slug: "how-to-run-a-business-audit-that-drives-growth",
    title: "How to Run a Business Audit That Actually Drives Growth",
    metaDescription:
      "A practical framework for auditing your business to uncover growth levers. Covers financials, operations, and market positioning for Irish SMEs.",
    category: "business-analysis",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-01-06",
    excerpt:
      "Most business audits gather dust. Here is a practical framework that turns analysis into a concrete growth plan you can execute in 90 days.",
    readingTimeMinutes: 7,
    sections: [
      {
        heading: "Why Most Business Audits Fail",
        content:
          "Every accountant will tell you to review your numbers annually. The problem is that most audits stop at the P&L. They tell you what happened last year but give you nothing to act on this quarter.\n\nA growth-focused audit is different. It looks at where revenue actually comes from, which channels are under-performing relative to spend, and where operational drag is quietly eating your margins. The goal is not a 40-page report. It is a ranked list of the five or six things that will move the needle most in the next 90 days.",
      },
      {
        heading: "The Four Lenses Framework",
        content:
          "We break every audit into four areas: Revenue, Operations, Market Position, and Team Capacity. Each lens has a set of diagnostic questions that force honest answers rather than comfortable assumptions.\n\nRevenue analysis goes beyond top-line figures. You want to know your customer acquisition cost by channel, your average deal cycle length, and the lifetime value of different client segments. If you cannot answer those three questions today, you already know where to start.",
        bullets: [
          "Revenue: CAC by channel, deal cycle, LTV by segment",
          "Operations: time-to-delivery, rework rate, bottleneck mapping",
          "Market Position: win rate vs. competitors, pricing power, brand recall",
          "Team Capacity: utilisation rates, skill gaps, hiring runway",
        ],
      },
      {
        heading: "Gathering the Right Data",
        content:
          "Irish SMEs often struggle here because data lives in spreadsheets, inboxes, and someone's head. Before the audit starts, centralise what you can. Pull your last 12 months of invoicing data, your CRM pipeline (even if it is messy), and your Google Analytics or equivalent.\n\nDon't wait for perfect data. Directional accuracy is enough. If you know that roughly 60% of your revenue comes from three clients, that insight alone shapes your diversification strategy. Precision matters less than pattern recognition at this stage.",
      },
      {
        heading: "Turning Findings Into a 90-Day Roadmap",
        content:
          "The audit output should be a single page: a prioritised list of initiatives ranked by impact and ease of execution. Each initiative gets an owner, a deadline, and a measurable outcome.\n\nWe typically recommend businesses pick no more than three priorities per quarter. Anything more dilutes focus. If your audit reveals that 40% of leads go cold because nobody follows up within 48 hours, fixing that process is worth more than launching a new marketing campaign.",
      },
      {
        heading: "Common Mistakes to Avoid",
        content:
          "The biggest mistake is treating the audit as a one-off event rather than a quarterly discipline. Markets shift, teams change, and what worked six months ago might be holding you back today.\n\nAnother trap is analysis paralysis. Some businesses spend so long studying the data that the window to act closes. Set a hard deadline for the audit phase and commit to action whether the picture is complete or not.",
        bullets: [
          "Auditing annually instead of quarterly",
          "Focusing only on financials and ignoring operations",
          "Producing long reports instead of ranked action lists",
          "Trying to fix everything at once rather than focusing on three priorities",
        ],
      },
    ],
    relatedSlugs: [
      "enterprise-ireland-grants-2026-what-you-qualify-for",
      "hidden-cost-disconnected-systems-revenue-leakage",
    ],
    ctaText: "Ready to audit your business for growth?",
    ctaLink: "/services/business-analysis",
  },

  "enterprise-ireland-grants-2026-what-you-qualify-for": {
    slug: "enterprise-ireland-grants-2026-what-you-qualify-for",
    title: "Enterprise Ireland Grants in 2026: What You Qualify For",
    metaDescription:
      "An up-to-date guide to Enterprise Ireland and LEO grants available to Irish businesses in 2026. Eligibility, amounts, and how to apply.",
    category: "business-analysis",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-01-13",
    excerpt:
      "There is significant funding available for Irish businesses willing to invest in growth. Here is what you can apply for right now.",
    readingTimeMinutes: 6,
    sections: [
      {
        heading: "The Funding Landscape for Irish SMEs",
        content:
          "Ireland has one of the most generous SME support ecosystems in Europe, yet most small businesses never apply. The reasons are usually the same: they don't know what exists, they assume they won't qualify, or the application process feels too bureaucratic.\n\nThe reality is that between Enterprise Ireland, Local Enterprise Offices, and various EU-backed schemes, there are grants covering everything from hiring your first salesperson to building an AI prototype. If your business employs fewer than 250 people and is based in Ireland, there is almost certainly funding you are leaving on the table.",
      },
      {
        heading: "Enterprise Ireland Key Programmes",
        content:
          "Enterprise Ireland focuses on businesses with export potential. Their flagship supports include the Business Innovation Initiative, which provides up to 50% co-funding for innovation projects, and the Agile Innovation Fund for smaller pilot projects up to EUR 150,000.\n\nThe GreenStart and GreenPlus programmes are increasingly relevant as sustainability becomes a procurement requirement for larger clients. If you sell into multinationals or public sector, demonstrating a sustainability roadmap is no longer optional.",
        bullets: [
          "Business Innovation Initiative: up to 50% co-funding for R&D and innovation",
          "Agile Innovation Fund: grants up to EUR 150,000 for pilot projects",
          "Market Discovery Fund: supports international market research",
          "GreenStart / GreenPlus: sustainability planning and implementation",
        ],
      },
      {
        heading: "Local Enterprise Office Supports",
        content:
          "If your business has fewer than 10 employees, the Local Enterprise Office is your starting point. LEOs offer feasibility study grants up to EUR 15,000, priming grants for start-ups, and business expansion grants for established companies.\n\nThe Trading Online Voucher is particularly useful for businesses investing in their digital presence. Worth up to EUR 2,500 with a 50% match, it covers website development, e-commerce integration, and digital marketing tools. Given the low barrier to entry, there is no reason not to apply.",
      },
      {
        heading: "How to Strengthen Your Application",
        content:
          "Grant applications are competitive and reviewers read dozens of them. The ones that stand out share a few characteristics: they articulate a clear commercial opportunity, they demonstrate the applicant's ability to execute, and they show how the grant funding specifically de-risks the initiative.\n\nAvoid vague language. Instead of saying you want to 'explore new markets', specify which markets, what your entry strategy is, and what revenue you project in year one. Reviewers want to see that you have done your homework and that the grant is a catalyst, not a lifeline.",
      },
      {
        heading: "Getting Started",
        content:
          "The best approach is to start with your Local Enterprise Office for an initial consultation. They can help you identify which programmes fit your situation and even assist with the application process.\n\nFor Enterprise Ireland programmes, having a clear business plan and financial projections is essential. If you don't have these, getting them in order is a worthwhile first step regardless of whether you apply for funding.",
      },
    ],
    relatedSlugs: [
      "how-to-run-a-business-audit-that-drives-growth",
      "not-too-small-for-brand-strategy-irish-smes",
    ],
    ctaText: "Need help identifying the right grants for your business?",
    ctaLink: "/services/business-analysis",
  },

  /* ═══════════════════════════════════════════════════════════
   * PILLAR 2 — LEAD GENERATION
   * ═══════════════════════════════════════════════════════════ */

  "cold-email-not-dead-irish-b2b-meeting-booking": {
    slug: "cold-email-not-dead-irish-b2b-meeting-booking",
    title:
      "Cold Email Is Not Dead: How Irish B2B Companies Book 15+ Meetings a Month",
    metaDescription:
      "Cold email still works when done right. Learn the exact framework Irish B2B companies use to book 15+ qualified meetings per month.",
    category: "lead-generation",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-01-20",
    excerpt:
      "Everyone says cold email is dead. The companies quietly booking 15+ meetings a month would disagree. Here is how they do it.",
    readingTimeMinutes: 8,
    sections: [
      {
        heading: "The Death of Cold Email Has Been Greatly Exaggerated",
        content:
          "Open any marketing blog and you will read that cold email is dead, that nobody reads unsolicited emails anymore, that you need to build an audience first. Tell that to the Irish tech companies booking 15 to 20 qualified meetings per month through outbound alone.\n\nThe difference between cold email that works and cold email that gets ignored comes down to three things: targeting, relevance, and timing. Mass-blast a generic pitch to a purchased list and yes, you will get flagged as spam. But send a well-researched, genuinely relevant message to someone who actually has the problem you solve? That still gets replies.",
      },
      {
        heading: "Building a Precision Target List",
        content:
          "The targeting stage is where most companies cut corners and pay for it later. You need to define your Ideal Customer Profile with enough specificity that you could describe the person, their role, their company size, and the challenges they face before you ever look them up.\n\nFor the Irish market specifically, tools like LinkedIn Sales Navigator combined with Irish company databases let you filter by geography, headcount, industry, and growth signals. We typically build lists of 200 to 500 highly targeted prospects per month rather than thousands of loosely matched contacts.",
        bullets: [
          "Define ICP by role, company size, industry, and specific pain points",
          "Use LinkedIn Sales Navigator for initial filtering",
          "Verify email addresses before sending (aim for under 3% bounce rate)",
          "Enrich with company signals: recent hires, funding, expansion news",
        ],
      },
      {
        heading: "Writing Emails That Actually Get Replies",
        content:
          "Forget templates that open with 'I hope this email finds you well.' Your subject line and first sentence have about two seconds to earn the rest of the read. Lead with something specific to them: a recent company announcement, a challenge common to their industry, or a result you achieved for a similar business.\n\nKeep the email under 120 words. One clear pain point, one proof point, one low-friction call to action. We typically ask for a 15-minute call rather than a full meeting. The goal of the first email is not to sell. It is to start a conversation.",
      },
      {
        heading: "The Follow-Up Sequence That Multiplies Results",
        content:
          "Most replies come from follow-ups, not the initial email. A well-structured sequence of four to six touchpoints over three weeks consistently outperforms a single-send approach.\n\nEach follow-up should add value, not just repeat the ask. Share a relevant case study in email two. Reference a specific industry trend in email three. The final email should be a polite breakup that often triggers the highest reply rate of the entire sequence.",
      },
      {
        heading: "Infrastructure and Deliverability",
        content:
          "None of this matters if your emails land in spam. Deliverability is a technical discipline that includes domain warming, SPF/DKIM/DMARC configuration, sending volume management, and list hygiene.\n\nWe recommend using a separate sending domain from your primary business domain. If anything goes wrong with deliverability, you do not want it affecting your regular business email. Warm the domain for at least two weeks before launching campaigns, starting with five to ten emails per day and gradually increasing.",
        bullets: [
          "Use a dedicated sending domain (e.g., mail.yourbrand.ie)",
          "Configure SPF, DKIM, and DMARC records",
          "Warm the domain for 2-3 weeks before full campaigns",
          "Keep daily send volume under 50 per mailbox",
          "Monitor bounce and spam complaint rates weekly",
        ],
      },
    ],
    relatedSlugs: [
      "end-of-referral-dependency-predictable-pipeline",
      "discovery-call-framework-that-converts",
    ],
    ctaText: "Want us to build your outbound pipeline?",
    ctaLink: "/services/lead-generation",
  },

  "end-of-referral-dependency-predictable-pipeline": {
    slug: "end-of-referral-dependency-predictable-pipeline",
    title: "The End of Referral Dependency: Building a Predictable Pipeline",
    metaDescription:
      "Stop relying on referrals for new business. Learn how to build a predictable sales pipeline that delivers consistent, measurable revenue every month.",
    category: "lead-generation",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-01-27",
    excerpt:
      "Referrals are great until they dry up. Here is how to build a pipeline that delivers consistently whether or not the phone rings.",
    readingTimeMinutes: 7,
    sections: [
      {
        heading: "The Referral Trap",
        content:
          "Referrals feel like the best kind of business. The lead is warm, trust is already established, and close rates are high. So what is the problem? The problem is that you cannot control it.\n\nWhen business is good, referrals flow naturally. When the market tightens or a key relationship cools, the pipeline dries up overnight. Most businesses only realise how dependent they are on referrals when the well runs dry and there is nothing behind it. By then, you are already three months behind where you need to be.",
      },
      {
        heading: "What a Predictable Pipeline Looks Like",
        content:
          "A predictable pipeline has three characteristics: consistent input activity, measurable conversion rates at each stage, and enough volume to absorb normal fluctuation. You should be able to forecast next month's revenue within a reasonable margin based on what is in your pipeline today.\n\nThis means knowing your numbers. How many outreach activities does it take to generate a meeting? How many meetings become proposals? How many proposals close? Once you know these ratios, you can work backwards from your revenue target to determine exactly how much activity you need each week.",
        bullets: [
          "Track activity inputs: outreach volume, responses, meetings booked",
          "Measure stage conversion rates: lead to meeting, meeting to proposal, proposal to close",
          "Calculate pipeline velocity: average deal cycle length",
          "Build enough volume to absorb month-to-month fluctuation",
        ],
      },
      {
        heading: "The Multi-Channel Approach",
        content:
          "Relying on a single channel is just trading one dependency for another. The most resilient pipelines combine outbound email, LinkedIn outreach, content marketing, and strategic partnerships. Each channel feeds the others and reduces risk.\n\nFor Irish B2B companies, we find that outbound email paired with LinkedIn engagement delivers the fastest results while content marketing builds a longer-term inbound engine. The key is starting with the channel that gives you the quickest feedback loop so you can learn and iterate.",
      },
      {
        heading: "Getting Your Team Aligned",
        content:
          "Pipeline building is not just a sales activity. It requires alignment between whoever is generating leads, whoever is running discovery calls, and whoever is closing deals. In smaller companies this might all be the same person, but the functions are distinct.\n\nEstablish clear handoff criteria between stages. A marketing-qualified lead should meet specific criteria before it becomes a sales-qualified opportunity. When these definitions are vague, leads fall through cracks and everyone blames each other.",
      },
      {
        heading: "The 90-Day Ramp",
        content:
          "Building a predictable pipeline does not happen overnight. Expect a 90-day ramp to see consistent results from a new outbound channel. Month one is infrastructure and testing. Month two is optimisation based on early data. Month three is where you start to see compounding results.\n\nThe businesses that succeed are the ones that commit to the process through the uncomfortable first eight weeks when the numbers are small and the temptation to quit is high.",
      },
    ],
    relatedSlugs: [
      "cold-email-not-dead-irish-b2b-meeting-booking",
      "sales-process-costing-you-deals-how-to-fix",
    ],
    ctaText: "Let us build your predictable pipeline",
    ctaLink: "/services/lead-generation",
  },

  /* ═══════════════════════════════════════════════════════════
   * PILLAR 3 — DIGITAL PRESENCE
   * ═══════════════════════════════════════════════════════════ */

  "website-brochure-to-salesperson": {
    slug: "website-brochure-to-salesperson",
    title:
      "Why Your Website Is a Brochure (And How to Turn It Into a Salesperson)",
    metaDescription:
      "Your website should generate leads, not just look pretty. Learn how to turn a static brochure site into a conversion-focused lead generation machine for your business.",
    category: "digital-presence",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-02-03",
    excerpt:
      "A pretty website that does not convert is an expensive brochure. Here is how to make yours actually sell.",
    readingTimeMinutes: 7,
    sections: [
      {
        heading: "The Brochure Website Problem",
        content:
          "Most business websites follow the same pattern: a nice hero image, a few paragraphs about the company history, a services page that lists what you do, and a contact form buried at the bottom. It looks professional. It tells people you exist. And it generates almost zero leads.\n\nThe issue is not design. It is intent. A brochure website is built to inform. A sales website is built to convert. Every element on a conversion-focused site has a job: qualify the visitor, build trust, address objections, and make the next step obvious.",
      },
      {
        heading: "The Visitor's Journey in 8 Seconds",
        content:
          "Research shows you have roughly eight seconds before a visitor decides whether your site is worth their time. In that window, they need to understand three things: what you do, who you do it for, and why they should care.\n\nYour headline is the most important piece of copy on your entire site. It should not be your company name or a clever tagline. It should articulate the specific outcome you deliver for a specific type of customer. 'We help Irish SMEs generate 15+ qualified meetings per month' is far more powerful than 'Your growth partner.'",
      },
      {
        heading: "Building Trust Without a Meeting",
        content:
          "Your website needs to do the work of a first meeting without you being in the room. That means social proof: client logos, case studies with real numbers, testimonials that describe specific results. Not 'great to work with' testimonials but ones that say 'they helped us increase qualified leads by 40% in three months.'\n\nFor Irish businesses, trust signals are particularly important. Show your local presence. Reference Irish clients and Irish market knowledge. In a market where personal relationships matter, demonstrating that you understand the local landscape creates an advantage.",
        bullets: [
          "Client logos prominently displayed above the fold",
          "Case studies with specific, measurable outcomes",
          "Testimonials that reference concrete results",
          "Industry-specific language that signals expertise",
        ],
      },
      {
        heading: "Conversion Points That Actually Work",
        content:
          "A single contact form on your About page is not a conversion strategy. You need multiple, low-friction ways for visitors to engage, matched to their level of intent.\n\nHigh-intent visitors want to book a call. Give them a calendar link on every page. Medium-intent visitors want to learn more before committing. Offer a downloadable resource or a free assessment. Low-intent visitors are browsing. Give them a reason to follow you or subscribe. Each conversion point should feel like a natural next step, not a hard sell.",
      },
      {
        heading: "Measuring What Matters",
        content:
          "If you are not tracking website conversions, you are flying blind. At minimum, set up goal tracking for form submissions, calendar bookings, and phone clicks. Use these numbers to calculate your website's conversion rate and work systematically to improve it.\n\nA good B2B website converts between 2% and 5% of visitors into leads. If yours is below 1%, there is significant upside to be captured with relatively straightforward changes to copy, layout, and call-to-action placement.",
      },
    ],
    relatedSlugs: [
      "local-seo-irish-businesses-2026-playbook",
      "not-too-small-for-brand-strategy-irish-smes",
    ],
    ctaText: "Turn your website into a lead generation machine",
    ctaLink: "/services/digital-presence",
  },

  "local-seo-irish-businesses-2026-playbook": {
    slug: "local-seo-irish-businesses-2026-playbook",
    title: "Local SEO for Irish Businesses: The 2026 Playbook",
    metaDescription:
      "A practical guide to local SEO for Irish businesses. Google Business Profile, local citations, reviews, and content strategies that drive leads.",
    category: "digital-presence",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-02-10",
    excerpt:
      "When someone searches for what you do in your area, do they find you? Here is how to own local search in Ireland.",
    readingTimeMinutes: 7,
    sections: [
      {
        heading: "Why Local SEO Matters More Than Ever",
        content:
          "Local search is one of the highest-intent channels available to Irish businesses. When someone searches 'business consultant Limerick' or 'IT support Cork,' they are actively looking for a provider. If you are not showing up in those results, your competitor is.\n\nGoogle's local pack — the map with three listings that appears at the top of local searches — captures a disproportionate share of clicks. Ranking there is not about having the biggest marketing budget. It is about executing the fundamentals consistently.",
      },
      {
        heading: "Google Business Profile: Your Foundation",
        content:
          "Your Google Business Profile is the single most important asset for local SEO. Complete every field: business name, address, phone, website, hours, services, and business description. Add photos regularly — businesses with more than 100 photos get significantly more clicks than those with fewer than 10.\n\nChoose your primary and secondary categories carefully. Your primary category should be the most specific match to what you do. Use secondary categories to capture adjacent search terms. Review your categories quarterly as Google adds new options.",
        bullets: [
          "Complete every profile field including services and products",
          "Add new photos monthly (team, office, projects, events)",
          "Post updates weekly using Google Posts",
          "Respond to every review within 24 hours",
          "Use the Q&A section to pre-answer common questions",
        ],
      },
      {
        heading: "Building Local Citations",
        content:
          "Citations are mentions of your business name, address, and phone number across the web. Consistency matters enormously here. Your details should be identical everywhere: on your website, your Google profile, Golden Pages, Yelp Ireland, industry directories, and local business listings.\n\nFor Irish businesses, prioritise Golden Pages, Yelp Ireland, your local Chamber of Commerce directory, and any industry-specific directories. Each consistent citation reinforces your location signals to Google.",
      },
      {
        heading: "The Review Strategy",
        content:
          "Reviews are a ranking factor, but more importantly, they are a trust factor. Businesses with more reviews and higher ratings get more clicks, more calls, and more walk-ins.\n\nBuild a systematic review collection process. After every successful project or positive interaction, send a direct link to your Google review page. Make it as easy as possible. The best time to ask is when the client has just experienced a positive outcome, not weeks later when the goodwill has faded.",
      },
      {
        heading: "Local Content That Ranks",
        content:
          "Create content that is specifically relevant to your geographic area and your service categories. A blog post about 'digital marketing trends' competes with every marketing blog on the internet. A post about 'digital marketing for Limerick retailers' competes with almost nobody.\n\nService-area pages are another quick win. If you serve multiple towns or counties, create a dedicated page for each. These pages should include locally relevant content, not just your service description with the town name swapped in.",
      },
    ],
    relatedSlugs: [
      "website-brochure-to-salesperson",
      "employer-branding-irish-companies-attract-talent",
    ],
    ctaText: "Dominate local search in your area",
    ctaLink: "/services/digital-presence",
  },

  /* ═══════════════════════════════════════════════════════════
   * PILLAR 4 — SYSTEMS & OPERATIONS
   * ═══════════════════════════════════════════════════════════ */

  "crm-implementation-irish-smes-guide": {
    slug: "crm-implementation-irish-smes-guide",
    title: "CRM Implementation for Irish SMEs: A No-Nonsense Guide",
    metaDescription:
      "A practical guide to choosing and implementing a CRM for your Irish SME. Avoid common mistakes and get your team actually using it.",
    category: "systems-operations",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-02-17",
    excerpt:
      "Most CRM implementations fail because of people, not technology. Here is how to get it right from the start.",
    readingTimeMinutes: 7,
    sections: [
      {
        heading: "Why CRM Implementations Fail",
        content:
          "The most common CRM failure has nothing to do with the software. It fails because the team does not use it. They see it as admin overhead rather than a tool that makes their job easier. And honestly, in many implementations, they are right.\n\nA CRM only works when it fits how your team actually sells, not how a software vendor thinks they should sell. Before you evaluate any platform, document your current sales process. Where do leads come from? What happens after the first call? Who follows up and when? If you cannot describe your process clearly, no CRM will save you.",
      },
      {
        heading: "Choosing the Right Platform",
        content:
          "For most Irish SMEs with teams of 5 to 50, you do not need Salesforce. HubSpot's free tier or Pipedrive handles 90% of what a growing business needs at a fraction of the cost and complexity.\n\nThe right CRM has three qualities: your team will actually use it, it integrates with the tools you already run, and it scales with you for the next two to three years. Over-buying leads to unused features you're paying for. Under-buying leads to outgrowing the tool in six months.",
        bullets: [
          "HubSpot Free/Starter: best for businesses that also need marketing automation",
          "Pipedrive: best for pure sales pipeline management, simple and visual",
          "Zoho CRM: good for businesses already using other Zoho tools",
          "Monday Sales CRM: good for teams that already use Monday for project management",
        ],
      },
      {
        heading: "Setting Up for Adoption",
        content:
          "The first 30 days determine whether your CRM sticks. Start by migrating only essential data. Do not dump your entire contact database in on day one. Import active deals, current prospects, and recent clients. Clean dead contacts before they ever enter the system.\n\nCreate a pipeline that mirrors your real sales process, not an idealised version of it. If you currently have three stages (Contacted, Meeting Booked, Proposal Sent, Closed), start with those three stages. You can add sophistication later.",
      },
      {
        heading: "Building Habits That Stick",
        content:
          "Make CRM usage the path of least resistance. If your team has to choose between logging a call in the CRM or writing it on a sticky note, the sticky note wins every time unless you make the CRM option faster.\n\nRequire that all new leads enter through the CRM. Run weekly pipeline reviews from the CRM dashboard, not from spreadsheets. When the CRM becomes the single source of truth for pipeline conversations, usage becomes self-reinforcing.",
      },
      {
        heading: "Measuring ROI",
        content:
          "A well-implemented CRM should pay for itself within the first quarter through improved follow-up alone. Track these metrics: average response time to new leads, follow-up completion rate, pipeline visibility accuracy, and deal cycle length.\n\nIf your response time to new leads drops from 48 hours to under 2 hours, you will close more deals purely from being faster than your competition. That single improvement often justifies the entire investment.",
      },
    ],
    relatedSlugs: [
      "hidden-cost-disconnected-systems-revenue-leakage",
      "sales-process-costing-you-deals-how-to-fix",
    ],
    ctaText: "Get your CRM set up properly",
    ctaLink: "/services/systems-operations",
  },

  "hidden-cost-disconnected-systems-revenue-leakage": {
    slug: "hidden-cost-disconnected-systems-revenue-leakage",
    title: "The Hidden Cost of Disconnected Systems",
    metaDescription:
      "Disconnected business systems silently leak revenue. Learn how to identify integration gaps and stop losing money to manual processes.",
    category: "systems-operations",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-02-24",
    excerpt:
      "Your systems probably don't talk to each other. That disconnect is quietly costing you more than you think.",
    readingTimeMinutes: 6,
    sections: [
      {
        heading: "The Silent Revenue Leak",
        content:
          "Most businesses do not have one system. They have a CRM, an invoicing tool, a project management platform, an email marketing service, and a handful of spreadsheets holding everything together. The problem is not that you have multiple tools. It is that they do not talk to each other.\n\nWhen a deal closes in your CRM but the handoff to project delivery happens via email, things fall through cracks. When client information lives in three different systems with no sync, somebody is working with outdated data. These are not hypothetical risks. They are daily realities for most growing businesses.",
      },
      {
        heading: "Where Disconnection Costs You",
        content:
          "The costs show up in three places: wasted time on manual data entry, errors from duplicate or outdated information, and missed opportunities from poor visibility across departments.\n\nConsider a typical scenario: a sales rep closes a deal, then emails the operations team with the details, who re-enters the information into their project management tool, while accounts sets up invoicing separately. That same client's information has now been manually entered three times. Each entry is a chance for error, delay, and inconsistency.",
        bullets: [
          "5-10 hours per week lost to manual data re-entry across systems",
          "Invoicing delays from disconnected sales-to-accounts handoffs",
          "Client experience gaps when teams work from different information",
          "Reporting blind spots that hide problems until they become crises",
        ],
      },
      {
        heading: "Mapping Your Integration Gaps",
        content:
          "Start by documenting every handoff point in your business. When information moves from one system or person to another, how does it travel? If the answer is 'someone copies and pastes it' or 'someone sends an email,' you have found an integration gap.\n\nPrioritise by impact. The handoff between sales and delivery is typically the highest-value integration because it directly affects client experience and time-to-revenue. The handoff between delivery and invoicing is the second priority because it affects cash flow.",
      },
      {
        heading: "Practical Integration Solutions",
        content:
          "You do not need a custom IT project to connect your systems. Tools like Zapier and Make allow non-technical teams to build automations between hundreds of popular platforms. A simple automation that creates a project in your delivery tool when a deal is marked as won in your CRM eliminates an entire manual process.\n\nFor more complex integrations, most modern SaaS tools offer native integrations with each other. Before buying any new tool, check whether it integrates with what you already use.",
      },
      {
        heading: "The Compounding Effect",
        content:
          "System integration is one of those improvements that compounds. Each connection you build removes a manual step, reduces an error source, and improves visibility. Over time, these small improvements add up to a fundamentally more efficient operation.\n\nStart with one integration this month. Pick the handoff that causes the most pain or the most errors. Fix that one. Then move to the next. Within a quarter, you will wonder how you ever operated without it.",
      },
    ],
    relatedSlugs: [
      "crm-implementation-irish-smes-guide",
      "how-to-run-a-business-audit-that-drives-growth",
    ],
    ctaText: "Fix your system disconnects",
    ctaLink: "/services/systems-operations",
  },

  /* ═══════════════════════════════════════════════════════════
   * PILLAR 5 — CONTENT & VIDEO
   * ═══════════════════════════════════════════════════════════ */

  "video-content-b2b-client-testimonials": {
    slug: "video-content-b2b-client-testimonials",
    title:
      "Video Content for B2B: Why Your Clients' Words Sell Better Than Yours",
    metaDescription:
      "Client testimonial videos are the most powerful B2B sales tool. Learn how to capture, produce, and deploy them across your marketing.",
    category: "content-video",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-03-03",
    excerpt:
      "A 90-second client testimonial video is worth more than any sales deck. Here is how to create ones that actually drive deals.",
    readingTimeMinutes: 6,
    sections: [
      {
        heading: "Why Testimonial Videos Outperform Everything Else",
        content:
          "In B2B, buying decisions are high-stakes and trust-dependent. Prospects want to know that someone like them, in a similar situation, got real results from working with you. A written quote on your website helps. A video of that same client saying it in their own words, in their own office, with genuine enthusiasm? That is on another level.\n\nVideo testimonials work because they are almost impossible to fake. The viewer can read body language, hear tone of voice, and judge authenticity instantly. When a prospect watches your client describe how you solved their exact problem, the sales conversation changes entirely.",
      },
      {
        heading: "Getting Clients to Say Yes",
        content:
          "The biggest barrier to testimonial videos is not production. It is asking. Most business owners feel awkward requesting testimonials from clients they have a good relationship with. The reality is that happy clients are usually delighted to help. They just need to be asked at the right time and in the right way.\n\nAsk within two weeks of delivering a significant result. Frame it as a collaboration, not a favour. Offer to keep the video short and handle all the logistics. Most clients are more willing than you expect.",
        bullets: [
          "Ask within two weeks of a measurable win",
          "Frame it: 'We would love to feature your success story'",
          "Offer to handle all logistics including filming at their office",
          "Keep the time commitment under 30 minutes total",
          "Offer final approval before publishing",
        ],
      },
      {
        heading: "The Interview Framework",
        content:
          "Do not hand clients a script. Scripted testimonials feel scripted and viewers notice immediately. Instead, use a guided interview format with open questions that naturally lead to a compelling narrative.\n\nStart with their situation before working with you. Then ask what made them decide to act. Walk through the experience and results. Close with what they would say to someone considering a similar decision. This arc — problem, decision, solution, result — creates a naturally compelling story.",
      },
      {
        heading: "Production That Does Not Break the Bank",
        content:
          "You do not need a film crew for an effective testimonial video. A modern smartphone, a clip-on microphone, and decent natural lighting produce perfectly good results. What matters is audio quality and authenticity, not cinematic production value.\n\nThat said, if you are investing in video as a core marketing asset, professional production elevates the perception of both you and your client's brand. A one-day shoot can capture three to four testimonials plus additional B-roll for social media.",
      },
      {
        heading: "Deploying Videos Across Your Funnel",
        content:
          "A testimonial video should not just sit on your website's testimonials page. It should be embedded on your homepage, included in sales emails, shared on LinkedIn, used in proposals, and repurposed into short clips for social media.\n\nDifferent videos serve different funnel stages. Awareness-stage videos should be short and problem-focused. Consideration-stage videos should detail the process and results. Decision-stage videos should address objections and build final confidence.",
      },
    ],
    relatedSlugs: [
      "employer-branding-irish-companies-attract-talent",
      "website-brochure-to-salesperson",
    ],
    ctaText: "Create testimonial videos that close deals",
    ctaLink: "/services/content-video",
  },

  "employer-branding-irish-companies-attract-talent": {
    slug: "employer-branding-irish-companies-attract-talent",
    title: "Employer Branding for Irish Companies",
    metaDescription:
      "Attract top talent with strong employer branding. A practical guide for Irish companies competing for skilled workers in a tight market.",
    category: "content-video",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-03-07",
    excerpt:
      "In a tight labour market, the companies that attract the best talent are the ones that tell their story well.",
    readingTimeMinutes: 6,
    sections: [
      {
        heading: "The Talent War Is Won Before the Interview",
        content:
          "Ireland's labour market remains competitive. Skilled professionals have options, and they are evaluating your company long before they apply. They check your website, your LinkedIn presence, your Glassdoor reviews, and your social media. If what they find is a dated website and a generic careers page, they move on.\n\nEmployer branding is not a HR initiative. It is a business growth strategy. The ability to attract and retain top talent directly determines how fast you can scale, how well you serve clients, and how much you spend on recruitment.",
      },
      {
        heading: "What Makes an Employer Brand Authentic",
        content:
          "Employer branding is not about free snacks and ping-pong tables. It is about honestly communicating what it is like to work at your company, what you value, and what career growth looks like.\n\nThe most authentic employer brands come from employees themselves. Short videos of team members talking about their projects, behind-the-scenes content from company events, and honest posts about challenges as well as wins. If your employer brand only shows the highlights, candidates see through it.",
        bullets: [
          "Employee spotlight videos: short interviews about their role and experience",
          "Behind-the-scenes content: team events, office culture, day-in-the-life",
          "Career progression stories: how people have grown within the company",
          "Honest content about company values in action, not just on paper",
        ],
      },
      {
        heading: "Content That Attracts Candidates",
        content:
          "Your careers page should be one of the best pages on your website. It should communicate your mission, your culture, your benefits, and the types of people who thrive in your environment. Include photos and videos of real team members, not stock images.\n\nLinkedIn is the primary channel for employer branding in the Irish market. Encourage your leadership team and employees to share content about their work. A company with ten employees who each share content regularly will have more reach than a company-page posting strategy alone.",
      },
      {
        heading: "Measuring Impact",
        content:
          "Employer branding is measurable. Track the number of inbound applications (versus sourced candidates), time to fill positions, offer acceptance rates, and employee referral rates. These metrics tell you whether your employer brand is pulling its weight.\n\nCompanies with strong employer brands typically see 50% more qualified applicants and fill positions 1-2 weeks faster. In a market where every week of an open role costs you in lost productivity and recruitment fees, that translates directly to the bottom line.",
      },
    ],
    relatedSlugs: [
      "video-content-b2b-client-testimonials",
      "local-seo-irish-businesses-2026-playbook",
    ],
    ctaText: "Build an employer brand that attracts talent",
    ctaLink: "/services/content-video",
  },

  /* ═══════════════════════════════════════════════════════════
   * PILLAR 6 — AI GROWTH TOOLS
   * ═══════════════════════════════════════════════════════════ */

  "ai-voice-agents-sales-what-works-what-is-hype": {
    slug: "ai-voice-agents-sales-what-works-what-is-hype",
    title: "AI Voice Agents for Sales: What Actually Works",
    metaDescription:
      "AI voice agents promise to transform sales. We separate the hype from reality and show what's actually working for Irish businesses.",
    category: "ai-growth-tools",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-01-10",
    excerpt:
      "AI voice agents are everywhere. Here is what actually works, what is still hype, and where Irish businesses should invest.",
    readingTimeMinutes: 7,
    sections: [
      {
        heading: "The Promise vs. the Reality",
        content:
          "The pitch is seductive: an AI agent that handles inbound calls, qualifies leads, books meetings, and never takes a day off. The technology has advanced dramatically. Modern AI voice agents sound natural, handle interruptions, and can navigate complex conversations.\n\nBut the gap between a compelling demo and a production-ready system is still significant. Most businesses that rush into AI voice deployment find that the technology works 80% of the time, which sounds good until you realise that the 20% failure rate means one in five callers has a frustrating experience with your brand.",
      },
      {
        heading: "Where AI Voice Actually Delivers",
        content:
          "The sweet spot for AI voice today is high-volume, structured interactions. Appointment confirmations, initial lead qualification with straightforward criteria, after-hours message taking, and satisfaction surveys. These are repetitive, well-defined tasks where the AI's limitations are less likely to matter.\n\nFor Irish businesses, AI voice is particularly useful for handling the surge of calls that come during peak marketing campaigns or after media coverage. Rather than missing calls or overwhelmed staff rushing through conversations, an AI agent can capture every enquiry and route them appropriately.",
        bullets: [
          "Appointment confirmation and rescheduling",
          "Initial lead qualification with 3-5 qualifying questions",
          "After-hours call handling with message capture",
          "Post-service satisfaction surveys",
          "FAQ handling for common pre-sales questions",
        ],
      },
      {
        heading: "Where to Be Cautious",
        content:
          "Complex sales conversations, sensitive customer complaints, and any interaction where empathy matters should not be fully delegated to AI. The technology cannot read emotional subtext reliably, and the consequences of getting it wrong in these contexts are high.\n\nAlso be cautious about vendor claims. Many AI voice platforms demo beautifully in controlled conditions but struggle with Irish accents, background noise, and the unpredictable flow of real conversations. Always run a pilot with real callers before committing.",
      },
      {
        heading: "Implementation Best Practices",
        content:
          "Start with a specific, bounded use case rather than trying to replace your entire phone system. Run the AI agent in parallel with human staff for the first month so you can monitor quality and catch failures. Build clear escalation paths so that any call the AI cannot handle gets seamlessly transferred to a person.\n\nTrain the agent on your specific business context. Generic setups fail. The agent needs to know your services, your pricing framework, your qualifying criteria, and the common questions your prospects ask. This customisation is what separates tools that work from expensive experiments.",
      },
      {
        heading: "The Cost-Benefit Reality",
        content:
          "AI voice agents typically cost between EUR 200 and EUR 1,000 per month depending on call volume and complexity. Compare this to the cost of a full-time receptionist or the revenue lost from missed calls. For many businesses, the maths works even if the AI only handles 60% of calls successfully.\n\nThe key metric is not whether the AI is perfect. It is whether it is better than the alternative, which in many cases is calls going to voicemail or being answered by someone already juggling three other tasks.",
      },
    ],
    relatedSlugs: [
      "5-ai-tools-every-irish-sme-should-use",
      "crm-implementation-irish-smes-guide",
    ],
    ctaText: "Explore AI voice for your business",
    ctaLink: "/services/ai-growth-tools",
  },

  "5-ai-tools-every-irish-sme-should-use": {
    slug: "5-ai-tools-every-irish-sme-should-use",
    title: "5 AI Tools Every Irish SME Should Be Using Right Now",
    metaDescription:
      "Five practical AI tools that save Irish SMEs real time and money right now. No hype or buzzwords — just proven tools that work for everyday business operations.",
    category: "ai-growth-tools",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-01-17",
    excerpt:
      "Forget the AI hype cycle. These five tools are saving Irish businesses real time and money right now.",
    readingTimeMinutes: 6,
    sections: [
      {
        heading: "Cutting Through the AI Noise",
        content:
          "Every software company has added 'AI-powered' to their marketing. Most of it is repackaged automation with a chatbot bolted on. But underneath the noise, there are tools that genuinely save time, reduce costs, and improve output for small and medium businesses.\n\nThe five tools below are ones we have seen Irish SMEs adopt successfully. They are affordable, require minimal technical skill, and deliver measurable value within the first month of use.",
      },
      {
        heading: "1. AI Writing Assistants for Business Communication",
        content:
          "Tools like Claude and ChatGPT have matured to the point where they genuinely accelerate business writing. Proposals, client emails, social media posts, job descriptions, and internal documentation can all be drafted faster with AI assistance.\n\nThe key is using these tools as a first draft accelerator, not a replacement for your voice. Write a brief outline of what you want to communicate, let the AI generate a draft, then edit it to sound like you. Most users report saving 5 to 10 hours per week on writing tasks once they develop this workflow.",
      },
      {
        heading: "2. Automated Meeting Notes and Action Items",
        content:
          "Tools like Fireflies.ai and Otter.ai join your video calls, transcribe the conversation, and generate summaries with action items. For businesses running multiple client and internal meetings daily, this eliminates the need for manual note-taking and ensures nothing falls through the cracks.\n\nThe real value is in the searchable archive. Six months from now, when you need to recall what was agreed in a client meeting, you can search the transcript rather than digging through email chains.",
        bullets: [
          "Automatic transcription of all video calls",
          "AI-generated summaries with key decisions highlighted",
          "Action items extracted and assigned automatically",
          "Searchable archive of all meeting content",
        ],
      },
      {
        heading: "3. AI-Enhanced CRM Data Entry",
        content:
          "One of the biggest adoption barriers for CRM systems is manual data entry. Tools that automatically log emails, calls, and meeting notes into your CRM remove this friction entirely. HubSpot and Pipedrive both offer AI-assisted features that capture activity without manual input.\n\nFor sales teams, this means reps spend less time on admin and more time selling. For managers, it means pipeline data is more accurate because it does not depend on someone remembering to update a deal record.",
      },
      {
        heading: "4. Visual Content Creation with AI",
        content:
          "Canva's AI features and purpose-built tools like Midjourney allow businesses to create professional visual content without a graphic designer. Social media graphics, presentation slides, and marketing materials that previously required outsourcing can now be produced in-house in minutes.\n\nFor Irish SMEs that cannot justify a full-time designer, this is transformative. The quality of AI-generated visuals is now good enough for most business applications, particularly social media and internal presentations.",
      },
      {
        heading: "5. Intelligent Scheduling and Calendar Management",
        content:
          "AI scheduling tools like Reclaim.ai and Clockwise analyse your calendar patterns, prioritise your tasks, and automatically find optimal meeting times. For business owners juggling client meetings, team management, and strategic work, these tools protect focused work time that would otherwise be consumed by scheduling logistics.\n\nThe ROI is measured in recovered hours. If an AI scheduler saves you 30 minutes per day of scheduling back-and-forth, that is over 10 hours per month of productive time returned to you.",
      },
    ],
    relatedSlugs: [
      "ai-voice-agents-sales-what-works-what-is-hype",
      "hidden-cost-disconnected-systems-revenue-leakage",
    ],
    ctaText: "Get AI working for your business",
    ctaLink: "/services/ai-growth-tools",
  },

  /* ═══════════════════════════════════════════════════════════
   * PILLAR 7 — SALES ENABLEMENT
   * ═══════════════════════════════════════════════════════════ */

  "discovery-call-framework-that-converts": {
    slug: "discovery-call-framework-that-converts",
    title: "The Discovery Call Framework That Converts",
    metaDescription:
      "A proven discovery call framework that qualifies prospects and sets up winning proposals. Stop wasting time on calls that go nowhere.",
    category: "sales-enablement",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-01-24",
    excerpt:
      "The discovery call is where deals are won or lost. Here is the framework that consistently turns conversations into clients.",
    readingTimeMinutes: 7,
    sections: [
      {
        heading: "Why Discovery Is the Most Important Stage",
        content:
          "Most sales processes fail at discovery, not at the proposal stage. When you lose a deal after sending a proposal, the real loss happened 30 minutes into the discovery call when you missed a critical piece of information or failed to establish enough urgency to act.\n\nA structured discovery process serves two purposes: it qualifies whether this prospect is genuinely a good fit, and it builds enough trust and urgency that the prospect is ready to move forward. Both are equally important.",
      },
      {
        heading: "The SPIN Framework Adapted for Services",
        content:
          "The classic SPIN framework — Situation, Problem, Implication, Need-Payoff — works exceptionally well for service businesses. Start by understanding their current situation without assumptions. Then dig into the specific problems they face. Explore the implications of those problems going unsolved. Finally, help them articulate what solving the problem would be worth.\n\nThe crucial part is the Implication phase. When a prospect tells you their sales team wastes two hours a day on manual data entry, ask what that costs them in lost selling time. Help them calculate the annual cost. When the problem has a number attached to it, your proposal becomes an investment with a return, not an expense.",
        bullets: [
          "Situation: 'Walk me through how your team currently handles...'",
          "Problem: 'Where do things typically break down?'",
          "Implication: 'What does that cost you in terms of...'",
          "Need-Payoff: 'If we solved that, what would the impact be?'",
        ],
      },
      {
        heading: "Qualifying Without Interrogating",
        content:
          "Nobody likes being interrogated. The best discovery calls feel like a collaborative conversation where both parties are exploring whether there is a genuine fit. Weave your qualifying questions naturally into the dialogue rather than running through a checklist.\n\nYou need to establish four things: do they have the problem you solve, do they have the budget to invest in solving it, can the person you are speaking to make or influence the buying decision, and is there a compelling reason to act now rather than in six months?",
      },
      {
        heading: "Setting Up the Proposal",
        content:
          "The end of a discovery call should naturally lead into the next step. Summarise what you have learned, confirm the key priorities, and outline what your proposal will cover. This is also when you set the timeline: 'I will have a proposal to you by Thursday. Can we schedule 30 minutes on Friday to walk through it together?'\n\nBooking the proposal review meeting before the call ends dramatically increases close rates. If you send a proposal into a void and hope the prospect reads it, you have lost control of the process.",
      },
      {
        heading: "Post-Call Follow-Up",
        content:
          "Within two hours of the discovery call, send a brief recap email. Summarise the three or four key challenges discussed, confirm the agreed next steps, and restate the timeline. This demonstrates professionalism, keeps you top of mind, and creates a written record that the prospect can share with other stakeholders.\n\nInclude one piece of additional value: a relevant case study, a short article, or a simple framework related to their challenge. This positions you as a resource, not just a vendor.",
      },
    ],
    relatedSlugs: [
      "sales-process-costing-you-deals-how-to-fix",
      "cold-email-not-dead-irish-b2b-meeting-booking",
    ],
    ctaText: "Improve your sales conversations",
    ctaLink: "/services/sales-enablement",
  },

  "sales-process-costing-you-deals-how-to-fix": {
    slug: "sales-process-costing-you-deals-how-to-fix",
    title: "Why Your Sales Process Is Costing You Deals",
    metaDescription:
      "Common sales process mistakes that silently kill deals before you even know they are lost. Learn how to diagnose and fix the leaks in your pipeline.",
    category: "sales-enablement",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-01-31",
    excerpt:
      "You are probably losing deals you should be winning. Here are the process gaps that let them slip away.",
    readingTimeMinutes: 6,
    sections: [
      {
        heading: "The Deals You Never Knew You Lost",
        content:
          "For every deal you visibly lose to a competitor, there are two or three that silently die because your process let them down. The prospect who never got a follow-up call. The proposal that arrived a week late. The lead who called and got voicemail three times before giving up.\n\nThese are not sales failures. They are process failures. And they are almost always fixable once you identify them.",
      },
      {
        heading: "Speed to Lead: The 5-Minute Rule",
        content:
          "Research consistently shows that responding to a new lead within five minutes makes you dramatically more likely to convert them. After 30 minutes, the odds drop significantly. After 24 hours, you might as well not bother.\n\nYet most Irish SMEs have no system for lead response. Enquiries sit in a shared inbox until someone notices them. Website form submissions are checked once a day. The fix is straightforward: set up instant notifications, assign clear ownership, and measure response time as a KPI.",
        bullets: [
          "Responding within 5 minutes: 21x more likely to qualify the lead",
          "Responding within 30 minutes: still reasonable but losing ground",
          "Responding after 24 hours: prospect has likely contacted competitors",
          "No response: 35-50% of sales go to the vendor that responds first",
        ],
      },
      {
        heading: "Follow-Up: Where Deals Go to Die",
        content:
          "80% of sales require five or more follow-up touches. Most salespeople stop after two. This gap between required effort and actual effort is where the majority of winnable deals are lost.\n\nThe issue is usually not laziness. It is a lack of system. Without a CRM reminding you to follow up, without a sequence guiding the content of each touchpoint, follow-ups become something you do when you remember, which means you forget more often than you remember.",
      },
      {
        heading: "Proposal Presentation vs. Proposal Sending",
        content:
          "Emailing a proposal as a PDF and hoping for the best is not a sales process. It is a lottery ticket. Proposals should be presented live, in a meeting or call where you can walk through the thinking, address concerns in real time, and ask for the business.\n\nWhen you present live, you control the narrative. You can emphasise the parts that matter most to this specific buyer. You can handle objections before they become deal-breakers. And you can establish a clear timeline for decision-making.",
      },
      {
        heading: "Building a Process That Scales",
        content:
          "Document your ideal sales process from first touch to signed contract. Define what happens at each stage, who is responsible, and what triggers the move to the next stage. Then put it in your CRM so that every deal follows the same path.\n\nThis does not mean every conversation is scripted. It means the critical steps — follow-up timing, proposal delivery, contract review — happen consistently regardless of who is handling the deal. When process is reliable, results become predictable.",
      },
    ],
    relatedSlugs: [
      "discovery-call-framework-that-converts",
      "end-of-referral-dependency-predictable-pipeline",
    ],
    ctaText: "Fix the leaks in your sales process",
    ctaLink: "/services/sales-enablement",
  },

  /* ═══════════════════════════════════════════════════════════
   * PILLAR 8 — CUSTOMER RETENTION
   * ═══════════════════════════════════════════════════════════ */

  "revenue-you-are-ignoring-customer-retention-guide": {
    slug: "revenue-you-are-ignoring-customer-retention-guide",
    title: "The Revenue You're Ignoring: Customer Retention Guide",
    metaDescription:
      "Acquiring new clients costs 5-7x more than retaining existing ones. A practical guide to customer retention strategies for growing businesses.",
    category: "customer-retention",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-02-07",
    excerpt:
      "Your existing clients are your most profitable growth channel. Most businesses massively under-invest in keeping them.",
    readingTimeMinutes: 7,
    sections: [
      {
        heading: "The Retention Revenue Gap",
        content:
          "Acquiring a new client costs five to seven times more than retaining an existing one. A 5% increase in retention can increase profitability by 25% to 95%. These statistics are widely known and widely ignored.\n\nMost businesses pour resources into lead generation and new business development while existing client relationships run on autopilot. There is no retention strategy, no systematic upsell process, and no early warning system for at-risk accounts. The result is preventable churn that silently undermines growth.",
      },
      {
        heading: "Understanding Why Clients Leave",
        content:
          "Clients rarely leave because of a single dramatic failure. They leave because of accumulated indifference. Missed check-ins, slow responses, the feeling that they are no longer a priority. By the time they start shopping for alternatives, the relationship is already damaged beyond easy repair.\n\nThe most dangerous clients are the ones who never complain. They simply disengage gradually, reduce their spend, and eventually move on without explanation. If you are only paying attention to the clients who raise issues, you are missing the ones who are quietly walking away.",
        bullets: [
          "68% of clients leave because they feel the company is indifferent to them",
          "14% leave because of unresolved dissatisfaction",
          "9% leave for competitive offers",
          "5% leave for other reasons including business changes",
        ],
      },
      {
        heading: "Building a Retention System",
        content:
          "Retention is not a feeling. It is a system. Schedule quarterly business reviews with your top 20% of clients. Create automated check-in touchpoints at 30, 60, and 90 days after onboarding. Assign every client an internal health score based on engagement, communication frequency, and contract renewal timeline.\n\nThe health score is critical. It gives you an early warning when a client is drifting. If communication drops off, if they stop attending scheduled calls, or if their usage of your service decreases, these are leading indicators that need immediate attention.",
      },
      {
        heading: "Systematic Upselling and Cross-Selling",
        content:
          "Your existing clients already trust you. They already understand your capabilities. Expanding the relationship is dramatically easier than starting a new one from scratch.\n\nMap your service offerings against each client's current engagement. Identify gaps where additional services would deliver value. Then present these opportunities in the context of their business goals, not your revenue targets. A quarterly review that surfaces a genuine opportunity to help them grow is welcomed. A random upsell email is not.",
      },
      {
        heading: "Measuring Retention Health",
        content:
          "Track three metrics: client retention rate (percentage of clients retained year-over-year), revenue retention rate (which accounts for upsells and expansions), and Net Promoter Score or equivalent satisfaction measure.\n\nRevenue retention is the most important because it is possible to retain all your clients while still losing revenue if accounts shrink. A healthy business should target net revenue retention above 100%, meaning expansions within existing accounts exceed any contraction.",
      },
    ],
    relatedSlugs: [
      "client-onboarding-win-or-lose-relationship",
      "build-referral-programme-that-actually-works",
    ],
    ctaText: "Build a retention system that grows revenue",
    ctaLink: "/services/customer-retention",
  },

  "client-onboarding-win-or-lose-relationship": {
    slug: "client-onboarding-win-or-lose-relationship",
    title:
      "Client Onboarding Is Where You Win or Lose the Relationship",
    metaDescription:
      "First impressions set the tone for the entire client relationship. A structured onboarding process reduces churn and accelerates results.",
    category: "customer-retention",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-02-14",
    excerpt:
      "The first 30 days with a new client determine whether they stay for years or leave at the first opportunity.",
    readingTimeMinutes: 6,
    sections: [
      {
        heading: "The Onboarding Moment of Truth",
        content:
          "Your client just signed a contract. They are excited, committed, and probably a little nervous about whether they made the right decision. What happens in the next 30 days will either validate their choice or trigger buyer's remorse.\n\nThe transition from sales to delivery is the riskiest moment in any client relationship. Promises made during the sales process need to be acknowledged, expectations need to be calibrated, and momentum needs to be maintained. Most businesses handle this poorly because there is no structured process — just an informal handoff and a hope that things work out.",
      },
      {
        heading: "The Structured Onboarding Framework",
        content:
          "A good onboarding process has three phases: Welcome (days 1-3), Setup (days 4-14), and First Value (days 15-30). Each phase has defined deliverables, communication touchpoints, and milestones.\n\nDuring Welcome, the client should receive a personal welcome message from their account lead, an onboarding guide explaining what happens next, and a scheduling link for their kickoff meeting. This should happen within 24 hours of contract signing. Every hour of silence after signing increases anxiety.",
        bullets: [
          "Day 1: Welcome email + onboarding guide + kickoff scheduling",
          "Day 3: Kickoff meeting — goals, timeline, team introductions",
          "Day 7: First progress update, even if it is just planning confirmation",
          "Day 14: Initial deliverable or milestone completion",
          "Day 30: First value review — results, feedback, adjustments",
        ],
      },
      {
        heading: "Managing Expectations Proactively",
        content:
          "Under-promise and over-deliver is a cliche because it works. During onboarding, be explicit about timelines, what the client needs to provide, and what they should expect at each stage. Document everything in a shared project brief.\n\nThe biggest onboarding mistake is assuming the client remembers everything discussed during the sales process. They do not. Restate the scope, the timeline, and the success metrics in writing during the kickoff. This prevents scope creep and misaligned expectations down the line.",
      },
      {
        heading: "Early Wins Build Long-Term Trust",
        content:
          "Deliver a visible, tangible result as early as possible in the relationship. It does not have to be the final deliverable. A completed audit, an initial strategy document, a quick-win implementation — anything that demonstrates competence and momentum.\n\nEarly wins serve a psychological function beyond their practical value. They validate the client's decision to hire you, build confidence in your team's capabilities, and create positive momentum that carries through the more complex work ahead.",
      },
      {
        heading: "Feedback Loops From Day One",
        content:
          "Build feedback collection into the onboarding process rather than waiting for something to go wrong. A simple check-in at the two-week mark asking 'How is the experience so far? Anything we should adjust?' catches issues before they become frustrations.\n\nThe best time to establish a feedback culture is at the beginning of the relationship when both parties are most engaged. If you normalise open feedback from day one, clients are more likely to tell you about problems early rather than letting them fester.",
      },
    ],
    relatedSlugs: [
      "revenue-you-are-ignoring-customer-retention-guide",
      "sales-process-costing-you-deals-how-to-fix",
    ],
    ctaText: "Design an onboarding process that retains clients",
    ctaLink: "/services/customer-retention",
  },

  /* ═══════════════════════════════════════════════════════════
   * PILLAR 9 — BRAND POSITIONING
   * ═══════════════════════════════════════════════════════════ */

  "not-too-small-for-brand-strategy-irish-smes": {
    slug: "not-too-small-for-brand-strategy-irish-smes",
    title: "You're Not Too Small for a Brand Strategy",
    metaDescription:
      "Brand strategy is not just for big companies with big budgets. Learn why Irish SMEs need clear brand positioning and how to build one that drives growth.",
    category: "brand-positioning",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-02-21",
    excerpt:
      "Think branding is only for multinationals? The most successful Irish SMEs have a clear brand strategy. Here is how to build yours.",
    readingTimeMinutes: 6,
    sections: [
      {
        heading: "The Brand Strategy Misconception",
        content:
          "When small business owners hear 'brand strategy,' they think of logo redesigns, expensive agencies, and marketing budgets they cannot justify. That is not what brand strategy is.\n\nBrand strategy is the answer to three questions: Who do you serve? What do you do better than anyone else? Why should they choose you? If your team cannot answer these consistently, you do not have a brand problem. You have a clarity problem. And clarity is free.",
      },
      {
        heading: "Why It Matters at Every Size",
        content:
          "A clear brand position makes everything else easier. Marketing copy writes itself when you know exactly who you are talking to. Sales conversations flow naturally when your value proposition is crisp. Hiring decisions become clearer when your company's identity is well-defined.\n\nIrish SMEs competing against larger companies cannot outspend them. But they can out-position them. A specialist beats a generalist every time in the buyer's mind. If you are a Limerick-based consultancy that specialises in helping manufacturing companies grow, that is more compelling than being 'a business consultancy that does everything.'",
        bullets: [
          "Specialist positioning commands higher fees than generalist",
          "Clear positioning reduces your cost of customer acquisition",
          "Strong brand identity attracts better talent",
          "Consistent messaging builds trust faster than volume",
        ],
      },
      {
        heading: "Building Your Position in One Day",
        content:
          "You do not need a six-month engagement to define your brand position. Get your leadership team in a room for one day and answer these questions: Who is your ideal client, specifically? What is the primary pain they experience? What is your unique approach to solving it? What proof do you have that it works?\n\nWrite the answers on one page. That page is your brand strategy. Everything else — your messaging, your visual identity, your content — flows from these answers.",
      },
      {
        heading: "Operationalising Your Brand",
        content:
          "A brand strategy that lives in a document and never touches daily operations is worthless. The real work is embedding your positioning into every customer touchpoint: your website copy, your proposal templates, your email signatures, how your team answers the phone, and how you describe yourself at networking events.\n\nCreate a simple messaging guide: a one-page document with your positioning statement, three key messages, and the specific language your team should use and avoid. Share it with everyone. Review it quarterly.",
      },
      {
        heading: "Measuring Brand Strength",
        content:
          "Brand strength for an SME is not measured in awareness surveys. It is measured in business outcomes. Are you attracting the right kind of enquiries? Are prospects arriving already understanding what you do? Are you competing on value rather than price?\n\nIf you find yourself constantly explaining what you do, your positioning is not working. If prospects say 'I found you because someone told me you are the best at X,' your positioning is doing its job.",
      },
    ],
    relatedSlugs: [
      "how-to-price-services-without-racing-to-bottom",
      "enterprise-ireland-grants-2026-what-you-qualify-for",
    ],
    ctaText: "Define your brand positioning",
    ctaLink: "/services/brand-positioning",
  },

  "how-to-price-services-without-racing-to-bottom": {
    slug: "how-to-price-services-without-racing-to-bottom",
    title: "How to Price Your Services Without Racing to the Bottom",
    metaDescription:
      "Stop competing on price and attracting the wrong clients. Learn value-based pricing strategies that let you charge what you are worth and win premium work.",
    category: "brand-positioning",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-02-28",
    excerpt:
      "If you are always the cheapest option, you are attracting the wrong clients. Here is how to price on value instead.",
    readingTimeMinutes: 7,
    sections: [
      {
        heading: "The Race to the Bottom",
        content:
          "When you compete on price, you attract price-sensitive clients who will leave the moment someone cheaper comes along. You erode your margins, burn out your team delivering more for less, and train the market to see your service as a commodity.\n\nThe irony is that being the cheapest option often makes you less credible, not more attractive. When a prospect sees a bid significantly below the competition, they do not think they are getting a bargain. They wonder what is wrong.",
      },
      {
        heading: "Value-Based Pricing Fundamentals",
        content:
          "Value-based pricing means setting your price based on the outcome you deliver for the client, not the hours you spend delivering it. If your marketing programme generates EUR 500,000 in new revenue for a client, charging EUR 50,000 for it is not expensive. It is a 10x return.\n\nThe shift requires understanding the economic impact of your work. During discovery calls, quantify the problem. What is the cost of the status quo? What is the value of the desired outcome? When you can frame your fee as a fraction of the value delivered, price resistance disappears.",
        bullets: [
          "Calculate the client's cost of the problem (lost revenue, wasted time, missed opportunities)",
          "Quantify the expected outcome of your solution",
          "Price as a percentage of the value delivered (typically 10-20%)",
          "Present investment vs. return, not cost vs. budget",
        ],
      },
      {
        heading: "Packaging and Tiering",
        content:
          "Offering a single price point forces a yes/no decision. Offering three tiers — a basic package, a standard package, and a premium package — allows the client to self-select based on their budget and ambition while anchoring them against the premium option.\n\nStructure your tiers so that the middle option is the most attractive value. Most buyers will avoid the cheapest (perceived as inadequate) and the most expensive (perceived as unnecessary) and land on the middle tier, which should be your target offering.",
      },
      {
        heading: "Communicating Value in Proposals",
        content:
          "Your proposal should not lead with price. It should lead with the problem, your understanding of the situation, your recommended approach, and the expected outcomes. Price should appear after the value has been established, not before.\n\nWhen you present the investment section, frame it in terms of return. 'An investment of EUR 15,000 to implement a system that is projected to save your team 20 hours per week' is very different from 'Our fee for CRM implementation is EUR 15,000.'",
      },
      {
        heading: "Handling Price Objections",
        content:
          "When a prospect says 'that is more than we budgeted,' the correct response is not to discount. It is to revisit the value. 'I understand. Let me make sure we are aligned on what this delivers. You mentioned the current situation is costing you roughly EUR 10,000 per month in lost productivity. Our solution addresses that within the first quarter. Does the investment still feel disproportionate?'\n\nIf the prospect genuinely cannot afford your fee, adjust the scope rather than the price. Offer a smaller engagement with a defined outcome and a path to expand. Never devalue your full offering by cutting the price without cutting the scope.",
      },
    ],
    relatedSlugs: [
      "not-too-small-for-brand-strategy-irish-smes",
      "discovery-call-framework-that-converts",
    ],
    ctaText: "Position your brand for premium pricing",
    ctaLink: "/services/brand-positioning",
  },

  /* ═══════════════════════════════════════════════════════════
   * PILLAR 10 — PARTNERSHIPS
   * ═══════════════════════════════════════════════════════════ */

  "build-referral-programme-that-actually-works": {
    slug: "build-referral-programme-that-actually-works",
    title: "How to Build a Referral Programme That Actually Works",
    metaDescription:
      "Turn word-of-mouth into a system. A step-by-step guide to building a referral programme that generates consistent, qualified leads.",
    category: "partnerships",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-03-04",
    excerpt:
      "Referrals are your best leads. Stop leaving them to chance and build a system that makes them predictable.",
    readingTimeMinutes: 6,
    sections: [
      {
        heading: "From Random to Reliable",
        content:
          "Every business owner knows referrals are their best leads. Referred prospects close faster, spend more, and stay longer. Yet most businesses treat referrals as a happy accident rather than a channel they actively manage.\n\nThe difference between hoping for referrals and generating them consistently is structure. A referral programme does not have to be complex, but it does need to be intentional. You need to ask the right people at the right time, make it easy for them to refer, and give them a reason to do it more than once.",
      },
      {
        heading: "Identifying Your Best Referral Sources",
        content:
          "Not all clients are equally likely to refer. Your best referral sources share three characteristics: they are genuinely delighted with your work, they have a network that includes your target prospects, and they are naturally connective people who enjoy making introductions.\n\nRank your client base on these criteria. Your top 10 to 15 referral sources are worth more strategic attention than the rest. These are the clients you should be building deeper relationships with, inviting to events, and checking in with more frequently.",
        bullets: [
          "Identify clients with the highest satisfaction and largest relevant networks",
          "Prioritise connectors: people who naturally make introductions",
          "Map their industry connections to your target market",
          "Nurture these relationships beyond the transactional",
        ],
      },
      {
        heading: "Designing the Ask",
        content:
          "The ask is where most referral programmes stall. Business owners feel awkward asking for referrals, so they either do not ask at all or they ask so timidly that the request does not register.\n\nBe specific. Instead of 'Do you know anyone who might need our help?' try 'We are looking to work with more manufacturing companies in the Midwest region. Do you know any operations directors who might be dealing with the same challenges you were?' Specificity makes it easy for your client to think of the right person.",
      },
      {
        heading: "Incentives and Recognition",
        content:
          "Incentives work, but they do not have to be financial. Many clients are uncomfortable accepting cash for referrals. Instead, consider recognition: a handwritten thank you note, a gift basket, a shout-out in your newsletter, or an invitation to an exclusive event.\n\nIf you do offer financial incentives, keep them proportionate and transparent. A discount on their next invoice or a gift card for each successful referral is straightforward and appreciated. The key is consistency: thank every referral, whether or not it converts.",
      },
      {
        heading: "Tracking and Optimising",
        content:
          "Track every referral in your CRM: who referred whom, when, the outcome, and any incentive provided. This data lets you identify your most productive referral sources, understand which types of referrals convert best, and optimise your programme over time.\n\nReview the numbers quarterly. If referrals are declining, it may be time to refresh your ask or re-engage your key sources. If a particular source consistently sends high-quality referrals, invest more heavily in that relationship.",
      },
    ],
    relatedSlugs: [
      "strategic-partnerships-growth-channel-playbook",
      "revenue-you-are-ignoring-customer-retention-guide",
    ],
    ctaText: "Build a referral engine for your business",
    ctaLink: "/services/partnerships",
  },

  "strategic-partnerships-growth-channel-playbook": {
    slug: "strategic-partnerships-growth-channel-playbook",
    title: "Strategic Partnerships as a Growth Channel",
    metaDescription:
      "Strategic partnerships can accelerate growth faster than any marketing channel. A playbook for Irish businesses on finding and building them.",
    category: "partnerships",
    author: DEFAULT_AUTHOR,
    publishDate: "2026-03-06",
    excerpt:
      "The right partnership can open more doors in a month than cold outreach does in a year. Here is how to find and build them.",
    readingTimeMinutes: 7,
    sections: [
      {
        heading: "Why Partnerships Outperform Solo Growth",
        content:
          "There is a ceiling to how fast you can grow through your own channels alone. You can only send so many cold emails, run so many ads, and attend so many networking events. Strategic partnerships break through that ceiling by giving you access to someone else's audience, credibility, and client relationships.\n\nIn the Irish market, where relationships and reputation carry enormous weight, a warm introduction from a trusted partner is worth more than any marketing campaign. The companies that grow fastest are typically the ones that build the strongest ecosystems around them.",
      },
      {
        heading: "Finding the Right Partners",
        content:
          "The ideal partner serves the same client profile as you but with a non-competing service. If you are a web development agency, your ideal partners include branding consultancies, copywriters, and digital marketing firms. You share clients but not capabilities.\n\nLook for partners at a similar stage of growth. Partnerships between companies of vastly different sizes rarely work because the value exchange is unbalanced. A 5-person consultancy and a 500-person enterprise have very different priorities and pace.",
        bullets: [
          "Same target client, different service offering",
          "Similar company size and growth stage",
          "Complementary capabilities that create a stronger combined offering",
          "Shared values around quality and client service",
          "Active in the same geographic or industry markets",
        ],
      },
      {
        heading: "Structuring the Partnership",
        content:
          "Start informal. Before you draft agreements and define referral fees, co-host a webinar, collaborate on a piece of content, or simply refer a client to each other to test the relationship. If the chemistry works and both parties deliver quality work, formalise it.\n\nA good partnership agreement covers three things: how referrals are made, how revenue is shared (if applicable), and how either party can exit gracefully. Keep it simple. Overly complex agreements create friction that discourages referrals.",
      },
      {
        heading: "Making Partnerships Productive",
        content:
          "Most partnerships fail not because of a bad match but because of neglect. You sign up with great intentions, send a few referrals in month one, and then forget about it. Partnerships need rhythm.\n\nSchedule a monthly or quarterly check-in with each active partner. Share updates on your services, discuss mutual clients, and look for collaboration opportunities. Treat your partner relationships with the same discipline you apply to your client relationships.",
      },
      {
        heading: "The Irish Advantage",
        content:
          "Ireland's business community is small enough that genuine relationships scale further than in larger markets. A strong reputation in your industry niche travels fast. Enterprise Ireland's trade missions, industry events, and networking groups provide natural opportunities to meet potential partners.\n\nLocal chambers of commerce, industry bodies like IBEC, and tech community groups are fertile ground for partnership development. The key is to approach these with a partnership mindset: 'How can we help each other's clients?' rather than 'How can I sell to your network?'",
      },
    ],
    relatedSlugs: [
      "build-referral-programme-that-actually-works",
      "end-of-referral-dependency-predictable-pipeline",
    ],
    ctaText: "Develop strategic growth partnerships",
    ctaLink: "/services/partnerships",
  },
};

// ─── Helpers ─────────────────────────────────────────────────

export function getSortedPosts(): BlogPostConfig[] {
  return Object.values(BLOG_POSTS).sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getPostsByCategory(category: BlogCategory): BlogPostConfig[] {
  return getSortedPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(post: BlogPostConfig): BlogPostConfig[] {
  return post.relatedSlugs
    .map((slug) => BLOG_POSTS[slug])
    .filter(Boolean);
}
