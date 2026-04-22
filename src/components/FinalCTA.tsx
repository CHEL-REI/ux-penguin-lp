import Reveal from './Reveal';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/useLocale';

export default function FinalCTA() {
  const { t, localePath } = useLocale();
  return (
    <section id="cta" className="py-28 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-3xl border border-black bg-black text-white px-8 py-20 md:py-28 text-center">
            <div className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6">
              {t.finalCTA.eyebrow}
            </div>
            <h2 className="hero-title text-5xl md:text-7xl font-medium max-w-3xl mx-auto">
              {t.finalCTA.title}
            </h2>
            <p className="text-white/70 text-base md:text-lg mt-6 max-w-xl mx-auto">
              {t.finalCTA.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <Link
                to={localePath('/creators')}
                className="bg-white text-black text-sm rounded-full px-7 py-3.5 hover:bg-neutral-200 transition-colors"
              >
                {t.finalCTA.primary}
              </Link>
              <Link
                to={localePath('/enterprise')}
                className="border border-white/30 text-white text-sm rounded-full px-7 py-3.5 hover:bg-white/10 transition-colors"
              >
                {t.finalCTA.secondary}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
