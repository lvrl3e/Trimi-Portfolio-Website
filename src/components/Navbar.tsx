import { useEffect, useState } from "react";
import { Menu, X, Code } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

const SOCIAL_LINKS = {
  github: "https://github.com/lvrl3e",
  linkedin: "https://www.linkedin.com/in/lvrl3e/",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="flex items-center gap-1.5 text-lg font-bold tracking-tight text-white"
        >
          Trimi
          <span className="text-gradient font-mono">{"</>"}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                    active === link.id ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-blue-bright to-violet-bright shadow-[0_0_8px_rgba(139,92,246,0.7)] transition-opacity duration-300 ${
                      active === link.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <LinkedinIcon size={18} />
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="rounded-full bg-gradient-to-r from-blue to-violet px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(139,92,246,0.55)] hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <button
          className="text-slate-200 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass mx-4 mt-3 flex flex-col gap-1 rounded-2xl border border-white/10 p-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`rounded-lg px-3 py-3 text-left text-base font-medium transition-colors ${
                active === link.id
                  ? "bg-white/5 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-4">
            <div className="flex items-center gap-5">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300"
              >
                <LinkedinIcon size={18} />
              </a>
              <Code size={18} className="text-slate-500" />
            </div>
            <button
              onClick={() => handleNavClick("contact")}
              className="rounded-full bg-gradient-to-r from-blue to-violet px-4 py-2.5 text-sm font-semibold text-white"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
