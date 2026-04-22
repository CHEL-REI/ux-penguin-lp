import { useLocale } from '../i18n/useLocale';

export default function MonitorMock({ className = '' }: { className?: string }) {
  const { t } = useLocale();
  const m = t.monitor;

  const countries = [
    {
      ...m.countries[0],
      conf: '42%',
      tam: { usd: '$8.2B', jpy: '¥1.2T' },
      sam: { usd: '$1.4B', jpy: '¥200B' },
      som: { usd: '$0.12B', jpy: '¥18B' },
    },
    {
      ...m.countries[1],
      conf: '38%',
      tam: { usd: '$24B', jpy: '¥3.6T' },
      sam: { usd: '$4.8B', jpy: '¥720B' },
      som: { usd: '$0.38B', jpy: '¥57B' },
    },
  ];
  const bars = [28, 42, 58, 72, 88, 100];
  const activeTabIndex = 2; // Biz Checker

  return (
    <div className={`select-none ${className}`}>
      <div className="bg-neutral-900 shadow-[0_30px_60px_-12px_rgba(74,78,218,0.25)] p-3 ring-1 ring-black">
        <div className="bg-neutral-100 p-1.5">
          <div className="bg-white border border-black/10 overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-black/10 bg-[#f8f9fb]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <div className="ml-2 flex-1 text-[11px] text-black/60 px-3 py-0.5 bg-white border border-black/5 rounded truncate">
                ux-penguin.ai/projects/sustainable-d2c
              </div>
              <span className="text-[11px] font-bold text-amber-600 whitespace-nowrap">
                ⚡ 2,924 pt
              </span>
            </div>

            <div className="p-5">
              <div className="hero-title text-[15px] md:text-[17px] font-medium text-black mb-1.5 leading-tight">
                {m.title}
              </div>
              <p className="text-[10px] md:text-[11px] text-black/55 leading-relaxed mb-3">
                {m.desc}
              </p>

              <div className="flex items-center gap-3 border-b border-black/10 mb-4 overflow-x-auto">
                {m.topTabs.map((tab, i) => (
                  <div
                    key={tab.label}
                    className={`flex items-center gap-1 text-[10px] pb-1.5 pt-1 whitespace-nowrap ${
                      i === activeTabIndex
                        ? 'text-[#4a4eda] font-bold border-b-2 border-[#4a4eda] -mb-px'
                        : 'text-black/55'
                    }`}
                  >
                    <span className="text-[11px]">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-2 mb-3">
                <div className="w-7 h-7 rounded-md bg-[#f0f2ff] flex items-center justify-center text-sm shrink-0">
                  📊
                </div>
                <div>
                  <div className="hero-title text-[12px] font-medium text-black leading-tight">
                    {m.sectionTitle}
                  </div>
                  <div className="text-[9px] text-black/45 mt-0.5">
                    {m.sectionSub}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-b border-black/10 mb-3">
                {m.subTabs.map((tab, i) => (
                  <span
                    key={tab}
                    className={`text-[10px] pb-1.5 whitespace-nowrap ${
                      i === 0
                        ? 'text-[#4a4eda] font-bold border-b-2 border-[#4a4eda] -mb-px'
                        : 'text-black/55'
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                {countries.map((r) => (
                  <div
                    key={r.n}
                    className="rounded-lg border border-black/10 bg-[#f7f8ff] px-3 py-2.5"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-[11px]">{r.flag}</span>
                      <span className="text-[11px] font-bold text-black">
                        {r.n}
                      </span>
                      <span className="ml-auto text-[8px] font-semibold px-1.5 py-0.5 rounded-full bg-[#e5eaff] text-[#4a4eda]">
                        {m.confLabel} {r.conf}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        ['TAM', r.tam],
                        ['SAM', r.sam],
                        ['SOM', r.som],
                      ].map(([k, v]) => {
                        const val = v as { usd: string; jpy: string };
                        return (
                          <div key={k as string}>
                            <div className="text-[8px] tracking-widest text-black/40 font-bold uppercase mb-0.5">
                              {k as string}
                            </div>
                            <div className="hero-title text-[13px] font-medium text-[#4a4eda] leading-none">
                              {val.usd}
                            </div>
                            <div className="text-[8px] text-black/40 mt-0.5">
                              {val.jpy}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-black/10 bg-white p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-black/70">
                    {m.forecast}
                  </span>
                  <span className="text-[9px] text-black/40">2026 — 2030</span>
                </div>
                <div className="h-12 flex items-end gap-1.5">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: 'linear-gradient(180deg, #4a4eda, #7a7ee5)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-5 h-5 bg-neutral-900" />
        <div className="w-40 h-2 bg-neutral-900" />
      </div>
    </div>
  );
}
