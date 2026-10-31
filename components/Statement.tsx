'use client';

import { useEffect, useRef, useState } from 'react';

const STATEMENT =
  'Your brain fires 86 billion neurons. We help you use them.';
const WORDS = STATEMENT.split(' ');
const MIN_OPACITY = 0.2;
const MAX_OPACITY = 1;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function opacitiesForProgress(progress: number): number[] {
  const n = WORDS.length;
  return WORDS.map((_, i) => {
    const wordStart = i / n;
    const wordEnd = (i + 1) / n;
    const segment = wordEnd - wordStart;
    const local = (progress - wordStart) / segment;
    const t = clamp(local, 0, 1);
    return MIN_OPACITY + (MAX_OPACITY - MIN_OPACITY) * t;
  });
}

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const [wordOpacities, setWordOpacities] = useState<number[]>(() =>
    opacitiesForProgress(0),
  );

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollRange = rect.height - window.innerHeight;
      const progress =
        scrollRange <= 0 ? 0 : clamp(-rect.top / scrollRange, 0, 1);

      setWordOpacities(opacitiesForProgress(progress));
    };

    const scheduleUpdate = () => {
      if (rafId !== 0) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        update();
      });
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      if (rafId !== 0) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-[250vh] bg-black"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center px-6 md:px-10">
        <p className="font-display max-w-[900px] text-center text-3xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
          {WORDS.map((word, i) => (
            <span
              key={`${i}-${word}`}
              style={{
                opacity: wordOpacities[i],
                transition: 'opacity 150ms',
              }}
              className="inline"
            >
              {word}
              {i < WORDS.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
