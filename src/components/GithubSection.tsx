import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import Reveal from "./Reveal";

export default function GithubSection() {
  return (
    <section className="relative px-6 py-24">
      <Reveal className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-[100px]" />
          </div>

          <div className="relative">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
              <GithubIcon size={26} />
            </div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">More on GitHub</h2>
            <p className="mx-auto mt-3 max-w-md text-slate-400">
              Explore my repositories, experiments, and the things I'm building.
            </p>
            <a
              href="https://github.com/lvrl3e"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue to-violet px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.65)] hover:-translate-y-0.5"
            >
              <GithubIcon size={17} />
              Visit My GitHub
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
