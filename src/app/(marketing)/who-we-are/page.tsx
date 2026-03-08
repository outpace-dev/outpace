import { Metadata } from "next";
import WhoWeAreContent from "./WhoWeAreContent";

export const metadata: Metadata = {
  title: "Who We Are — Limerick-Based Business Development Team",
  description:
    "Meet the Outpace team. Based in Limerick, Ireland, we are business development specialists helping Irish companies grow through strategy, systems, and execution.",
  openGraph: {
    title: "Who We Are | Outpace",
    description:
      "Meet the Outpace team. Based in Limerick, Ireland, we are business development specialists helping Irish companies grow.",
  },
};

export default function WhoWeArePage() {
  return <WhoWeAreContent />;
}
