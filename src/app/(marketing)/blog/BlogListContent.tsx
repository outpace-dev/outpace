"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSortedPosts, BlogCategory } from "@/lib/blog-configs";
import BlogCard from "@/components/BlogCard";
import CategoryFilter from "@/components/CategoryFilter";
import GlowOrb from "@/components/GlowOrb";
import AccentHeading from "@/components/AccentHeading";
import AnimatedSection from "@/components/AnimatedSection";

export default function BlogListContent() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");
  const allPosts = getSortedPosts();
  const filteredPosts = activeCategory === "all"
    ? allPosts
    : allPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-darkest">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <GlowOrb color="rgba(34, 211, 238, 0.08)" size={500} top="-10%" left="60%" />
        <GlowOrb color="rgba(20, 184, 166, 0.06)" size={400} top="40%" left="-10%" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <AccentHeading text="Insights & **Resources**" as="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto">
              Actionable strategies for Irish businesses that want to grow smarter, not just louder.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mb-10">
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-muted text-lg">No articles in this category yet. Check back soon.</p>
          </div>
        )}
      </section>
    </div>
  );
}
