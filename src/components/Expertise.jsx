import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import PlateHeading from "./PlateHeading.jsx";
import { expertise } from "../data/expertise.js";

// The three disciplines as three ink plates. Where they overprint, they blend
// into a new color — separate them and you see the seams. This is the thesis.
const PLATES = [
  { ink: "#EC2A78", label: "PINK", rest: { x: -46, y: 8 }, out: { x: -104, y: 8 } },
  { ink: "#2340E0", label: "BLUE", rest: { x: 46, y: 8 }, out: { x: 104, y: 8 } },
  { ink: "#FFD200", label: "YELLOW", rest: { x: 0, y: -44 }, out: { x: 0, y: -104 } },
];

export default function Expertise() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="expertise"
      className="grain relative border-y-2 border-sumi bg-riso-purple px-5 py-24 text-paper sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <PlateHeading slug="SEPARATIONS" title="Expertise" plate="D" tone="paper" />

        <div className="grid items-center gap-12 lg:grid-cols-[22rem_1fr]">
          {/* ---- The overprint proofing window ---- */}
          <div className="crops relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center border-2 border-sumi bg-paper">
            <span className="crops-b" aria-hidden="true" />
            <span className="slug absolute left-3 top-3 text-sumi/50">OVERPRINT · MULTIPLY</span>
            <div className="relative h-56 w-56">
              {PLATES.map((p, i) => {
                const pos = active === i ? p.out : p.rest;
                return (
                  <motion.div
                    key={p.label}
                    className="absolute left-1/2 top-1/2 h-40 w-40 rounded-full overprint halftone-lg"
                    style={{ background: p.ink, color: "rgba(24,19,9,0.28)" }}
                    initial={{ x: p.rest.x, y: p.rest.y, translateX: "-50%", translateY: "-50%", opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ x: pos.x, y: pos.y, translateX: "-50%", translateY: "-50%" }}
                    transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  />
                );
              })}
            </div>
            <p className="slug absolute bottom-3 right-3 text-sumi/50">3 PLATES → 1 IMAGE</p>
          </div>

          {/* ---- The disciplines ---- */}
          <div className="grid gap-4">
            {expertise.map((area, index) => (
              <Reveal
                key={area.id}
                delay={index * 0.06}
                as="div"
              >
                <div
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  className="crops relative border-2 border-sumi bg-paper p-6 text-sumi transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="crops-b" aria-hidden="true" />
                  <div className="mb-2 flex items-center gap-3">
                    <span
                      className="h-5 w-5 shrink-0 border-2 border-sumi"
                      style={{ background: PLATES[index % PLATES.length].ink }}
                      aria-hidden="true"
                    />
                    <span className="slug text-sumi/55">PLATE {index + 1} · {PLATES[index % PLATES.length].label}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase leading-none tracking-tight text-sumi">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sumi/85">{area.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
