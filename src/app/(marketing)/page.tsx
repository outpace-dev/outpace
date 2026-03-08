import { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Full-Spectrum Business Development in Ireland",
  description:
    "Outpace is a Limerick-based business development partner helping Irish SMEs grow. Strategy, lead generation, digital presence, CRM systems, and content — all under one roof.",
  openGraph: {
    title: "Outpace | Full-Spectrum Business Development in Ireland",
    description:
      "Your full-spectrum business development partner. Strategy, lead generation, digital presence, systems, and content — all under one roof.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
