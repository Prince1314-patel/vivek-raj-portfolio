import Reveal from "./Reveal.jsx";
import { education } from "../data/education.js";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="uppercase tracking-[0.3em] text-gold text-xs mb-3">[ Education ]</p>
        <h2 className="font-display text-4xl mb-12">Academic Journey</h2>
        <ol className="space-y-10 border-l border-border pl-8">
          {education.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 0.05} className="relative">
              <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-gold" />
              <p className="text-gold text-sm mb-1">{item.period}</p>
              <h3 className="font-display text-xl mb-1">{item.title}</h3>
              <p className="text-muted text-sm mb-2">{item.institution}</p>
              <p className="text-cream/80">{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
