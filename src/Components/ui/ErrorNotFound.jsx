import { GiAstronautHelmet } from "react-icons/gi";
import { MdArrowBack, MdRefresh } from "react-icons/md";
import { useMemo } from "react";

export function ErrorNotFound({ code }) {
  const funFacts = [
    "🐙 Git was created by Linus Torvalds in just 10 days.",
    "💻 The first computer bug was an actual moth stuck in a relay.",
    "🚀 NASA still uses code written decades ago for some missions.",
    "⚛️ React only updates the parts of the UI that actually change.",
    "🎮 Pac-Man was inspired by a pizza with one slice missing.",
    "🐧 Linux powers most of the world's web servers.",
    "☕ JavaScript was created in only 10 days.",
    "🕹️ The PlayStation was originally planned as a Nintendo add-on.",
    "🤖 The first website ever created is still online.",
    "💡 There are only 10 types of people: those who understand binary and those who don't.",
  ];

  const randomFact = useMemo(() => {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  }, []);

  // Deterministic-ish "random" stars, generated once
  const stars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="relative min-h-[28rem] flex items-center justify-center overflow-hidden rounded-2xl bg-[#0a0715] p-8 mt-5">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.9; }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}</style>

      {/* Starfield */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="pointer-events-none absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* Nebula glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full bg-purple-600/25 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-indigo-500/10 blur-[80px]" />

      {/* Glass card */}
      <div className="relative flex w-full max-w-lg flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl shadow-purple-950/50 backdrop-blur-2xl">
        {/* top sheen */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-purple-300/40 to-transparent" />

        {/* Astronaut badge */}
        <div className="relative mb-5 animate-float">
          <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-xl" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-purple-300/20 bg-purple-950/40 backdrop-blur">
            <GiAstronautHelmet className="text-3xl text-purple-200" />
          </div>
        </div>

        <span className="font-mono text-xs uppercase tracking-[0.3em] text-purple-300/70">
          Signal Lost · Error {code}
        </span>

        <h1 className="mt-3 bg-gradient-to-r from-purple-200 via-fuchsia-300 to-purple-400 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
          {code}
        </h1>

        <p className="mt-3 max-w-md text-sm text-purple-100/60">
          This page drifted out of orbit. It might not exist, or it's just
          floating somewhere we haven't mapped yet.
        </p>

        {/* Fun fact panel */}
        <div className="mt-8 w-full rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left backdrop-blur-xl">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-purple-300/80">
            While you're here
          </h2>
          <p className="mt-2 text-sm text-purple-100/80">{randomFact}</p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-purple-900/40 transition hover:shadow-purple-700/50 hover:brightness-110"
          >
            <MdRefresh className="text-base transition group-hover:rotate-180" />
            Try again
          </button>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-6 py-2.5 text-sm font-medium text-purple-100 backdrop-blur transition hover:bg-white/[0.08]"
          >
            <MdArrowBack className="text-base" />
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
