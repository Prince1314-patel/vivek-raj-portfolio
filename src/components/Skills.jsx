import Reveal from "./Reveal.jsx";
import PlateHeading from "./PlateHeading.jsx";
import { skills } from "../data/skills.js";

// Each discipline is mixed as its own ink; the items are swatches drawn from it.
// dark inks carry paper text; mid/light inks carry sumi text (contrast floor)
const INKS = [
  { name: "PINK", bg: "bg-riso-pink", text: "text-sumi" },
  { name: "BLUE", bg: "bg-riso-blue", text: "text-paper" },
  { name: "TEAL", bg: "bg-riso-teal", text: "text-sumi" },
  { name: "ORANGE", bg: "bg-riso-orange", text: "text-sumi" },
  { name: "PURPLE", bg: "bg-riso-purple", text: "text-paper" },
  { name: "YELLOW", bg: "bg-riso-yellow", text: "text-sumi" },
];

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <PlateHeading slug="INK LIBRARY" title="Skills" plate="C" />

        <div className="grid gap-px border-2 border-sumi bg-sumi sm:grid-cols-2">
          {skills.map((group, index) => {
            const ink = INKS[index % INKS.length];
            return (
              <Reveal key={group.category} delay={index * 0.05} className="bg-paper p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className={`grain relative h-9 w-9 shrink-0 border-2 border-sumi ${ink.bg}`} aria-hidden="true" />
                  <div>
                    <p className="slug text-sumi/55">INK № {String(index + 1).padStart(2, "0")} · {ink.name}</p>
                    <h3 className="font-display text-xl font-bold uppercase leading-none tracking-tight text-sumi">
                      {group.category}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`slug border-2 border-sumi px-3 py-1.5 ${ink.bg} ${ink.text} normal-case tracking-normal`}
                      style={{ letterSpacing: "0.02em" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
