'use client';

import { useEffect, useRef, useState } from 'react';

const FEATURES = [
  {
    title: 'Focus tracking',
    description: 'Know when your attention dips before you do.',
  },
  {
    title: 'Real-time feedback',
    description: 'Gentle cues that keep you in flow.',
  },
  {
    title: 'Sleep insights',
    description: "See how rest shapes tomorrow's focus.",
  },
  {
    title: 'Stress signals',
    description: 'Spot tension early and reset faster.',
  },
  {
    title: 'Privacy-first',
    description: 'Your neural data stays on your device.',
  },
  {
    title: 'Works everywhere',
    description: 'Desk, commute, or deep work — same clarity.',
  },
] as const;

function handleSpotlightMove(event: React.MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  event.currentTarget.style.setProperty('--x', `${x}px`);
  event.currentTarget.style.setProperty('--y', `${y}px`);
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
      id="features"
      ref={sectionRef}
      className="bg-black px-6 py-20 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display mb-16 text-center text-3xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-4xl md:text-[2.5rem]">
          Built for the way you think
        </h2>

        <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <li
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-[opacity,transform,border-color] duration-700 ease-out hover:border-sky-400"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transitionDelay: visible ? `${index * 90}ms` : '0ms',
              }}
              onMouseMove={handleSpotlightMove}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
                style={{
                  background:
                    'radial-gradient(300px circle at var(--x, 50%) var(--y, 50%), rgba(56,189,248,0.15), transparent 60%)',
                }}
              />
              <div className="relative">
                <h3 className="font-display text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
