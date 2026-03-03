# Outbound Email Sequence Platform Research
## For Outpace — B2B Prospecting on Behalf of Clients (e.g., RAYN Safety & Security)
### Date: 2026-03-03

---

## TL;DR Recommendation

| Category | Platform | Monthly Cost | Why |
|----------|----------|-------------|-----|
| **Best Overall** | **Instantly.ai + Clay** | ~$230-410/mo | Best agency economics (flat fee, unlimited clients) + Clay has native Claude/GPT integration |
| **Budget Start** | **Instantly Growth + Apollo Free** | ~$50-80/mo | Enough for 1-2 clients while validating |
| **Best AI Integration** | **Clay + Claude API** | ~$134-314/mo | Only platform with native first-party Claude integration, use your own API keys |
| **Scale Later** | **Smartlead Custom + Clay Pro** | ~$500-1000/mo | White-label, 12M leads capacity, enterprise enrichment |

---

## Recommended Phased Rollout

### Phase 1 — Validation (Months 1-3): ~$50-80/mo
- Instantly Growth ($30/mo annual)
- Apollo.io Free for prospecting
- Claude API via Supabase Edge Functions for personalization
- Manual campaign management

### Phase 2 — Growth (Months 4-9): ~$250-350/mo
- Instantly Hypergrowth ($97/mo)
- Clay Starter ($134/mo) with own Claude API key
- Custom Next.js dashboard on Vercel
- Supabase for data, analytics, compliance

### Phase 3 — Scale (Months 10+): ~$500-1,000/mo
- Instantly Light Speed ($286/mo) or Smartlead Custom ($174/mo + per-client)
- Clay Explorer or Pro ($314-720/mo)
- Full custom dashboard with reply classification, lead scoring, client reporting

---

## Detailed Platform Comparison

### Tier 1: Best for Outpace

#### Instantly.ai — Best Agency Value
- **Pricing**: Growth $30/mo | Hypergrowth $97/mo | Light Speed $286/mo
- **Agency**: Unlimited client workspaces on ANY plan (no per-client fees)
- **Deliverability**: Private warmup network (4.2M+ accounts), inbox rotation, SPF/DKIM/DMARC
- **Database**: 160M+ verified B2B contacts (SuperSearch)
- **API**: Full REST API V2 with OAuth, webhooks for all events
- **LLM**: No native — but webhooks + API allow custom Claude integration via Next.js
- **GDPR**: Automated unsubscribe, consent tracking, data export for DSAR
- **CRM**: Built-in CRM module ($97/mo add-on) or use via API
- **Pros**: Best agency economics, strong API, all-in-one
- **Cons**: No native LLM integration, AI features are proprietary

#### Clay — Best Enrichment + LLM Layer
- **Pricing**: Starter $134/mo | Explorer $314/mo | Pro $720/mo
- **LLM**: **Native Claude, GPT, and Gemini integration** — use your own API keys (70-80% cheaper)
- **Enrichment**: 100+ data providers, waterfall enrichment
- **API**: HTTP API on Explorer+, webhook support
- **Role**: Middleware — enriches prospects, personalizes with Claude, pushes to sending platform
- **Pros**: Only platform with native Claude integration, extremely powerful workflows
- **Cons**: Not a sending platform (pair with Instantly), steep learning curve, credit system complex

#### Smartlead — Best White-Label Alternative
- **Pricing**: Basic $32.50/mo | Pro $78.30/mo | Custom from $174/mo
- **Agency**: True white-label (app.yourdomain.com), but $29/client/month add-on
- **Deliverability**: Variable volume sending mimics human behavior — arguably best-in-class
- **Multi-channel**: Email + LinkedIn + SMS + WhatsApp + Twitter DMs
- **API**: Robust API + webhooks
- **Pros**: Superior deliverability, true white-label, multi-channel
- **Cons**: $29/client adds up (10 clients = $290/mo extra), no prospect database

### Tier 2: Worth Considering

#### Apollo.io — Best for Prospecting Database
- **Database**: 210M+ contacts, 30M+ companies
- **Pricing**: Free (250 emails/day) | Basic $49/user/mo | Pro $79/user/mo
- **Best use**: Prospect sourcing only — pair with Instantly for sending
- **Cons**: Not agency-friendly, credit system opaque, weak deliverability

