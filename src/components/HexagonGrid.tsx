"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type HexCell =
  | { type: "image"; src: string; alt: string }
  | { type: "logo"; src: string; alt: string }
  | { type: "empty" }
  | { type: "gold" };

// 4 columns (even rows) / 3 columns (odd rows) honeycomb layout
const honeycombRows: HexCell[][] = [
  [
    { type: "image", src: "/images/hex-h1.png", alt: "Printing press equipment" },
    { type: "image", src: "/images/hex-h2.png", alt: "Print finishing line" },
    { type: "empty" },
    { type: "gold" },
  ],
  [
    { type: "image", src: "/images/facility-f7.jpg", alt: "Quality control process" },
    { type: "logo", src: "/images/cube-logo-real.png", alt: "Cube logo" },
    { type: "image", src: "/images/hex-h7.jpg", alt: "Production inspection" },
  ],
  [
    { type: "empty" },
    { type: "image", src: "/images/facility-f8.jpg", alt: "Print machinery" },
    { type: "image", src: "/images/hex-h4.png", alt: "Packaging line" },
    { type: "image", src: "/images/facility-f5.jpg", alt: "Print operator" },
  ],
  [
    { type: "image", src: "/images/hex-h8.jpg", alt: "Cutting equipment" },
    { type: "image", src: "/images/hex-h9.jpg", alt: "Cube delivery van" },
    { type: "gold" },
  ],
  [
    { type: "gold" },
    { type: "image", src: "/images/facility-f10.jpg", alt: "Warehouse logistics" },
    { type: "empty" },
    { type: "image", src: "/images/facility-f13.jpg", alt: "Print production floor" },
  ],
];

const hexClip = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

function HexCellContent({ cell, index }: { cell: HexCell; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        type: "spring",
        stiffness: 150,
        damping: 20,
      }}
      className="w-full h-full group"
    >
      {/* Outer hex = white fill = visible border */}
      <div className="w-full h-full" style={{ clipPath: hexClip }}>
        <div className="w-full h-full bg-white relative">
          {/* Inner hex inset to create thick white border */}
          <div
            className="absolute inset-[8px] sm:inset-[12px] lg:inset-[16px] overflow-hidden"
            style={{ clipPath: hexClip }}
          >
            {cell.type === "image" && (
              <>
                <Image
                  src={cell.src}
                  alt={cell.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 25vw, 180px"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              </>
            )}

            {cell.type === "logo" && (
              <Image
                src={cell.src}
                alt={cell.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 180px"
              />
            )}

            {cell.type === "empty" && (
              <div className="w-full h-full bg-[#2a2a2a]" />
            )}

            {cell.type === "gold" && (
              <div className="w-full h-full bg-[#D4A014]/80" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HexagonGrid() {
  let globalIndex = 0;

  return (
    <div className="flex flex-col items-center [--hex:80px] [--gap:6px] sm:[--hex:110px] sm:[--gap:8px] lg:[--hex:140px]">
      {honeycombRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`inline-flex ${rowIndex > 0 ? "-mt-[20px] sm:-mt-[28px] lg:-mt-[35px]" : ""}`}
          style={{ gap: "var(--gap)" }}
        >
          {row.map((cell, colIndex) => {
            const idx = globalIndex++;
            return (
              <div
                key={colIndex}
                style={{ width: "var(--hex)", height: "var(--hex)" }}
              >
                <HexCellContent cell={cell} index={idx} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
