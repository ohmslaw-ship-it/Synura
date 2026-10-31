'use client';

import { FormEvent, useState } from 'react';

import NeuralGlow from '@/components/NeuralGlow';

export default function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="waitlist"
      className="bg-black px-6 py-20 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="relative h-[500px] overflow-hidden rounded-3xl border border-white/10">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <NeuralGlow />
          </div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <h2 className="font-display max-w-xl text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-[2.5rem]">
              Be first to think faster
            </h2>
            <p className="mt-4 max-w-md text-base text-white/70 md:text-lg">
              Join the private beta. No spam, just early access.
            </p>

            {submitted ? (
              <p
                className="mt-10 text-lg font-medium text-white"
                role="status"
              >
                You&apos;re on the list ✓
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
              >
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-h-12 flex-1 rounded-full border border-white/15 bg-black/40 px-5 text-base text-white placeholder:text-white/40 backdrop-blur-sm outline-none transition-colors focus:border-white/30"
                />
                <button
                  type="submit"
                  className="min-h-12 shrink-0 rounded-full bg-white px-8 py-3 text-base font-normal text-black transition-transform duration-300 ease-out hover:scale-[1.02] sm:px-6"
                >
                  Join the waitlist
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
