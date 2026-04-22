import { useState } from 'react';
import Reveal from './Reveal';
import { useLocale } from '../i18n/useLocale';

export default function FAQ() {
  const { t } = useLocale();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 md:py-36 border-t border-black/10">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <Reveal variant="up">
          <div className="text-xs tracking-[0.2em] uppercase text-black/50 mb-5">
            {t.faq.eyebrow}
          </div>
          <h2 className="hero-title text-5xl md:text-7xl font-medium text-black">
            {t.faq.title}
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
          {t.faq.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={it.q} variant="up" delay={i * 70} as="div" className="py-2">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-black text-base md:text-lg font-medium">
                    {it.q}
                  </span>
                  <span
                    className={`flex-shrink-0 h-7 w-7 rounded-full border border-black/30 flex items-center justify-center text-black transition-transform ${
                      isOpen ? 'rotate-45 bg-black text-white border-black' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-60 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-black/70 text-sm md:text-base leading-relaxed pr-12">
                    {it.a}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
