import { notFound } from "next/navigation";
import Image from "next/image";
import DiscoveryChat from "@/components/DiscoveryChat";
import { PAGE_CONFIGS } from "@/lib/discovery-configs";

export async function generateStaticParams() {
  return Object.keys(PAGE_CONFIGS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const config = PAGE_CONFIGS[params.slug];
  if (!config) return {};
  return {
    title: config.heroTitle,
    description: config.heroSubtitle,
  };
}

export default function PersonalisedDiscoveryPage({
  params,
}: {
  params: { slug: string };
}) {
  const config = PAGE_CONFIGS[params.slug];
  if (!config) notFound();

  return (
    <div className="min-h-screen pt-8 pb-20">
      {/* ── Hero ── */}
      <section className="pt-12 pb-10 px-6 relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Personalised pill */}
          <div className="inline-flex items-center gap-2 bg-[#0d1525] border border-slate-800 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400 text-xs font-medium tracking-wider uppercase">
              {config.contactName
                ? `Prepared for ${config.contactName}`
                : `Outpace · ${config.industry}`}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            {config.heroTitle}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {config.heroSubtitle}
          </p>
        </div>
      </section>

      {/* ── Prospect Company Card ── */}
      {config.companyLogo && (
        <section className="px-6 pb-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#0d1525] border border-slate-800/60 rounded-xl p-6">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 bg-white rounded-lg p-3">
                  <Image
                    src={config.companyLogo}
                    alt={config.companyName || "Company logo"}
                    width={120}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div className="min-w-0">
                  {config.companyName && (
                    <p className="text-white font-semibold text-base mb-1">
                      {config.companyName}
                    </p>
                  )}
                  {config.companyDescription && (
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {config.companyDescription}
                    </p>
                  )}
                </div>
              </div>

              {/* Known clients strip */}
              {config.knownClients && config.knownClients.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-800/60">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-slate-600 text-xs font-medium uppercase tracking-wider">
                      Key clients
                    </span>
                    {config.knownClients.map((client) => (
                      <span
                        key={client}
                        className="text-slate-400 text-xs bg-slate-800/50 rounded-full px-3 py-1"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Chat Widget ── */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <DiscoveryChat slug={config.slug} />
        </div>
      </section>

      {/* ── What You'll Receive ── */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: "📋",
                title: "Tailored proposal",
                desc: "A growth strategy specific to your business, not a generic template",
              },
              {
                icon: "⏱",
                title: "Within 24 hours",
                desc: "Our team reviews the consultation and delivers your proposal fast",
              },
              {
                icon: "🎯",
                title: "Clear next steps",
                desc: "Actionable opportunities ranked by impact and effort",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0d1525]/60 border border-slate-800/40 rounded-xl p-5 text-center"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="text-white font-semibold text-sm mb-1">
                  {item.title}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
