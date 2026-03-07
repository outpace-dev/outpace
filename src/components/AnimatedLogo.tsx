"use client";

import { useState } from "react";

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
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={`tracking-tight text-shimmer inline-flex ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {letters.map((letter, i) => (
        <span
          key={i}
          className={`inline-block transition-transform duration-300 ease-out ${
            letter.accent
              ? "text-brand-cyan-bright font-extrabold"
              : letter.bold
              ? "font-extrabold"
              : "font-light"
          }`}
          style={
            hovered
              ? {
                  transform: `scale(1.15)`,
                  transitionDelay: `${i * 30}ms`,
                }
              : {
                  transform: "scale(1)",
                  transitionDelay: `${i * 20}ms`,
                }
          }
        >
          {letter.char}
        </span>
      ))}
    </span>
  );
}
