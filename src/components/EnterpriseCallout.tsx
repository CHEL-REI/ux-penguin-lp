import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { useLocale } from '../i18n/useLocale';

export default function EnterpriseCallout() {
  const { t, localePath } = useLocale();
  const ent = t.routing.enterprise;

  return (
    <section className="py-24 md:py-32 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal variant="up">
          <Link
            to={localePath('/enterprise')}
            className="group relative overflow-hidden rounded-3xl border border-black bg-black text-white p-10 md:p-14 hover:border-white/30 transition-colors block grid md:grid-cols-[1.2fr_1fr] gap-10 items-center"
          >
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-white/60 mb-6">
                {ent.badge}
              </div>
              <h3 className="hero-title text-3xl md:text-5xl font-medium mb-4">
                {ent.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                {ent.body}
              </p>
              <div className="inline-flex items-center gap-2 text-white text-sm">
                <span>{ent.cta}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-white/70 md:border-l md:border-white/10 md:pl-10">
              {ent.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="text-white/40">·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
