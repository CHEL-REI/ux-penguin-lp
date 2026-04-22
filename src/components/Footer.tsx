import { useLocale } from '../i18n/useLocale';

export default function Footer() {
  const { t, locale } = useLocale();
  const desc = locale === 'ja'
    ? 'ベンチャーをプロデュースするAIワークスペース。アイデアを入れるだけで、計画が出来あがります。'
    : 'ai workspace for producing ventures. drop in an idea, walk out with a plan.';
  const cols = locale === 'ja'
    ? [
        { h: 'プロダクト', l: ['Biz Checker', 'UX Builder', 'Canvas', 'Deck'] },
        { h: 'プラン', l: ['個人向け', '法人向け', '料金'] },
        { h: '会社', l: ['会社概要', 'お問い合わせ', 'プライバシー', '利用規約'] },
      ]
    : [
        { h: 'product', l: ['biz checker', 'ux builder', 'canvas', 'deck'] },
        { h: 'plans', l: ['for creators', 'for enterprise', 'pricing'] },
        { h: 'company', l: ['about', 'contact', 'privacy', 'terms'] },
      ];

  return (
    <footer className="border-t border-black/10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap gap-12 justify-between">
          <div className="max-w-xs">
            <div className="mb-4">
              <img src="/logo.svg" alt="ux penguin" className="h-7 w-auto" />
            </div>
            <p className="text-black/60 text-sm leading-relaxed">{desc}</p>
          </div>

          <div className="flex flex-wrap gap-12">
            {cols.map((col) => (
              <div key={col.h}>
                <h5 className="text-black text-xs uppercase tracking-[0.2em] mb-4">
                  {col.h}
                </h5>
                <ul className="space-y-2 text-sm">
                  {col.l.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-black/60 hover:text-black transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-black/10 mt-14 pt-6 text-xs text-black/40">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
