"use client";

/**
 * HubSpot Solutions Partner + Google Partner 2026 badges
 * Clean SVG renditions for dark footer backgrounds
 */

function HubSpotBadge() {
  return (
    <a
      href="https://www.hubspot.com/partners"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#FF7A59]/30 transition-colors"
    >
      {/* HubSpot Sprocket Mark */}
      <svg viewBox="0 0 40 51" className="w-7 h-7 flex-shrink-0" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.41 14.83V9.05a5.69 5.69 0 002.48-3.47A5.86 5.86 0 0027.59 0a5.86 5.86 0 00-4.3 5.58 5.69 5.69 0 002.48 3.47v5.78a14.8 14.8 0 00-6.6 3.63L5.8 8.2A6.46 6.46 0 006 6.45 6.45 6.45 0 000 12.9a6.45 6.45 0 006.45 6.45c1.54 0 2.95-.55 4.06-1.46l13.05 10.08A14.87 14.87 0 0021.9 34c0 8.18 6.63 14.81 14.81 14.81A14.81 14.81 0 0036.7 19.5a14.8 14.8 0 00-7.3-4.67zM29.59 41.2a7.19 7.19 0 110-14.38 7.19 7.19 0 010 14.38z"
          fill="#FF7A59"
          transform="translate(0, 1)"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-[10px] text-brand-muted uppercase tracking-wider leading-tight">HubSpot</span>
        <span className="text-xs font-semibold text-brand-text leading-tight">Solutions Partner</span>
      </div>
    </a>
  );
}

function GooglePartnerBadge() {
  return (
    <a
      href="https://www.google.com/partners/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#4285F4]/30 transition-colors"
    >
      {/* Google "G" logo */}
      <svg viewBox="0 0 48 48" className="w-7 h-7 flex-shrink-0">
        <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" fill="#4285F4" />
        <path d="M3.2 14.5l7 5.1C12.2 15.1 17.5 11 24 11c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 14.9 2 7.1 7.2 3.2 14.5z" fill="#EA4335" />
        <path d="M24 46c5.4 0 10.3-1.8 14.1-5l-6.5-5.5C29.5 37.4 26.9 38 24 38c-6 0-11.1-4-12.9-9.5l-7 5.4C7.1 41 14.7 46 24 46z" fill="#34A853" />
        <path d="M44.5 20H24v8.5h11.8c-1 3.2-3.1 5.8-5.8 7.5l6.5 5.5c3.8-3.5 6-8.7 6-14.5 0-1.3-.2-2.7-.5-4-.3-1-.5-2-.5-3z" fill="#FBBC05" />
      </svg>
      <div className="flex flex-col">
        <span className="text-[10px] text-brand-muted uppercase tracking-wider leading-tight">Google</span>
        <span className="text-xs font-semibold text-brand-text leading-tight">Partner 2026</span>
      </div>
    </a>
  );
}

function MetaPartnerBadge() {
  return (
    <a
      href="https://www.facebook.com/business/partner-directory"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#0081FB]/30 transition-colors"
    >
      {/* Meta infinity logo */}
      <svg viewBox="0 0 36 20" className="w-7 h-5 flex-shrink-0" fill="none">
        <path
          d="M8.14 0C3.57 0 0 4.53 0 10c0 5.47 3.57 10 8.14 10 2.78 0 5-1.64 6.86-4.12L18 11.46l2.99 4.42C22.86 18.36 25.08 20 27.86 20 32.43 20 36 15.47 36 10c0-5.47-3.57-10-8.14-10-2.78 0-5 1.64-6.87 4.12L18 8.54l-3-4.42C13.14 1.64 10.92 0 8.14 0zm.2 4.3c1.4 0 2.9 1.08 4.28 3.1l1.2 1.78-3.47 5.12c-1.44 2.01-2.72 2.44-3.78 2.44-2.52 0-4.08-3.16-4.08-6.74S3.9 4.3 6.34 4.3h2zm21.32 0c2.44 0 4.05 3.16 4.05 6.7 0 3.58-1.56 6.74-4.08 6.74-1.06 0-2.34-.43-3.78-2.44l-3.47-5.12 1.2-1.78c1.38-2.02 2.88-3.1 4.28-3.1h1.8z"
          fill="#0081FB"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-[10px] text-brand-muted uppercase tracking-wider leading-tight">Meta</span>
        <span className="text-xs font-semibold text-brand-text leading-tight">Business Partner</span>
      </div>
    </a>
  );
}

export default function PartnerBadges() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <HubSpotBadge />
      <GooglePartnerBadge />
      <MetaPartnerBadge />
    </div>
  );
}
