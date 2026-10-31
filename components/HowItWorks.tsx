'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    title: 'Sense',
    description: 'Reads subtle neural signals in real time.',
  },
  {
    title: 'Understand',
    description: 'AI decodes focus, fatigue and intent.',
  },
  {
    title: 'Amplify',
    description: 'Adaptive feedback keeps you in flow.',
  },
] as const;

function StepIcon() {
  return (
    <div
      className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sky-400/50 bg-sky-950/40 shadow-[0_0_24px_rgba(56,189,248,0.35)]"
      aria-hidden
    >
      <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.95),0_0_24px_rgba(56,189,248,0.45)]" />
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineDrawn, setLineDrawn] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.28em] text-sky-400">
          HOW IT WORKS
        </p>
        <h2 className="font-display mt-4 text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-[2.5rem]">
          From signal to clarity
        </h2>

        <div className="relative mt-16 md:mt-20">
          {/* Desktop: horizontal connector between circle centers */}
          <div
            className="pointer-events-none absolute left-[calc(16.666%-1.375rem)] right-[calc(16.666%-1.375rem)] top-[1.375rem] hidden h-px md:block"
            aria-hidden
          >
            <div className="h-full w-full bg-sky-400/20">
              <div
                className="h-full origin-left bg-sky-400/90 transition-[transform] duration-[1.4s] ease-out"
                style={{
                  transform: lineDrawn ? 'scaleX(1)' : 'scaleX(0)',
                }}
              />
            </div>
          </div>

          {/* Mobile: vertical connector */}
          <div
            className="pointer-events-none absolute left-1/2 top-[2.75rem] bottom-[2.75rem] w-px -translate-x-1/2 md:hidden"
            aria-hidden
          >
            <div className="h-full w-full bg-sky-400/20">
              <div
                className="h-full w-full origin-top bg-sky-400/90 transition-[transform] duration-[1.4s] ease-out"
                style={{
                  transform: lineDrawn ? 'scaleY(1)' : 'scaleY(0)',
                }}
              />
            </div>
          </div>

          <ol className="grid gap-14 md:grid-cols-3 md:gap-8">
            {STEPS.map((step) => (
              <li
                key={step.title}
                className="relative flex flex-col items-center gap-4 text-center"
              >
                <StepIcon />
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-base leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
