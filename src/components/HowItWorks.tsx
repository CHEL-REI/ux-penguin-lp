import Reveal from './Reveal';
import { useLocale } from '../i18n/useLocale';

export default function HowItWorks() {
  const { t } = useLocale();
  return (
    <section className="py-28 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal variant="up" className="max-w-3xl">
          <div className="text-xs tracking-[0.2em] uppercase text-black/50 mb-5">
            {t.howItWorks.eyebrow}
          </div>
          <h2 className="hero-title text-5xl md:text-7xl font-medium text-black">
            {t.howItWorks.title}
          </h2>
          <p className="text-black/70 text-base md:text-lg mt-6 max-w-2xl">
            {t.howItWorks.desc}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {t.howItWorks.steps.map((s, i) => (
            <Reveal key={s.n} variant="up" delay={i * 140}>
              <div className="rounded-3xl border border-black/10 bg-neutral-50 p-8 h-full">
                <div className="hero-title text-6xl font-medium text-black mb-6">
                  {s.n}
                </div>
                <h3 className="hero-title text-xl md:text-2xl font-medium text-black mb-4">
                  {s.title}
                </h3>
                <p className="text-black/70 text-sm leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
