import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Let's build something together.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-slate-400">
          Have a project in mind, an idea to discuss, or just want to connect? I'd love to hear
          from you.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:trimi05rondilla@gmail.com"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue to-violet px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.65)] hover:-translate-y-0.5 sm:w-auto"
          >
            <Mail size={17} />
            Get In Touch
          </a>
          <a
            href="https://github.com/lvrl3e"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-violet/50 hover:bg-white/5 sm:w-auto"
          >
            <GithubIcon size={17} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lvrl3e/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-violet/50 hover:bg-white/5 sm:w-auto"
          >
            <LinkedinIcon size={17} />
            LinkedIn
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-600">trimi05rondilla@gmail.com</p>
      </Reveal>
    </section>
  );
}
