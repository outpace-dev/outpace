import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-darkest flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-extrabold font-display text-brand-cyan/20">404</p>
        <h1 className="mt-4 text-3xl font-bold text-brand-text">
          Page not found
        </h1>
        <p className="mt-3 text-brand-muted leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-brand-cyan to-brand-teal hover:from-brand-cyan-bright hover:to-brand-cyan text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-brand-cyan/25"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-brand-border/50 text-brand-text hover:border-brand-cyan/30 hover:bg-white/[0.03] rounded-lg transition-all duration-300 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
