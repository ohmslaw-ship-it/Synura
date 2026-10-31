'use client';

import { useEffect, useRef, useState } from 'react';

// Placeholder figures — replace with verified product metrics.
const STATS = [
  {
    label: 'Focus time',
    end: 32,
    prefix: '+',
    suffix: '%',
    decimals: 0,
  },
  {
    label: 'Beta users',
    end: 12,
    prefix: '',
    suffix: 'k',
    decimals: 0,
  },
  {
    label: 'User rating',
    end: 4.9,
    prefix: '',
    suffix: '/5',
    decimals: 1,
  },
  {
    label: 'Signal latency',
    end: 50,
    prefix: '<',
    suffix: 'ms',
    decimals: 0,
  },
] as const;

const DURATION_MS = 1500;

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function formatAnimatedValue(value: number, decimals: number): string {
  if (decimals === 0) return String(Math.round(value));
  return value.toFixed(decimals);
}

function useCountUp(active: boolean, end: number, decimals: number): string {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let rafId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      setValue(end * easeOutCubic(progress));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [active, end]);

  return formatAnimatedValue(value, decimals);
}

function StatItem({
  stat,
  active,
  showDivider,
}: {
  stat: (typeof STATS)[number];
  active: boolean;
  showDivider: boolean;
}) {
  const animated = useCountUp(active, stat.end, stat.decimals);

  return (
    <div
      className={`flex flex-col items-center justify-center px-4 py-2 text-center ${
        showDivider ? 'md:border-l md:border-white/10' : ''
      }`}
    >
      <p className="font-display text-4xl font-semibold tabular-nums tracking-tight text-white sm:text-5xl md:text-[3.25rem]">
        {stat.prefix}
        {animated}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black px-6 py-20 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0">
          {STATS.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              active={active}
              showDivider={index > 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
