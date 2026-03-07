"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const hexImages = [
  { src: "/images/hex-h1.png", alt: "Cube printing facility" },
  { src: "/images/hex-h2.png", alt: "Print production" },
  { src: "/images/cube-logo.png", alt: "Cube logo", isLogo: true },
  { src: "/images/hex-h7.jpg", alt: "Quality inspection" },
  { src: "/images/hex-h4.png", alt: "Packaging equipment" },
  { src: "/images/hex-h8.jpg", alt: "Print finishing" },
  { src: "/images/hex-h9.jpg", alt: "Cube delivery" },
];

const hexClip = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

export default function HexagonGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full max-w-[520px] mx-auto lg:max-w-none">
      {hexImages.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            delay: i * 0.1,
            duration: 0.6,
            type: "spring",
            stiffness: 120,
          }}
          className="relative w-full"
          style={{ paddingBottom: "100%" }}
        >
          <div
            className="absolute inset-0 overflow-hidden group"
            style={{ clipPath: hexClip }}
          >
            {/* Gold border */}
            <div className="absolute inset-0 bg-[#D4A014]" />

            {/* Image (inset for border effect) */}
            <div
              className="absolute inset-[3px] overflow-hidden"
              style={{ clipPath: hexClip }}
            >
              {img.isLogo ? (
                <div className="w-full h-full bg-[#D4A014] flex items-center justify-center">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={80}
                    height={80}
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 30vw, 160px"
                />
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#D4A014]/0 group-hover:bg-[#D4A014]/20 transition-colors duration-300" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
