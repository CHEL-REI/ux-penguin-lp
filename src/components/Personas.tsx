import Reveal from './Reveal';
import { useLocale } from '../i18n/useLocale';

export default function Personas() {
  const { t } = useLocale();
  return (
    <section className="py-28 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal variant="up" className="max-w-3xl">
          <div className="text-xs tracking-[0.2em] uppercase text-black/50 mb-5">
            {t.personas.eyebrow}
          </div>
          <h2 className="hero-title text-5xl md:text-7xl font-medium text-black">
            {t.personas.title}
          </h2>
          <p className="text-black/70 text-base md:text-lg mt-6 max-w-2xl">
            {t.personas.desc}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {t.personas.items.map((p, i) => (
            <Reveal key={p.role} variant="up" delay={i * 120}>
              <div className="rounded-3xl border border-black/10 bg-neutral-50 p-8 h-full">
                <div className="text-xs tracking-[0.2em] uppercase text-[#4a4eda] mb-5">
                  {p.badge}
                </div>
                <h3 className="hero-title text-2xl md:text-3xl font-medium text-black mb-6">
                  {p.role}
                </h3>
                <blockquote className="text-black text-base leading-relaxed mb-6 border-l-2 border-[#4a4eda] pl-4">
                  "{p.quote}"
                </blockquote>
                <p className="text-black/70 text-sm leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
