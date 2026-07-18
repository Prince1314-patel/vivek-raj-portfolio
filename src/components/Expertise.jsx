import Reveal from "./Reveal.jsx";
import { expertise } from "../data/expertise.js";

export default function Expertise() {
  return (
    <section id="expertise" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="uppercase tracking-[0.3em] text-gold text-xs mb-3">[ Expertise ]</p>
        <h2 className="font-display text-4xl mb-12">Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {expertise.map((area, index) => (
            <Reveal
              key={area.id}
              delay={index * 0.05}
              className="border border-border rounded-2xl p-6"
            >
              <h3 className="font-display text-xl mb-3 text-gold">{area.title}</h3>
              <p className="text-cream/80 text-sm">{area.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
