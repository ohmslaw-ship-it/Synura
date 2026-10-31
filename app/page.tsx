import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import NeuralGlow from '@/components/NeuralGlow';
import Statement from '@/components/Statement';

export default function Home() {
  return (
    <>
      <section className="hero-over-glow relative h-screen overflow-hidden bg-black">
        <NeuralGlow />

        <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10">
          <span className="font-brand text-lg font-semibold tracking-[0.2em] text-white/90 sm:text-xl md:text-2xl md:tracking-[0.26em] lg:text-[1.75rem] lg:tracking-[0.28em]">
            Synura
          </span>
          <div className="flex items-center gap-8 text-sm text-white/70">
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#work" className="transition-colors hover:text-white">
              Work
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </nav>

        <div className="relative z-10 flex h-[calc(100vh-4.5rem)] flex-col items-center justify-center px-6 text-center">
          <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-zinc-100 md:text-6xl">
            Cognition, Amplified
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70 md:text-xl">
            A reactive synaptic display that mirrors your focus and intent —
            built for next-gen neurotechnology.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="rounded-full bg-white px-8 py-3 text-lg font-normal text-black transition-transform duration-300 ease-out hover:scale-[1.02] md:text-xl"
            >
              Join the waitlist
            </button>
            <button
              type="button"
              className="rounded-full border border-white/25 bg-white/10 px-8 py-3 text-lg font-normal text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-transform duration-300 ease-out hover:scale-[1.02] md:text-xl"
            >
              See how it works
            </button>
          </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to explore"
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/80"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.22em]">
            Scroll
          </span>
          <span
            className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 pt-1.5"
            aria-hidden
          >
            <span className="hero-scroll-dot block h-1 w-1 rounded-full bg-white/80" />
          </span>
        </a>
      </section>

      <Statement />
      <HowItWorks />
      <Features />
    </>
  );
}
