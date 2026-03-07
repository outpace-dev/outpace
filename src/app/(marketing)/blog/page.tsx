import { Metadata } from "next";
import BlogListContent from "./BlogListContent";

export const metadata: Metadata = {
  title: "Insights & Resources | Outpace",
  description:
    "Actionable strategies for Irish businesses looking to grow. Explore our latest insights on business development, lead generation, digital presence, and more.",
};

export default function BlogPage() {
  return <BlogListContent />;
}
