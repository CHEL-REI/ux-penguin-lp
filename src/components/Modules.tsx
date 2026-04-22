function BizCheckerMock() {
  const tabs = ['market size', 'competitors', 'trends', 'regulation'];
  const rows = [
    {
      flag: '🇯🇵',
      n: 'japan',
      conf: '42%',
      cagr: '14%',
      tam: '$8.2b',
      sam: '$1.4b',
      som: '$0.12b',
    },
    {
      flag: '🇺🇸',
      n: 'us',
      conf: '38%',
      cagr: '18%',
      tam: '$24b',
      sam: '$4.8b',
      som: '$0.38b',
    },
  ];
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-3 h-full flex flex-col gap-2 overflow-hidden">
      <div className="flex gap-1 border-b border-black/10 pb-1.5">
        {tabs.map((t, i) => (
          <span
            key={t}
            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
              i === 0 ? 'bg-[#e5eaff] text-[#4a4eda]' : 'text-black/50'
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-1.5 flex-1">
        {rows.map((r) => (
          <div
            key={r.n}
            className="rounded-md border border-black/10 bg-[#fafbfd] px-2.5 py-2"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-black mb-1.5">
              <span>{r.flag}</span>
              <span>{r.n}</span>
              <span className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#e5eaff] text-[#4a4eda]">
                {r.conf}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                ['tam', r.tam],
                ['sam', r.sam],
                ['som', r.som],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-[8px] tracking-widest text-black/40 font-bold uppercase">
                    {k}
                  </div>
                  <div className="text-[14px] font-medium text-[#4a4eda] leading-none -tracking-[0.02em]">
                    {v}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[9px] font-bold text-emerald-600 mt-1.5">
              ▲ cagr {r.cagr}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UXBuilderMock() {
  const layers = [
    { l: 'surface', s: 'visual · ui', w: 96, bg: '#c4c7f7', fg: '#3538b8' },
    { l: 'skeleton', s: 'layout · flow', w: 88, bg: '#9ca3f3', fg: '#fff' },
    { l: 'structure', s: 'information', w: 76, bg: '#7f84ee', fg: '#fff' },
    { l: 'scope', s: 'requirements', w: 62, bg: '#6366eb', fg: '#fff' },
    { l: 'strategy', s: 'goal', w: 46, bg: '#4a4eda', fg: '#fff' },
  ];
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-3 h-full flex flex-col justify-center gap-1">
      {layers.map((row) => (
        <div
          key={row.l}
          className="rounded-md py-1.5 px-3 flex items-center justify-between text-[10px] font-semibold mx-auto"
          style={{
            width: `${row.w}%`,
            background: row.bg,
            color: row.fg,
          }}
        >
          <span>{row.l}</span>
          <span className="text-[9px] font-medium opacity-75">{row.s}</span>
        </div>
      ))}
    </div>
  );
}

function CanvasMock() {
  const cells = [
    { id: 'problem', n: '1', col: '1 / 2', row: '1 / 3', bg: '#fef3c7', fg: '#92400e' },
    { id: 'solution', n: '4', col: '2 / 3', row: '1 / 2', bg: '#dbeafe', fg: '#1e40af' },
    { id: 'metrics', n: '8', col: '2 / 3', row: '2 / 3', bg: '#f3f4f6', fg: '#4b5563' },
    { id: 'value', n: '3', col: '3 / 4', row: '1 / 3', bg: '#dcfce7', fg: '#166534' },
    { id: 'advantage', n: '9', col: '4 / 5', row: '1 / 2', bg: '#fce7f3', fg: '#9f1239' },
    { id: 'channels', n: '5', col: '4 / 5', row: '2 / 3', bg: '#fed7aa', fg: '#9a3412' },
    { id: 'customer', n: '2', col: '5 / 6', row: '1 / 3', bg: '#f3e8ff', fg: '#6b21a8' },
    { id: 'cost', n: '7', col: '1 / 3', row: '3 / 4', bg: '#e5e7eb', fg: '#374151' },
    { id: 'revenue', n: '6', col: '3 / 6', row: '3 / 4', bg: '#d1fae5', fg: '#065f46' },
  ];
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-2.5 h-full">
      <div
        className="w-full h-full grid gap-0.5"
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: '1fr 1fr 1fr',
        }}
      >
        {cells.map((c) => (
          <div
            key={c.id}
            className="rounded relative px-1.5 py-1 text-[8px] font-bold leading-tight"
            style={{
              gridColumn: c.col,
              gridRow: c.row,
              background: c.bg,
              color: c.fg,
            }}
          >
            <span className="absolute top-1 right-1.5 text-[7px] font-extrabold opacity-50">
              {c.n}
            </span>
            {c.id}
          </div>
        ))}
      </div>
    </div>
  );
}

function DiagnoseMock() {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-4 h-full flex flex-col gap-2 justify-center">
      <div className="flex items-center gap-3 pb-2 border-b border-black/10">
        <div className="hero-title text-4xl font-medium text-emerald-500 leading-none">
          82
          <span className="text-xs text-black/50 font-normal ml-0.5">/100</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="text-[9px] tracking-wider uppercase text-black/50 font-bold">
            overall
          </div>
          <div className="text-[11px] font-semibold text-black">
            board-ready
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {[
          { tag: 'ux', body: 'high-retention need structure', bg: '#dbeafe', fg: '#1e40af' },
          { tag: 'canvas', body: 'metrics & channels clear', bg: '#dcfce7', fg: '#166534' },
          { tag: 'risk', body: 'logistics cost sensitivity', bg: '#fee2e2', fg: '#991b1b' },
        ].map((it) => (
          <div key={it.tag} className="flex items-center gap-1.5 text-[10px] text-black/80">
            <span
              className="text-[8px] font-bold uppercase px-1.5 py-0.5 rounded"
              style={{ background: it.bg, color: it.fg }}
            >
              {it.tag}
            </span>
            <span>{it.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeckMock() {
  const tabs = ['general', 'investor', 'customer', 'pt'];
  const items = [
    { icon: '📋', label: 'elevator pitch' },
    { icon: '💬', label: 'tagline' },
    { icon: '📊', label: 'problem', active: true },
    { icon: '💡', label: 'solution' },
    { icon: '📈', label: 'market opportunity' },
  ];
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-3 h-full flex flex-col gap-2">
      <div className="grid grid-cols-4 gap-1">
        {tabs.map((t, i) => (
          <span
            key={t}
            className={`text-[9px] font-semibold text-center py-1 rounded border ${
              i === 0
                ? 'bg-[#e5eaff] text-[#4a4eda] border-[#4a4eda]'
                : 'bg-black/[0.04] text-black/50 border-transparent'
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-1 flex-1">
        {items.map((it) => (
          <div
            key={it.label}
            className={`flex items-center gap-1.5 px-2 py-1.5 rounded border text-[10px] ${
              it.active
                ? 'border-[#4a4eda] bg-[#f6f6ff] text-[#4a4eda] font-medium'
                : 'border-black/10 bg-white text-black/80'
            }`}
          >
            <span className="text-[11px]">{it.icon}</span>
            <span>{it.label}</span>
            <span className="ml-auto text-[7px] tracking-[0.15em] font-bold text-black/40">
              COPY
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DevelopMock() {
  const tools = ['cursor', 'bolt.new', 'v0'];
  const groups = [
    { lbl: 'frontend', items: ['next.js', 'tailwind'], color: '#4a4eda' },
    { lbl: 'backend', items: ['route handlers', 'openai'], color: '#10b981' },
    { lbl: 'database', items: ['postgres', 'prisma'], color: '#7a7ee5' },
    { lbl: 'infra', items: ['vercel', 'stripe'], color: '#161e87' },
  ];
  return (
    <div className="rounded-2xl bg-white/5 border border-white/15 p-5 h-full flex flex-col gap-4">
      <div className="flex gap-2 text-xs">
        {tools.map((t, i) => (
          <label
            key={t}
            className={`px-3 py-1.5 rounded-full border ${
              i === 0
                ? 'bg-white text-black border-white'
                : 'border-white/20 text-white/60'
            }`}
          >
            {t}
          </label>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3 flex-1">
        {groups.map((g) => (
          <div key={g.lbl} className="flex flex-col gap-2">
            <div className="text-[10px] uppercase tracking-wider text-white/40">
              {g.lbl}
            </div>
            {g.items.map((it) => (
              <div
                key={it}
                className="rounded-lg px-3 py-2.5 text-[11px] text-white font-medium text-center"
                style={{ background: g.color }}
              >
                {it}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

import Reveal from './Reveal';
import { useLocale } from '../i18n/useLocale';

const MODULE_LAYOUTS = [
  { key: 'bizChecker' as const, span: 'md:col-span-3', visual: <BizCheckerMock /> },
  { key: 'uxBuilder' as const, span: 'md:col-span-3', visual: <UXBuilderMock /> },
  { key: 'canvas' as const, span: 'md:col-span-2', visual: <CanvasMock /> },
  { key: 'diagnose' as const, span: 'md:col-span-2', visual: <DiagnoseMock /> },
  { key: 'deck' as const, span: 'md:col-span-2', visual: <DeckMock /> },
  { key: 'develop' as const, span: 'md:col-span-6', visual: <DevelopMock />, invert: true, horizontal: true },
];

export default function Modules() {
  const { t } = useLocale();
  const modules = MODULE_LAYOUTS.map((layout) => {
    const content = t.modules.items[layout.key];
    return { ...layout, ...content };
  });

  return (
    <section id="modules" className="py-28 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal variant="up" className="max-w-3xl">
          <div className="text-xs tracking-[0.2em] uppercase text-black/50 mb-5">
            {t.modules.eyebrow}
          </div>
          <h2 className="hero-title text-5xl md:text-7xl font-medium text-black">
            {t.modules.title}
          </h2>
          <p className="text-black/70 text-base md:text-lg mt-6 max-w-2xl">
            {t.modules.desc}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-6 gap-4 mt-16">
          {modules.map((m, i) => (
            <Reveal
              key={m.badge}
              variant="up"
              delay={(i % 3) * 110}
              className={`${m.span} h-full`}
            >
            <div
              className={`rounded-3xl border p-7 transition-colors h-full ${
                m.invert
                  ? 'bg-black text-white border-black hover:border-white/30'
                  : 'bg-white border-black/10 hover:border-black/40'
              }`}
            >
              {m.horizontal ? (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`text-xs tracking-[0.2em] uppercase mb-5 ${m.invert ? 'text-white/50' : 'text-black/50'}`}>
                      {m.badge}
                    </div>
                    <h3 className={`hero-title text-2xl md:text-3xl font-medium mb-4 ${m.invert ? 'text-white' : 'text-black'}`}>
                      {m.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${m.invert ? 'text-white/70' : 'text-black/70'}`}>
                      {m.desc}
                    </p>
                  </div>
                  <div className="aspect-[16/10]">{m.visual}</div>
                </div>
              ) : (
                <>
                  <div className="text-xs tracking-[0.2em] uppercase mb-5 text-black/50">
                    {m.badge}
                  </div>
                  <h3 className="hero-title text-2xl md:text-3xl font-medium mb-4 text-black">
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 text-black/70">
                    {m.desc}
                  </p>
                  <div className="aspect-[16/10] mt-auto">{m.visual}</div>
                </>
              )}
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
