import Reveal from './Reveal';
import { useLocale } from '../i18n/useLocale';

export default function HeroEnterprise() {
  const { t } = useLocale();
  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <Reveal variant="up">
          <div className="text-xs tracking-[0.2em] uppercase text-[#4a4eda] mb-5">
            {t.heroEnterprise.eyebrow}
          </div>
          <h1 className="hero-title font-medium text-black text-[clamp(44px,8vw,92px)]">
            {t.heroEnterprise.titleLine1}<br />{t.heroEnterprise.titleLine2}
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-black/70 text-base md:text-lg leading-snug">
            {t.heroEnterprise.desc}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href="#contact"
              className="bg-black text-white text-sm rounded-full px-7 py-3.5 hover:bg-neutral-800 transition-colors"
            >
              {t.heroEnterprise.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="border border-black/20 text-black text-sm rounded-full px-7 py-3.5 hover:bg-black/5 transition-colors"
            >
              {t.heroEnterprise.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 md:mt-24 max-w-6xl mx-auto px-6 md:px-10">
        <Reveal variant="up" delay={100}>
          <div className="rounded-3xl border border-black/10 bg-neutral-50 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {t.heroEnterprise.kpis.map((k, i) => (
              <Reveal key={k.label} variant="up" delay={i * 80}>
                <div className="text-center md:text-left">
                  <div className="hero-title text-4xl md:text-6xl font-medium text-[#4a4eda]">
                    {k.n}
                  </div>
                  <div className="text-xs md:text-sm text-black/60 mt-2 leading-snug">
                    {k.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
