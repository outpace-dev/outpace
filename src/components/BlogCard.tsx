"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";
import AnimatedSection from "@/components/AnimatedSection";
import { BlogPostConfig, BLOG_CATEGORIES } from "@/lib/blog-configs";

interface BlogCardProps {
  post: BlogPostConfig;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const category = BLOG_CATEGORIES[post.category];
  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-IE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <AnimatedSection delay={index * 0.1}>
      <TiltCard>
        <Link href={`/blog/${post.slug}`} className="block group">
          <div className="relative rounded-2xl border border-brand-border/50 bg-brand-dark/50 backdrop-blur-xl p-6 h-full transition-all duration-300 hover:border-brand-cyan-bright/30 hover:shadow-lg hover:shadow-brand-cyan/5">
            {/* Category pill */}
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${category.gradient} text-white mb-4`}>
              {category.label}
            </span>

            {/* Title */}
            <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-cyan-bright transition-colors duration-200 mb-3 line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-brand-muted leading-relaxed line-clamp-3 mb-6">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-brand-muted mt-auto pt-4 border-t border-brand-border/30">
              <div className="flex items-center gap-3">
                <span>{post.author.name}</span>
                <span>·</span>
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={12} />
                <span>{post.readingTimeMinutes} min</span>
              </div>
            </div>

            {/* Hover arrow + accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            <ArrowRight
              size={16}
              className="absolute top-6 right-6 text-brand-muted opacity-0 group-hover:opacity-100 group-hover:text-brand-cyan-bright transition-all duration-200 translate-x-0 group-hover:translate-x-1"
            />
          </div>
        </Link>
      </TiltCard>
    </AnimatedSection>
  );
}
