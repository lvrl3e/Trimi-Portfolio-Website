import { services } from "../data/services";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What I Do</h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-blue/30 hover:bg-white/[0.04] hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blue-bright transition-all duration-300 group-hover:border-violet/40 group-hover:text-violet-bright group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
