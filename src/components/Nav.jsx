import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteInfo } from "../data/siteInfo.js";

const LINKS = [
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "skills", label: "Skills" },
  { id: "expertise", label: "Expertise" },
  { id: "media", label: "Media" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-sumi bg-paper/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-black uppercase leading-none tracking-poster text-sumi">
            V<span className="text-riso-pink">R</span>
          </span>
          <span className="slug hidden text-sumi/60 sm:inline">PRESS</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="slug text-sumi transition-colors hover:text-riso-pink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-sumi md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-3 border-t-2 border-sumi px-5 pb-5 pt-4 md:hidden">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="slug text-sumi transition-colors hover:text-riso-pink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
