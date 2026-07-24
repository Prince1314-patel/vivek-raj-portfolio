import Reveal from "./Reveal.jsx";
import PlateHeading from "./PlateHeading.jsx";
import { education } from "../data/education.js";

export default function Education() {
  return (
    <section id="education" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <PlateHeading slug="ACADEMIC JOURNEY" title="Education" plate="A" />

        <ol className="relative ml-1 border-l-2 border-sumi pl-8 sm:pl-10">
          {education.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 0.05} className="relative pb-11 last:pb-0">
              {/* registration target as the timeline node */}
              <span
                className="reg-target absolute -left-[calc(2rem+9px)] top-1 bg-paper text-riso-pink sm:-left-[calc(2.5rem+9px)]"
                aria-hidden="true"
              />
              <p className="slug mb-1 text-riso-blue">
                {item.period}
                {item.type !== "degree" && (
                  <span className="ml-2 text-sumi/50">· {item.type.toUpperCase()}</span>
                )}
              </p>
              <h3 className="font-display text-2xl font-bold leading-none tracking-tight text-sumi">
                {item.title}
              </h3>
              <p className="mt-1 font-mono text-sm text-sumi/70">{item.institution}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-sumi/85">{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
