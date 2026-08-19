import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills &amp; Technologies</h2>
          <p className="mt-3 text-slate-400">Tools and technologies I build with.</p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-violet/30 hover:bg-white/[0.04]">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-transparent bg-gradient-to-r from-blue-bright to-violet-bright bg-clip-text">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-200 group-hover:border-white/15"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
