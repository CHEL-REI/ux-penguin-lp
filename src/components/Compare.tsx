import Reveal from './Reveal';
import { useLocale } from '../i18n/useLocale';

export default function Compare() {
  const { t } = useLocale();
  return (
    <section className="border-y border-black/10 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
        <Reveal variant="right" className="text-center md:text-right opacity-60">
          <div className="text-xs tracking-[0.2em] uppercase text-black/50 mb-3">
            {t.compare.before}
          </div>
          <div className="hero-title text-3xl md:text-5xl font-medium text-black">
            {t.compare.chatgpt}
          </div>
          <div className="text-black/60 text-sm mt-3">
            {t.compare.beforeDesc}
          </div>
        </Reveal>
        <Reveal variant="scale" delay={150} className="hidden md:block">
          <div className="h-px w-24 bg-black/40 rotate-[-20deg] mx-auto" />
        </Reveal>
        <div className="md:hidden text-center text-black/40">↓</div>
        <Reveal variant="left" delay={250} className="text-center md:text-left">
          <div className="text-xs tracking-[0.2em] uppercase text-black/50 mb-3">
            {t.compare.after}
          </div>
          <div className="hero-title text-3xl md:text-5xl font-medium text-black">
            {t.compare.uxp}
          </div>
          <div className="text-black/80 text-sm mt-3">
            {t.compare.afterDesc}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
