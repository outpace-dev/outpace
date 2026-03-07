"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
import ParticleField from "@/components/ParticleField";
import BlogCard from "@/components/BlogCard";
import { BLOG_CATEGORIES } from "@/lib/blog-configs";
import type { BlogPostConfig } from "@/lib/blog-configs";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  User,
  Tag,
} from "lucide-react";

/* ───── Types ───── */
interface BlogPostContentProps {
  post: BlogPostConfig;
  category: {
    label: string;
    serviceSlug: string;
    gradient: string;
    pillarNumber: number;
  };
  relatedPosts: BlogPostConfig[];
}

/* ───── Helpers ───── */
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* ───── Page Content ───── */
export default function BlogPostContent({
  post,
  category,
  relatedPosts,
}: BlogPostContentProps) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-brand-darkest pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <ParticleField />
        </div>
        <GlowOrb
          color="rgba(34, 211, 238, 0.08)"
          size={500}
          top="-15%"
          right="-10%"
          duration={10}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          {/* Category pill */}
          <AnimatedSection>
            <Link
              href={`/blog?category=${post.category}`}
              className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${category.gradient} px-4 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90`}
            >
              <Tag size={12} />
              {category.label}
            </Link>
          </AnimatedSection>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-brand-text leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta row */}
          <AnimatedSection delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brand-muted">
              <span className="inline-flex items-center gap-1.5">
                <User size={14} className="text-brand-cyan-bright" />
                {post.author.name}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} className="text-brand-cyan-bright" />
                {formatDate(post.publishDate)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} className="text-brand-cyan-bright" />
                {post.readingTimeMinutes} min read
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {post.sections.map((section, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <article>
                  {/* Section heading with cyan left border */}
                  <h2 className="border-l-2 border-brand-cyan-bright pl-4 text-2xl font-bold text-brand-text mb-4">
                    {section.heading}
                  </h2>

                  {/* Section content */}
                  <p className="text-brand-muted leading-relaxed text-base whitespace-pre-line">
                    {section.content}
                  </p>

                  {/* Bullet points */}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-brand-muted text-base leading-relaxed"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-cyan-bright shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* ── CTA Banner ── */}
          <AnimatedSection delay={0.1}>
            <div className="mt-16 relative rounded-2xl border border-brand-cyan/20 overflow-hidden">
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/[0.06] to-brand-teal/[0.03]" />

              <div className="relative p-8 sm:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-text">
                  Want help with {category.label.toLowerCase()}?
                </h3>
                <p className="mt-2 text-brand-muted leading-relaxed">
                  {post.ctaText ||
                    "Talk to our team about how we can help your business grow."}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={
                      post.ctaLink || `/services/${category.serviceSlug}`
                    }
                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-cyan/20 transition-all duration-300 hover:from-brand-cyan-bright hover:to-brand-cyan"
                  >
                    Learn more
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-brand-cyan/30 hover:bg-white/[0.03]"
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {relatedPosts.length > 0 && (
        <section className="bg-brand-darkest py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-brand-text mb-8">
                More from our blog
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard
                  key={relatedPost.slug}
                  post={relatedPost}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Back Link ── */}
      <section className="bg-brand-darkest pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-brand-cyan-bright hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back to all articles
          </Link>
        </div>
      </section>
    </>
  );
}
