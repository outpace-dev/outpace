import { streamText, tool, convertToModelMessages, stepCountIs } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { z } from "zod";
import { buildDiscoverySystemPrompt } from "@/lib/discovery-prompt";
import { createEmptyExtractedData } from "@/lib/consultation-defaults";
import { loadDiscoveryConfig } from "@/lib/discovery-config-loader";
import type {
  ExtractedConsultationData,
  ConsultationStage,
  PainBranch,
} from "@/lib/types";

export const maxDuration = 60;

// ─── Merge Utilities ───
function filterNullish(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined)
  );
}

function deepMergeConsultationData(
  current: ExtractedConsultationData,
  updates: Record<string, unknown>
): ExtractedConsultationData {
  const merged = { ...current };

  if (updates.company) {
    merged.company = {
      ...merged.company,
      ...filterNullish(updates.company as Record<string, unknown>),
    };
  }
  if (updates.primaryPainBranch !== undefined) {
    merged.primaryPainBranch = updates.primaryPainBranch as PainBranch | null;
  }
  if (updates.secondaryPainBranches) {
    merged.secondaryPainBranches = updates.secondaryPainBranches as PainBranch[];
  }
  if (updates.currentStage) {
    merged.currentStage = updates.currentStage as ConsultationStage;
  }

  for (const branch of [
    "businessAnalysis", "leadGeneration", "digitalPresence", "systemsOperations",
    "contentBrand", "aiGrowthTools", "salesEnablement", "clientRetention",
    "brandPositioning", "partnerships", "closing", "qualification",
  ] as const) {
    if (updates[branch]) {
      (merged as Record<string, unknown>)[branch] = {
        ...((merged as Record<string, unknown>)[branch] as Record<string, unknown>),
        ...filterNullish(updates[branch] as Record<string, unknown>),
      };
    }
  }

  if (updates.newInsight) {
    merged.keyInsights = [...merged.keyInsights, updates.newInsight as string];
  }
  if (updates.questionAsked) {
    merged.questionsAsked = [...merged.questionsAsked, updates.questionAsked as string];
  }

  return merged;
}

// ─── Shared enums ───
const painBranchValues = [
  "business_analysis", "lead_generation", "digital_presence",
  "systems_operations", "content_brand", "ai_growth_tools",
  "sales_enablement", "client_retention", "brand_positioning", "partnerships",
] as const;

const stageValues = [
  "opening", "branch_detection", "business_analysis", "lead_generation",
  "digital_presence", "systems_operations", "content_brand", "ai_growth_tools",
  "sales_enablement", "client_retention", "brand_positioning", "partnerships",
  "closing", "complete",
] as const;

