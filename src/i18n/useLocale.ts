import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { dict, type Locale, LOCALES, DEFAULT_LOCALE } from './dict';

export function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;
  const lang = navigator.language || navigator.languages?.[0] || '';
  return lang.toLowerCase().startsWith('ja') ? 'ja' : 'en';
}

export function getLocaleFromPath(pathname: string): Locale | null {
  const seg = pathname.split('/').filter(Boolean)[0];
  return LOCALES.includes(seg as Locale) ? (seg as Locale) : null;
}

export function stripLocale(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (LOCALES.includes(parts[0] as Locale)) parts.shift();
  return '/' + parts.join('/');
}

export function useLocale() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const locale: Locale = getLocaleFromPath(pathname) ?? DEFAULT_LOCALE;
  const t = dict[locale];

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  function switchLocale(next: Locale) {
    const rest = stripLocale(pathname);
    const target = `/${next}${rest === '/' ? '' : rest}`;
    navigate(target);
  }

  function localePath(path: string) {
    const clean = path.startsWith('/') ? path : `/${path}`;
    return `/${locale}${clean === '/' ? '' : clean}`;
  }

  return { locale, t, switchLocale, localePath };
}
