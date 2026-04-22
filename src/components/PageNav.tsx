import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLocale } from '../i18n/useLocale';
import { LOCALES, type Locale } from '../i18n/dict';

export default function PageNav() {
  const { locale, t, switchLocale, localePath } = useLocale();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const links = [
    { to: localePath('/') + '#modules', label: t.nav.product },
    { to: localePath('/') + '#pricing', label: t.nav.pricing },
    { to: localePath('/enterprise'), label: t.nav.enterprise },
    { to: localePath('/') + '#faq', label: t.nav.faq },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-30 px-6 md:px-10 pt-6 flex items-center justify-between gap-4">
        <Link to={localePath('/')} className="flex items-center">
          <img src="/logo.svg" alt="ux penguin" className="h-9 md:h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur rounded-full px-3 py-2 border border-black/5">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-neutral-600 hover:text-black transition-colors text-sm px-5 py-2 rounded-full"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-0.5 text-xs text-black/60">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="mx-1 text-black/30">|</span>}
                <button
                  type="button"
                  onClick={() => switchLocale(l as Locale)}
                  className={`uppercase tracking-wider transition-colors ${
                    locale === l ? 'text-black font-semibold' : 'hover:text-black'
                  }`}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
          <a
            href="https://ux-penguin.ai/login"
            className="hidden md:inline-flex bg-black text-white text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-800 transition-colors"
          >
            {t.nav.getStarted}
          </a>

          <button
            type="button"
            aria-label="menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden relative w-11 h-11 rounded-full bg-white/90 backdrop-blur border border-black/10 flex items-center justify-center"
          >
            <span className="relative block w-5 h-3.5">
              <span
                className={`absolute left-0 right-0 h-[2px] bg-black transition-transform duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-[2px] bg-black transition-opacity duration-200 top-1.5 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-[2px] bg-black transition-transform duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          aria-label="close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <Link to={localePath('/')} onClick={() => setOpen(false)} className="flex items-center">
              <img src="/logo.svg" alt="ux penguin" className="h-9 w-auto" />
            </Link>
            <button
              type="button"
              aria-label="close"
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-lg"
            >
              ×
            </button>
          </div>

          <nav className="flex-1 px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-black text-2xl font-medium py-3 border-b border-black/5"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 py-6 border-t border-black/10">
            <div className="text-[10px] tracking-[0.2em] uppercase text-black/50 mb-3">
              language
            </div>
            <div className="flex gap-2">
              {LOCALES.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => {
                    switchLocale(l as Locale);
                    setOpen(false);
                  }}
                  className={`flex-1 uppercase tracking-wider text-sm py-3 rounded-full border transition-colors ${
                    locale === l
                      ? 'bg-black text-white border-black'
                      : 'border-black/15 text-black/70 hover:border-black/40 hover:text-black'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
