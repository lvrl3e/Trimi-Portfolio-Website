import { Rocket, ChevronDown } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import StarField from "./StarField";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-6 pt-28 pb-20"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
        <StarField count={90} />

        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue/20 blur-[120px]" />
        <div className="absolute right-[8%] top-[20%] h-[380px] w-[380px] rounded-full bg-violet/20 blur-[110px]" />
        <div className="absolute left-[6%] top-[35%] h-[320px] w-[320px] rounded-full bg-cyan/10 blur-[100px]" />

        {/* Neon trail near bottom */}
        <svg
          className="absolute bottom-0 left-1/2 h-[260px] w-[140%] -translate-x-1/2 opacity-60"
          viewBox="0 0 1200 260"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="trail" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,220 C300,80 900,80 1200,220"
            fill="none"
            stroke="url(#trail)"
            strokeWidth="2"
          />
        </svg>
        <div className="absolute bottom-0 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-[100%] bg-violet/15 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Profile image */}
        <div className="relative mb-8 animate-float">
          <div className="relative flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full border-2 border-border-subtle bg-surface animate-photo-glow sm:h-[170px] sm:w-[170px]">
            <img
              src="/images/profile.png"
              alt="Trimi"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full animate-inner-glow" />
          </div>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-fg sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-gradient animate-name-glow">Trimi</span>
        </h1>

        <p className="mt-4 text-lg font-medium text-fg-secondary sm:text-xl">
          Full-Stack Developer &amp; App Maker
        </p>

        <p className="mx-auto mt-5 max-w-xl text-balance text-sm leading-relaxed text-fg-muted sm:text-base">
          I build modern web and mobile applications with clean code, useful features, and great
          user experiences.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <button
            onClick={() => scrollTo("projects")}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue to-violet px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.65)] hover:-translate-y-0.5 sm:w-auto"
          >
            <Rocket size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            View My Work
          </button>
          <a
            href="https://github.com/lvrl3e"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-tint-1 px-7 py-3.5 text-sm font-semibold text-fg-secondary transition-all duration-300 hover:border-violet/50 hover:bg-tint-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] sm:w-auto"
          >
            <GithubIcon size={17} />
            View Code
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-fg-subtle transition-colors hover:text-fg-secondary"
      >
        <span className="text-[11px] font-medium tracking-[0.2em]">SCROLL DOWN</span>
        <ChevronDown size={18} className="animate-bounce-slow" />
      </button>
    </section>
  );
}
