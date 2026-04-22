import Reveal from './Reveal';
import { useLocale } from '../i18n/useLocale';

export default function PricingEnterprise() {
  const { t } = useLocale();
  const plans = t.pricingEnterprise.plans;
  return (
    <section id="pricing" className="py-28 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal variant="up" className="max-w-3xl">
          <div className="text-xs tracking-[0.2em] uppercase text-black/50 mb-5">
            {t.pricingEnterprise.eyebrow}
          </div>
          <h2 className="hero-title text-5xl md:text-7xl font-medium text-black">
            {t.pricingEnterprise.title}
          </h2>
          <p className="text-black/70 text-base md:text-lg mt-6 max-w-2xl">
            {t.pricingEnterprise.desc}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {plans.map((p, i) => {
            const highlight = 'badge' in p && !!p.badge;
            return (
              <Reveal key={p.name} variant="up" delay={i * 100}>
                <div
                  className={`rounded-3xl border p-7 h-full flex flex-col ${
                    highlight ? 'bg-black text-white border-black' : 'bg-white border-black/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-5 gap-2">
                    <div
                      className={`text-[11px] tracking-[0.18em] uppercase ${highlight ? 'text-white/60' : 'text-black/50'}`}
                    >
                      {p.name}
                    </div>
                    {highlight && 'badge' in p && (
                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-full bg-[#4a4eda] text-white whitespace-nowrap">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div
                      className={`hero-title text-3xl md:text-4xl font-medium ${highlight ? 'text-white' : 'text-black'}`}
                    >
                      {p.price}
                    </div>
                    <div className={`text-xs ${highlight ? 'text-white/60' : 'text-black/50'}`}>
                      {p.per}
                    </div>
                  </div>
                  <p
                    className={`text-sm leading-relaxed mt-4 mb-6 ${highlight ? 'text-white/70' : 'text-black/70'}`}
                  >
                    {p.desc}
                  </p>
                  <ul
                    className={`space-y-2 text-sm mb-8 ${highlight ? 'text-white/80' : 'text-black/70'}`}
                  >
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className={highlight ? 'text-[#9ea2ff]' : 'text-[#4a4eda]'}>
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-auto text-center text-sm rounded-full px-6 py-3 transition-colors ${
                      highlight
                        ? 'bg-white text-black hover:bg-neutral-200'
                        : 'bg-black text-white hover:bg-neutral-800'
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="up" delay={100}>
          <p className="text-center text-xs text-black/50 mt-10">
            {t.pricingEnterprise.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
