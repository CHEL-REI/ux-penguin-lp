import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/useLocale';

export default function MobileStickyCTA() {
  const { t, localePath } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(true), 2600);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 pointer-events-none"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 12px)' }}
      aria-hidden={!visible}
    >
      <div
        className="px-4 pt-3 transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(16px)',
        }}
      >
        <Link
          to={localePath('/') + '#pricing'}
          className="pointer-events-auto flex items-center justify-center bg-black text-white text-base font-medium rounded-full px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] active:scale-[0.98] transition-transform"
        >
          {t.nav.getStarted}
        </Link>
      </div>
    </div>
  );
}
