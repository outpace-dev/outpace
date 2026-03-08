import { Metadata } from "next";
import WhatWeDoContent from "./WhatWeDoContent";

export const metadata: Metadata = {
  title: "What We Do — 10 Pillars of Business Growth",
  description:
    "From lead generation and digital presence to CRM systems and AI growth tools — discover the 10 service pillars Outpace delivers for Irish businesses.",
  openGraph: {
    title: "What We Do | Outpace",
    description:
      "From lead generation and digital presence to CRM systems and AI growth tools — discover the 10 service pillars Outpace delivers for Irish businesses.",
  },
};

export default function WhatWeDoPage() {
  return <WhatWeDoContent />;
}
