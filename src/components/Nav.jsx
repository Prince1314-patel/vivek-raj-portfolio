import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteInfo } from "../data/siteInfo.js";

const LINKS = [
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "skills", label: "Skills" },
  { id: "expertise", label: "Expertise" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur border-b border-border">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-xl">
          {siteInfo.name}
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-cream/80 hover:text-gold transition-colors uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-cream"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm uppercase">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-cream/80 hover:text-gold transition-colors"
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
