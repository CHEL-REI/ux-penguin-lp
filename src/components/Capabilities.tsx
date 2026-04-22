import Reveal from './Reveal';
import { useLocale } from '../i18n/useLocale';

export default function Capabilities() {
  const { t } = useLocale();
  return (
    <section id="capabilities" className="py-28 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal variant="up" className="max-w-3xl">
          <div className="text-xs tracking-[0.2em] uppercase text-black/50 mb-5">
            {t.capabilities.eyebrow}
          </div>
          <h2 className="hero-title text-5xl md:text-7xl font-medium text-black">
            {t.capabilities.title}
          </h2>
          <p className="text-black/70 text-base md:text-lg mt-6 max-w-2xl">
            {t.capabilities.desc}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {t.capabilities.items.map((c, i) => (
            <Reveal key={c.badge} variant="up" delay={(i % 3) * 110}>
              <div className="rounded-3xl border border-black/10 bg-white p-8 h-full flex flex-col">
                <div className="text-xs tracking-[0.2em] uppercase text-[#4a4eda] mb-5">
                  {c.badge}
                </div>
                <h3 className="hero-title text-xl md:text-2xl font-medium text-black mb-4">
                  {c.title}
                </h3>
                <p className="text-black/70 text-sm leading-relaxed mb-6 flex-grow">
                  {c.body}
                </p>
                <div className="text-sm text-[#4a4eda] border-t border-black/10 pt-4 mt-auto">
                  → {c.insight}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
