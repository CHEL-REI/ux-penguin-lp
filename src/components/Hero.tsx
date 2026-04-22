import { useEffect, useState } from 'react';
import Flower from './Flower';
import MonitorMock from './MonitorMock';
import PageNav from './PageNav';
import { useLocale } from '../i18n/useLocale';

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="text-center lg:text-left">
      <div className="hero-title text-3xl md:text-4xl lg:text-5xl font-medium text-black">
        {n}
      </div>
      <div className="text-xs md:text-sm text-black/60 mt-1 leading-snug">
        {label}
      </div>
    </div>
  );
}

type FlowerPlan = {
  variant: 'red' | 'amber' | 'gold';
  shape?: 'flower' | 'block';
  size: number;
  rotate: number;
  withStem?: boolean;
  trail: { left: string; top: string };
  home: { left: string; top: string };
  bloomDelay: number;
};

const INTRO_FLOWERS: FlowerPlan[] = [
  { variant: 'red', size: 56, rotate: -12, withStem: true, trail: { left: '82%', top: '44vh' }, home: { left: '15%', top: '20vh' }, bloomDelay: 0.32 },
  { variant: 'amber', size: 44, rotate: 10, withStem: false, trail: { left: '60%', top: '44vh' }, home: { left: '86%', top: '26vh' }, bloomDelay: 0.54 },
  { variant: 'gold', size: 40, rotate: -6, withStem: true, trail: { left: '38%', top: '44vh' }, home: { left: '82%', top: '72vh' }, bloomDelay: 0.76 },
  { variant: 'red', shape: 'block', size: 48, rotate: 6, trail: { left: '16%', top: '44vh' }, home: { left: '14%', top: '70vh' }, bloomDelay: 0.98 },
];

function useIntroPhase() {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase(1), 80);
    const t2 = window.setTimeout(() => setPhase(2), 1380);
    const t3 = window.setTimeout(() => setPhase(3), 2500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);
  return phase;
}

function TypewriterWord({
  text,
  play,
  delay,
  charDuration = 0.08,
}: {
  text: string;
  play: boolean;
  delay: number;
  charDuration?: number;
}) {
  const chars = [...text].length;
  const duration = Math.max(0.2, chars * charDuration);
  return (
    <span
      className={`tw-line ${play ? 'tw-play' : ''}`}
      style={{
        animationDuration: `${duration}s`,
        animationTimingFunction: `steps(${chars})`,
        animationDelay: `${delay}s`,
      }}
    >
      {text}
    </span>
  );
}

export default function Hero() {
  const phase = useIntroPhase();
  const revealed = phase >= 2;
  const { t } = useLocale();
  const words = t.hero.words;

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20">
      <div
        className="absolute top-0 left-0 right-0 z-30"
        style={{
          opacity: revealed ? 1 : 0,
          transition: 'opacity 0.7s cubic-bezier(0.2,0.7,0.2,1) 0.15s',
          pointerEvents: revealed ? 'auto' : 'none',
        }}
      >
        <PageNav />
      </div>

      {/* Intro animation overlay: running penguin + trail flowers */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <img
          src="/mascot.svg"
          alt=""
          aria-hidden="true"
          className="absolute w-[110px] md:w-[140px] drop-shadow-[0_18px_36px_rgba(74,78,218,0.25)]"
          style={{
            top: '44vh',
            right: phase === 0 ? '-18%' : '108%',
            transform: 'translateY(-50%) scaleX(1)',
            transition: 'right 1.25s linear',
            opacity: phase >= 2 ? 0 : 1,
            animation: phase === 1 ? 'penguinBob 0.34s ease-in-out infinite' : 'none',
          }}
        />

        {INTRO_FLOWERS.map((f, i) => {
          const atHome = phase >= 2;
          const visible = phase >= 1;
          const swayDuration = 3.6 + i * 0.45;
          const swayDelay = 1.15 + i * 0.18;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: atHome ? f.home.left : f.trail.left,
                top: atHome ? f.home.top : f.trail.top,
                transform: 'translate(-50%, -50%)',
                transition: `left 0.95s cubic-bezier(0.2, 0.7, 0.2, 1) ${i * 0.08}s, top 0.95s cubic-bezier(0.2, 0.7, 0.2, 1) ${i * 0.08}s`,
              }}
            >
              <div
                style={{
                  animation: atHome ? `flowerSway ${swayDuration}s ease-in-out ${swayDelay}s infinite` : 'none',
                }}
              >
                <div
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: `scale(${visible ? 1 : 0}) rotate(${f.rotate}deg)`,
                    transition: `opacity 0.3s ease ${f.bloomDelay}s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${f.bloomDelay}s`,
                  }}
                >
                  <Flower variant={f.variant} shape={f.shape} size={f.size} withStem={f.withStem ?? true} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="max-w-7xl mx-auto px-6 md:px-10 relative z-20"
        style={{
          opacity: revealed ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.2,0.7,0.2,1)',
        }}
      >
        <div className="relative max-w-4xl mx-auto text-center">
          {words.map((w, i) => {
            const isLatin = /^[\x00-\x7F\s]+$/.test(w);
            return (
              <h1
                key={i}
                lang={isLatin ? 'en' : undefined}
                className="hero-title font-medium text-black text-[clamp(60px,14vw,170px)]"
              >
                <TypewriterWord text={w} play={revealed} delay={0.2 + i * 0.55} />
              </h1>
            );
          })}

          <p
            className="mt-6 md:mt-8 mx-auto max-w-lg text-black/80 text-lg md:text-xl leading-snug"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'none' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 1.7s, transform 0.7s cubic-bezier(0.2,0.7,0.2,1) 1.7s',
            }}
          >
            {t.hero.desc.map((seg, i) =>
              seg.bold ? (
                <strong key={i} className="font-semibold text-black">{seg.text}</strong>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </p>
        </div>

        <div
          className="mt-16 md:mt-20 grid lg:grid-cols-[200px_1fr_220px] gap-10 lg:gap-12 items-end"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.8s ease 2.0s, transform 0.8s cubic-bezier(0.2,0.7,0.2,1) 2.0s',
          }}
        >
          <div className="flex flex-row justify-around lg:flex-col lg:justify-end gap-6 lg:gap-10 order-3 lg:order-1 lg:pb-8">
            {t.hero.stats.map((s) => (
              <Stat key={s.label} n={s.n} label={s.label} />
            ))}
          </div>

          <div className="order-1 lg:order-2 flex justify-center relative">
            <MonitorMock className="w-full max-w-[560px] lg:max-w-[640px]" />
          </div>

          <div className="order-2 lg:order-3 flex justify-center lg:justify-start lg:items-end">
            <img
              src="/mascot.svg"
              alt="ux penguin mascot"
              className="w-[160px] md:w-[180px] lg:w-[210px] drop-shadow-[0_18px_36px_rgba(74,78,218,0.25)]"
              style={{
                opacity: phase >= 3 ? 1 : 0,
                animation: phase >= 3 ? 'mascotFloat 6s ease-in-out infinite' : 'none',
                transform: phase >= 3 ? undefined : 'translateY(24px)',
                transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
