import { Metadata } from "next";
import HowWeDoItContent from "./HowWeDoItContent";

export const metadata: Metadata = {
  title: "How We Do It — Our Proven Growth Framework",
  description:
    "Diagnose, Design, Deploy, Drive. Discover the four-step growth framework Outpace uses to turn Irish businesses into market leaders.",
  openGraph: {
    title: "How We Do It | Outpace",
    description:
      "Diagnose, Design, Deploy, Drive. Discover the four-step growth framework Outpace uses to turn Irish businesses into market leaders.",
  },
};

export default function HowWeDoItPage() {
  return <HowWeDoItContent />;
}
