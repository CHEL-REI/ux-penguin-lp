import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { useLocale } from '../i18n/useLocale';

export default function Routing() {
  const { t, localePath } = useLocale();
  return (
    <section id="creators" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal variant="up" className="max-w-2xl">
          <div className="text-xs tracking-[0.2em] uppercase text-black/50 mb-5">
            {t.routing.eyebrow}
          </div>
          <h2 className="hero-title text-5xl md:text-7xl font-medium text-black">
            {t.routing.title}
          </h2>
          <p className="text-black/70 text-base md:text-lg mt-6 max-w-xl">
            {t.routing.desc}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <Reveal variant="up" delay={100}>
            <Link
              to={localePath('/creators')}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-neutral-50 p-10 hover:border-black/40 transition-colors block h-full"
            >
              <div className="text-xs tracking-[0.2em] uppercase text-black/50 mb-6">
                {t.routing.creators.badge}
              </div>
              <h3 className="hero-title text-3xl md:text-4xl font-medium text-black mb-4">
                {t.routing.creators.title}
              </h3>
              <p className="text-black/70 text-sm leading-relaxed mb-8">
                {t.routing.creators.body}
              </p>
              <ul className="space-y-2 text-sm text-black/60">
                {t.routing.creators.items.map((it) => (
                  <li key={it}>· {it}</li>
                ))}
              </ul>
              <div className="mt-10 inline-flex items-center gap-2 text-black text-sm">
                <span>{t.routing.creators.cta}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </Reveal>

          <Reveal variant="up" delay={220}>
            <Link
              to={localePath('/enterprise')}
              className="group relative overflow-hidden rounded-3xl border border-black bg-black text-white p-10 hover:border-white/30 transition-colors block h-full"
            >
              <div className="text-xs tracking-[0.2em] uppercase text-white/60 mb-6">
                {t.routing.enterprise.badge}
              </div>
              <h3 className="hero-title text-3xl md:text-4xl font-medium mb-4">
                {t.routing.enterprise.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                {t.routing.enterprise.body}
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                {t.routing.enterprise.items.map((it) => (
                  <li key={it}>· {it}</li>
                ))}
              </ul>
              <div className="mt-10 inline-flex items-center gap-2 text-white text-sm">
                <span>{t.routing.enterprise.cta}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
