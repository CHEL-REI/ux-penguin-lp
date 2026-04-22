import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/useLocale';
import { LOCALES, type Locale } from '../i18n/dict';

export default function PageNav() {
  const { locale, t, switchLocale, localePath } = useLocale();

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 px-6 md:px-10 pt-6 flex items-center justify-between gap-4">
      <Link to={localePath('/')} className="flex items-center">
        <img src="/logo.svg" alt="ux penguin" className="h-9 md:h-10 w-auto" />
      </Link>

      <div className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur rounded-full px-3 py-2 border border-black/5">
        <Link to={localePath('/') + '#modules'} className="text-neutral-600 hover:text-black transition-colors text-sm px-5 py-2 rounded-full">
          {t.nav.product}
        </Link>
        <Link to={localePath('/') + '#pricing'} className="text-neutral-600 hover:text-black transition-colors text-sm px-5 py-2 rounded-full">
          {t.nav.pricing}
        </Link>
        <Link to={localePath('/enterprise')} className="text-neutral-600 hover:text-black transition-colors text-sm px-5 py-2 rounded-full">
          {t.nav.enterprise}
        </Link>
        <Link to={localePath('/') + '#faq'} className="text-neutral-600 hover:text-black transition-colors text-sm px-5 py-2 rounded-full">
          {t.nav.faq}
        </Link>
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
        <Link
          to={localePath('/') + '#pricing'}
          className="bg-black text-white text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-800 transition-colors"
        >
          {t.nav.getStarted}
        </Link>
      </div>
    </nav>
  );
}
