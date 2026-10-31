import NeuralGlow from '@/components/NeuralGlow';

export default function Home() {
  return (
    <>
      <section className="relative h-screen overflow-hidden bg-black">
        <NeuralGlow />

        <nav className="relative z-10 flex items-center justify-end px-6 py-5 md:px-10">
          <span className="font-brand absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold tracking-[0.2em] text-white/90 sm:text-xl md:text-2xl md:tracking-[0.26em] lg:text-[1.75rem] lg:tracking-[0.28em]">
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
          <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-zinc-100 [text-shadow:0_1px_28px_rgba(0,0,0,0.45)] md:text-6xl">
            Cognition, Amplified
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70 md:text-xl">
            A reactive synaptic display that mirrors your focus and intent —
            built for next-gen neurotechnology.
          </p>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen bg-zinc-950 px-6 py-24 text-white md:px-10"
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Scroll to explore
          </h2>
          <p className="mt-6 leading-relaxed text-white/60">
            This section sits below the hero so you can see how scroll progress
            subtly shifts the shader&apos;s indigo tint. Move your pointer over
            the viewport above to pull the glow toward your cursor.
          </p>
        </div>
      </section>
    </>
  );
}
