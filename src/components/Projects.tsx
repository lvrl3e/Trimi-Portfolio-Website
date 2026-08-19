import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-fg sm:text-4xl">My Projects</h2>
          <p className="mt-3 text-fg-muted">Some things I've been building.</p>
        </Reveal>

        {featured && (
          <Reveal delay={100} className="mt-16">
            <div className="group relative overflow-hidden rounded-3xl border border-violet/30 bg-gradient-to-br from-tint-2 to-tint-1 p-1 transition-all duration-500 hover:border-violet/50">
              <div className="absolute -inset-20 -z-10 bg-gradient-to-br from-blue/10 via-violet/10 to-transparent blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="grid overflow-hidden rounded-[22px] md:grid-cols-2">
                <div className="relative min-h-[220px] overflow-hidden bg-surface md:min-h-full">
                  <img
                    src={featured.image}
                    alt={`${featured.name} cover art`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-violet-bright">
                    <Sparkles size={12} />
                    Featured Project
                  </span>
                  <h3 className="text-2xl font-bold text-fg">{featured.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted sm:text-base">
                    {featured.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border-subtle bg-tint-2 px-3 py-1 text-xs text-fg-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex gap-3">
                    <a
                      href={featured.githubUrl}
                      className="flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-fg-secondary transition-all duration-300 hover:border-violet/50 hover:bg-tint-2"
                    >
                      <GithubIcon size={16} />
                      GitHub
                    </a>
                    {featured.liveUrl && (
                      <a
                        href={featured.liveUrl}
                        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue to-violet px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(139,92,246,0.5)]"
                      >
                        <ExternalLink size={16} />
                        {featured.liveLabel ?? "Live Demo"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.name} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border-subtle bg-tint-1 transition-all duration-300 hover:-translate-y-1 hover:border-violet/30 hover:shadow-[0_20px_50px_-20px_rgba(139,92,246,0.35)]">
                <div className="relative h-40 overflow-hidden bg-surface">
                  <img
                    src={project.image}
                    alt={`${project.name} cover art`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-fg">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border-subtle bg-tint-2 px-2.5 py-1 text-[11px] text-fg-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1.5 text-sm font-medium text-fg-secondary transition-all duration-300 hover:text-violet-bright"
                    >
                      <GithubIcon size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-1.5 text-sm font-medium text-fg-secondary transition-all duration-300 hover:text-blue-bright"
                      >
                        <ExternalLink size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                        {project.liveLabel ?? "Live Demo"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
