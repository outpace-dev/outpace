"use client";

import { motion } from "framer-motion";
import { BlogCategory, BLOG_CATEGORIES } from "@/lib/blog-configs";

interface CategoryFilterProps {
  active: BlogCategory | "all";
  onChange: (category: BlogCategory | "all") => void;
}

const categories = Object.entries(BLOG_CATEGORIES) as [BlogCategory, typeof BLOG_CATEGORIES[BlogCategory]][];

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="relative">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange("all")}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            active === "all"
              ? "bg-brand-cyan text-white shadow-lg shadow-brand-cyan/25"
              : "bg-brand-dark/50 text-brand-muted hover:text-brand-text border border-brand-border/50 hover:border-brand-border"
          }`}
        >
          All
        </motion.button>
        {categories.map(([key, cat]) => (
          <motion.button
            key={key}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(key)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              active === key
                ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg`
                : "bg-brand-dark/50 text-brand-muted hover:text-brand-text border border-brand-border/50 hover:border-brand-border"
            }`}
          >
            {cat.label}
          </motion.button>
        ))}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
