import Reveal from "./Reveal.jsx";
import { skills } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-surface/40">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-4xl mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05}>
              <h3 className="font-display text-lg mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs uppercase tracking-wide border border-border rounded-full px-3 py-1 text-cream/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
