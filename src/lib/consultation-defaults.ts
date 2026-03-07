import type { ExtractedConsultationData } from "./types";

export function createEmptyExtractedData(): ExtractedConsultationData {
  return {
    company: {
      name: null, industry: null, employeeCount: null,
      annualRevenue: null, location: null, website: null,
      contactName: null, contactRole: null, contactEmail: null,
    },
    primaryPainBranch: null,
    secondaryPainBranches: [],
    businessAnalysis: {
      growthStage: null, competitivePosition: null,
      uspClarity: null, targetMarketClarity: null, grantEligibility: null,
    },
    leadGeneration: {
      currentLeadSources: null, outboundProcess: null,
      monthlyLeadVolume: null, averageDealSize: null, closeRate: null,
    },
    digitalPresence: {
      lastWebsiteRedesign: null, enquiryGeneration: null,
      keywordRankings: null, paidAdsStatus: null, currentCMS: null,
    },
    systemsOperations: {
      currentCRM: null, leadTrackingMethod: null,
      dataSilos: null, automatedFollowUps: null,
    },
    contentBrand: {
      contentStrategy: null, linkedInActivity: null,
      videoInvestment: null, uspCommunication: null,
    },
    aiGrowthTools: {
      currentAIUsage: null, salesProcessAutomation: null,
      teamOpenness: null, aiToolsInterest: null,
    },
    salesEnablement: {
      salesProcess: null, discoveryCallQuality: null,
      objectionHandling: null, pipelineReview: null,
    },
    clientRetention: {
      repeatRevenuePercentage: null, followUpProcess: null,
      npsScore: null, upsellPrograms: null,
    },
    brandPositioning: {
      currentPositioning: null, messagingConsistency: null,
      icpClarity: null, gtmReadiness: null,
    },
    partnerships: {
      referralStructure: null, partnerRelationships: null,
      coMarketingActivity: null, channelStrategy: null,
    },
    closing: {
      topPriorityFix: null, previousAgencyExperience: null,
      twelveMonthSuccessVision: null, monthlyBudget: null, startTimeline: null,
    },
    qualification: {
      budgetIndicated: false, timelineUrgent: false,
      decisionMaker: false, painClearlyArticulated: false,
      previousAgencyExperience: false, readyToStart: false,
      qualificationScore: 0,
    },
    currentStage: "opening",
    questionsAsked: [],
    keyInsights: [],
  };
}
