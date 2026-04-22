import MonitorMock from './MonitorMock';
import Reveal from './Reveal';
import Flower from './Flower';
import { useLocale } from '../i18n/useLocale';

export default function HeroCreators() {
  const { t } = useLocale();
  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <Reveal variant="up">
          <div className="relative">
            <Flower variant="red" size={36} className="hidden lg:block absolute -left-16 top-0" rotate={-10} />
            <div className="text-xs tracking-[0.2em] uppercase text-[#4a4eda] mb-5">
              {t.heroCreators.eyebrow}
            </div>
            <h1 className="hero-title font-medium text-black text-[clamp(44px,8vw,92px)]">
              {t.heroCreators.titleLine1}<br />{t.heroCreators.titleLine2}
            </h1>
            <p className="mt-6 text-black/70 text-base md:text-lg leading-snug max-w-lg">
              {t.heroCreators.desc}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="bg-black text-white text-sm rounded-full px-7 py-3.5 hover:bg-neutral-800 transition-colors"
              >
                {t.heroCreators.ctaPrimary}
              </a>
              <a
                href="#how"
                className="border border-black/20 text-black text-sm rounded-full px-7 py-3.5 hover:bg-black/5 transition-colors"
              >
                {t.heroCreators.ctaSecondary}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-black/50">
              {t.heroCreators.notes.map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={150}>
          <div className="relative">
            <MonitorMock className="w-full max-w-[560px] mx-auto" />
            <Flower variant="amber" size={36} className="hidden md:block absolute -right-4 top-10" rotate={12} withStem={false} />
            <Flower variant="gold" size={32} className="hidden md:block absolute -bottom-4 left-8" rotate={-8} />
          </div>
        </Reveal>
      </div>

      <div className="mt-20 md:mt-28 max-w-7xl mx-auto px-6 md:px-10">
        <Reveal variant="up" className="flex flex-wrap justify-around gap-8 border-t border-black/10 pt-10">
          {t.heroCreators.stats.map((s) => (
            <Stat key={s.label} n={s.n} label={s.label} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="text-center">
      <div className="hero-title text-3xl md:text-4xl font-medium text-black">{n}</div>
      <div className="text-xs md:text-sm text-black/60 mt-1">{label}</div>
    </div>
  );
}
