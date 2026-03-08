import { Metadata } from "next";
import CaseStudyContent from "../CaseStudyContent";

export const metadata: Metadata = {
  title: "Case Study: Cube Printing",
  description:
    "See how Outpace helped Cube Printing break into the med-tech market with outbound campaigns, video content, a new website, social media management, and AI-powered calling.",
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Case Study: How Outpace Helped Cube Printing Break Into Med-Tech",
  description:
    "See how Outpace helped Cube Printing break into the med-tech market with outbound campaigns, video content, a new website, social media management, and AI-powered calling.",
  datePublished: "2025-11-01",
  author: { "@type": "Organization", name: "Outpace" },
  publisher: {
    "@type": "Organization",
    name: "Outpace",
    url: "https://outpace-murex.vercel.app",
  },
};

export default function CubeCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <CaseStudyContent />
    </>
  );
}
