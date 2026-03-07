"use client";

import { useState, useCallback } from "react";

interface AnimatedLogoProps {
  className?: string;
}

const letters = [
  { char: "O", bold: true },
  { char: "U", bold: true },
  { char: "T", bold: true },
  { char: "P", bold: false },
  { char: "A", bold: false },
  { char: "C", bold: false },
  { char: "E", bold: false },
  { char: ".", bold: true, accent: true },
];

export default function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getLetterStyle = useCallback(
    (index: number) => {
      if (hoveredIndex === null) return {};

      const distance = Math.abs(index - hoveredIndex);

      if (distance === 0) {
        return {
          transform: "translateY(-4px) scale(1.1)",
          filter: "brightness(1.3)",
        };
      }
      if (distance === 1) {
        return {
          transform: "translateY(-2px) scale(1.05)",
          filter: "brightness(1.15)",
        };
      }
      if (distance === 2) {
        return {
          transform: "translateY(-1px)",
          filter: "brightness(1.05)",
        };
      }
      return {};
    },
    [hoveredIndex]
  );

  return (
    <span
      className={`tracking-tight text-shimmer inline-flex ${className}`}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {letters.map((letter, i) => (
        <span
          key={i}
          onMouseEnter={() => setHoveredIndex(i)}
          className={`inline-block transition-all duration-200 ease-out cursor-default ${
            letter.accent
              ? "text-brand-cyan-bright font-extrabold"
              : letter.bold
              ? "font-extrabold"
              : "font-light"
          }`}
          style={getLetterStyle(i)}
        >
          {letter.char}
        </span>
      ))}
    </span>
  );
}
