import { Terminal } from "lucide-react";
import Reveal from "./Reveal";

const CODE_LINES = [
  { indent: 0, text: "const trimi = {", color: "text-slate-400" },
  { indent: 1, text: "role: 'Full-Stack Developer',", color: "text-blue-bright" },
  { indent: 1, text: "focus: ['web', 'mobile', 'apis'],", color: "text-violet-bright" },
  { indent: 1, text: "mindset: 'idk be delusional',", color: "text-cyan" },
  { indent: 0, text: "};", color: "text-slate-400" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">About Me</h2>
          <p className="mt-3 text-slate-400">Building ideas into useful digital experiences.</p>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal delay={100}>
            <p className="text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
              I'm a junior full-stack developer who enjoys building web and mobile applications
              from the ground up. I work across frontend interfaces, backend APIs, databases, and
              mobile development, while continuously learning and improving my skills.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue/20 to-violet/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  <span className="ml-2 flex items-center gap-1.5 text-xs text-slate-500">
                    <Terminal size={12} />
                    about.ts
                  </span>
                </div>
                <div className="p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
                  {CODE_LINES.map((line, i) => (
                    <div key={i} style={{ paddingLeft: `${line.indent * 16}px` }} className={line.color}>
                      {line.text}
                    </div>
                  ))}
                  <span className="mt-1 inline-block h-4 w-2 animate-glow-pulse bg-violet-bright/80" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
