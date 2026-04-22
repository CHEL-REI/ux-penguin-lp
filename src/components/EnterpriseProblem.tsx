import Reveal from './Reveal';
import { useLocale } from '../i18n/useLocale';

export default function EnterpriseProblem() {
  const { t } = useLocale();
  return (
    <section className="py-28 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal variant="up" className="max-w-3xl">
          <div className="text-xs tracking-[0.2em] uppercase text-black/50 mb-5">
            {t.enterpriseProblem.eyebrow}
          </div>
          <h2 className="hero-title text-5xl md:text-7xl font-medium text-black">
            {t.enterpriseProblem.titleLine1}<br />{t.enterpriseProblem.titleLine2}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {t.enterpriseProblem.cards.map((c, i) => (
            <Reveal key={c.label} variant="up" delay={i * 120}>
              <div className="rounded-3xl border border-black/10 bg-neutral-50 p-8 hover:border-black/40 transition-colors h-full">
                <div className="text-xs tracking-[0.2em] uppercase text-[#4a4eda] mb-6">
                  {c.label}
                </div>
                <h3 className="hero-title text-2xl md:text-3xl font-medium text-black mb-4">
                  {c.title}
                </h3>
                <p className="text-black/70 text-sm leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
