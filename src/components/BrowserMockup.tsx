"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

interface BrowserMockupProps {
  url: string;
  screenshot: string;
  className?: string;
}

export default function BrowserMockup({
  url,
  screenshot,
  className = "",
}: BrowserMockupProps) {
  return (
    <AnimatedSection>
      <div className={`rounded-2xl overflow-hidden border border-brand-border/50 shadow-2xl shadow-black/40 ${className}`}>
        {/* Browser Chrome */}
        <div className="flex items-center gap-3 px-4 py-3 bg-brand-darkest border-b border-brand-border/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-md bg-brand-dark/80 text-xs text-brand-muted font-mono">
              {url}
            </div>
          </div>
          <div className="w-[52px]" />
        </div>

        {/* Real Screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={screenshot}
            alt={`${url} website screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
            initial={{ x: "-100%" }}
            whileInView={{ x: "200%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
