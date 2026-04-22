import Reveal from './Reveal';
import { useLocale } from '../i18n/useLocale';

export default function SecurityTable() {
  const { t } = useLocale();
  return (
    <section id="security" className="py-28 md:py-36 border-t border-black/10 bg-[#0a0a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal variant="up" className="max-w-3xl">
          <div className="text-xs tracking-[0.2em] uppercase text-white/60 mb-5">
            {t.securityTable.eyebrow}
          </div>
          <h2 className="hero-title text-5xl md:text-7xl font-medium text-white">
            {t.securityTable.titleLine1}<br />{t.securityTable.titleLine2}
          </h2>
          <p className="text-white/70 text-base md:text-lg mt-6 max-w-2xl">
            {t.securityTable.desc}
          </p>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <div className="mt-16 overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full text-left text-sm min-w-[720px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-5 text-white/60 text-xs tracking-[0.2em] uppercase font-medium w-44">
                    {t.securityTable.colLabel}
                  </th>
                  {t.securityTable.tiers.map((ti) => (
                    <th key={ti.name} className="p-5 text-white font-medium">
                      <div className="text-xs tracking-[0.14em] uppercase text-white/50 mb-1">
                        {ti.name}
                      </div>
                      <div className="text-sm md:text-base">{ti.label}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.securityTable.rows.map((r, i) => (
                  <tr key={r.label} className={i < t.securityTable.rows.length - 1 ? 'border-b border-white/5' : ''}>
                    <td className="p-5 text-white/60 text-xs tracking-[0.14em] uppercase">
                      {r.label}
                    </td>
                    {r.values.map((v, j) => (
                      <td key={j} className="p-5 text-white/85">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <p className="text-center text-xs text-white/50 mt-8">
            {t.securityTable.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