#### Woodpecker — Best EU-Based Option
- **Pricing**: From $20/mo (500 prospects)
- **GDPR**: EU-based (Poland), GDPR-compliant by design
- **Agency**: Dedicated agency panel with white-label reporting
- **Cons**: Add-on costs accumulate, smaller feature set, API is paid extra ($20/mo)

#### Reply.io — Best Built-in AI
- **Pricing**: From $99/user/mo
- **AI**: Jason AI agent for prospect finding + response handling
- **Multi-channel**: Email + LinkedIn + WhatsApp + SMS + calls
- **Cons**: Expensive, not agency-optimized, AI is proprietary (not pluggable)

#### Lemlist — Best Personalization
- **Pricing**: Email Pro $69/user/mo | Multi-Channel $99/user/mo
- **Compliance**: SOC 2 Type II + GDPR + CASA certified (strongest credentials)
- **Personalization**: Dynamic images, personalized videos, landing pages
- **Cons**: Per-user pricing expensive for agencies, credits don't roll over

### Tier 3: Avoid for Outpace

| Platform | Why Avoid |
|----------|-----------|
| **11x.ai** | $50-60K/year, not agency-friendly |
| **Regie.ai** | $35K/year, enterprise-only |
| **Artisan (Ava)** | $2-5K/mo, black-box AI, not agency-friendly |
| **AiSDR** | $900/mo minimum, limited agency features |
| **Outreach.io / Salesloft** | Enterprise pricing, not agency-oriented |
| **GMass** | Gmail-only, doesn't scale |

---

## Integration Architecture for Outpace Stack

```
Clay (Enrichment)          Instantly (Sending)
     |                           |
     | webhooks/API              | webhooks
     v                           v
  ┌─────────────────────────────────────────┐
  │     Next.js App on Vercel               │
  │     (Outpace Dashboard)                 │
  │                                         │
  │  API Routes:                            │
  │  - /api/enrichment (Clay webhooks)      │
  │  - /api/campaign (Instantly webhooks)   │
  │  - /api/classify (Claude reply triage)  │
  │  - /api/personalize (Claude email gen)  │
  └──────────────┬──────────────────────────┘
                 │
                 v
  ┌─────────────────────────────────────────┐
  │     Supabase                            │
  │                                         │
  │  Tables:                                │
  │  - prospects (enriched contact data)    │
  │  - campaigns (sequence configs)         │
  │  - events (opens, replies, bounces)     │
  │  - classifications (Claude analysis)    │
  │  - compliance (consent, opt-outs, LIA)  │
  └──────────────┬──────────────────────────┘
                 │
                 v
           Claude API
     (Personalization + Classification)
```

**Data Flow:**
1. Prospect list sourced via Clay enrichment or Apollo
2. Clay enriches with firmographics, intent signals → stores in Supabase
3. Claude API generates personalized email copy per prospect
4. Campaigns pushed to Instantly via API
5. Webhook events (opens, replies, bounces) flow back to Supabase
6. Claude classifies replies (interested / objection / meeting request)
7. Next.js dashboard shows real-time analytics per client
8. Compliance records maintained throughout

---

## GDPR Considerations (Critical for Ireland/EU)

- B2B cold email permissible under legitimate interest, but requires documented assessments
- Irish DPC is among the most active enforcement bodies in the EU
- SPF/DKIM/DMARC mandatory for all bulk senders
- Store consent and opt-out records in Supabase as source of truth
- Implement DPA (Data Processing Agreements) with chosen vendor
- Custom unsubscribe handling via Next.js app

**GDPR Platform Ranking:**
1. Lemlist (SOC 2 + GDPR + CASA certified)
2. Woodpecker (EU-based, GDPR by design)
3. Instantly/Smartlead (adequate standard features)
4. Apollo (US-centric, basic)

---

## Sources
- Instantly.ai — instantly.ai/pricing, developer.instantly.ai
- Smartlead — smartlead.ai/pricing
- Clay — clay.com/pricing, clay.com/university
- Apollo.io — apollo.io
- Lemlist — lemlist.com
- Woodpecker — woodpecker.co/pricing
- Reply.io — reply.io/pricing
- AiSDR — aisdr.com/pricing
- Artisan — artisan.co
- 11x.ai — 11x.ai
- Regie.ai — regie.ai/pricing