export async function POST(req: Request) {
  const body = await req.json();
  const messages = body.messages ?? [];
  const currentData: ExtractedConsultationData =
    body.currentData ?? createEmptyExtractedData();
  const slug: string | undefined = body.slug;

  // Load config from Supabase (sensitive data) merged with codebase (non-sensitive)
  const pageConfig = slug ? await loadDiscoveryConfig(slug) : undefined;

  const systemPrompt = buildDiscoverySystemPrompt(currentData, pageConfig);
  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: systemPrompt,
    messages: modelMessages,
    stopWhen: stepCountIs(2),
    tools: {
      updateConsultationData: tool({
        description:
          "Update the structured consultation data with information extracted from the prospect's latest response. Call this after every user message.",
        inputSchema: z.object({
          company: z.object({
            name: z.string().nullable().optional(),
            industry: z.string().nullable().optional(),
            employeeCount: z.string().nullable().optional(),
            annualRevenue: z.string().nullable().optional(),
            location: z.string().nullable().optional(),
            website: z.string().nullable().optional(),
            contactName: z.string().nullable().optional(),
            contactRole: z.string().nullable().optional(),
            contactEmail: z.string().nullable().optional(),
          }).optional(),
          primaryPainBranch: z.enum(painBranchValues).nullable().optional(),
          secondaryPainBranches: z.array(z.enum(painBranchValues)).optional(),
          currentStage: z.enum(stageValues).optional(),
          newInsight: z.string().optional(),
          questionAsked: z.string().optional(),
          businessAnalysis: z.object({
            growthStage: z.string().nullable().optional(),
            competitivePosition: z.string().nullable().optional(),
            uspClarity: z.string().nullable().optional(),
            targetMarketClarity: z.string().nullable().optional(),
            grantEligibility: z.string().nullable().optional(),
          }).optional(),
          leadGeneration: z.object({
            currentLeadSources: z.string().nullable().optional(),
            outboundProcess: z.string().nullable().optional(),
            monthlyLeadVolume: z.string().nullable().optional(),
            averageDealSize: z.string().nullable().optional(),
            closeRate: z.string().nullable().optional(),
          }).optional(),
          digitalPresence: z.object({
            lastWebsiteRedesign: z.string().nullable().optional(),
            enquiryGeneration: z.string().nullable().optional(),
            keywordRankings: z.string().nullable().optional(),
            paidAdsStatus: z.string().nullable().optional(),
            currentCMS: z.string().nullable().optional(),
          }).optional(),
          systemsOperations: z.object({
            currentCRM: z.string().nullable().optional(),
            leadTrackingMethod: z.string().nullable().optional(),
            dataSilos: z.string().nullable().optional(),
            automatedFollowUps: z.string().nullable().optional(),
          }).optional(),
          contentBrand: z.object({
            contentStrategy: z.string().nullable().optional(),
            linkedInActivity: z.string().nullable().optional(),
            videoInvestment: z.string().nullable().optional(),
            uspCommunication: z.string().nullable().optional(),
          }).optional(),
          aiGrowthTools: z.object({
            currentAIUsage: z.string().nullable().optional(),
            salesProcessAutomation: z.string().nullable().optional(),
            teamOpenness: z.string().nullable().optional(),
            aiToolsInterest: z.string().nullable().optional(),
          }).optional(),
          salesEnablement: z.object({
            salesProcess: z.string().nullable().optional(),
            discoveryCallQuality: z.string().nullable().optional(),
            objectionHandling: z.string().nullable().optional(),
            pipelineReview: z.string().nullable().optional(),
          }).optional(),
          clientRetention: z.object({
            repeatRevenuePercentage: z.string().nullable().optional(),
            followUpProcess: z.string().nullable().optional(),
            npsScore: z.string().nullable().optional(),
            upsellPrograms: z.string().nullable().optional(),
          }).optional(),
          brandPositioning: z.object({
            currentPositioning: z.string().nullable().optional(),
            messagingConsistency: z.string().nullable().optional(),
            icpClarity: z.string().nullable().optional(),
            gtmReadiness: z.string().nullable().optional(),
          }).optional(),
          partnerships: z.object({
            referralStructure: z.string().nullable().optional(),
            partnerRelationships: z.string().nullable().optional(),
            coMarketingActivity: z.string().nullable().optional(),
            channelStrategy: z.string().nullable().optional(),
          }).optional(),
          closing: z.object({
            topPriorityFix: z.string().nullable().optional(),
            previousAgencyExperience: z.string().nullable().optional(),
            twelveMonthSuccessVision: z.string().nullable().optional(),
            monthlyBudget: z.string().nullable().optional(),
            startTimeline: z.string().nullable().optional(),
          }).optional(),
          qualification: z.object({
            budgetIndicated: z.boolean().optional(),
            timelineUrgent: z.boolean().optional(),
            decisionMaker: z.boolean().optional(),
            painClearlyArticulated: z.boolean().optional(),
            previousAgencyExperience: z.boolean().optional(),
            readyToStart: z.boolean().optional(),
            qualificationScore: z.number().min(0).max(100).optional(),
          }).optional(),
        }),
        execute: async (updates) => {
          const merged = deepMergeConsultationData(currentData, updates as unknown as Record<string, unknown>);
          return { success: true as const, data: merged };
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
