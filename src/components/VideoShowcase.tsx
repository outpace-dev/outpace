"use client";

import { motion } from "framer-motion";
import { Play, Factory, Users, MessageSquareQuote, Clapperboard } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";

const videos = [
  {
    title: "CUBE Overview",
    description: "A look inside Ireland's leading print & packaging company.",
    youtubeId: "9KidA_-FOMA",
    icon: Clapperboard,
    duration: "1:42",
  },
  {
    title: "Facility Showcase",
    description: "State-of-the-art equipment and cGMP-certified production lines.",
    youtubeId: "knwec-XVgZU",
    icon: Factory,
    duration: "3:32",
  },
  {
    title: "Meet the Team",
    description: "The people behind three decades of printing excellence.",
    youtubeId: "KkXUwHtjTbk",
    icon: Users,
    duration: "4:33",
  },
  {
    title: "Client Testimonial",
    description: "EI Electronics on their partnership with Cube.",
    youtubeId: "g-6RHTCuanc",
    icon: MessageSquareQuote,
    duration: "4:25",
  },
];

export default function VideoShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {videos.map((video, i) => (
        <AnimatedSection key={video.youtubeId} delay={i * 0.1}>
          <TiltCard className="h-full">
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              {/* YouTube thumbnail */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.08]">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-14 h-14 rounded-full bg-[#D4A014]/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/30"
                    whileHover={{ scale: 1.15 }}
                  >
                    <Play className="text-white ml-1" size={22} fill="currentColor" />
                  </motion.div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-xs font-mono">
                  {video.duration}
                </div>
              </div>

              <div className="mt-4 px-1">
                <div className="flex items-center gap-2 mb-1">
                  <video.icon className="text-[#D4A014]" size={16} />
                  <h4 className="font-bold text-[#D4A014]">
                    {video.title}
                  </h4>
                </div>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {video.description}
                </p>
              </div>
            </a>
          </TiltCard>
        </AnimatedSection>
      ))}
    </div>
  );
}
