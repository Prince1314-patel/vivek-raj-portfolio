import Reveal from "./Reveal.jsx";
import PlateHeading from "./PlateHeading.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="grain relative border-y-2 border-sumi bg-riso-yellow px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <PlateHeading slug="THE WORKING PROOFS" title="Experience" plate="B" />

        <div className="grid gap-6 sm:grid-cols-2">
          {experience.map((job, index) => (
            <Reveal
              key={job.id}
              delay={index * 0.05}
              className="crops group relative flex flex-col border-2 border-sumi bg-paper p-6 shadow-pull transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1"
            >
              <span className="crops-b" aria-hidden="true" />
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="stamp text-sm text-sumi">
                  RUN&nbsp;{String(index + 1).padStart(2, "0")}
                </span>
                <span className="slug pt-1 text-right text-sumi/60">{job.period}</span>
              </div>

              <h3 className="font-display text-2xl font-bold leading-none tracking-tight text-sumi">
                {job.role}
              </h3>
              {job.orgUrl ? (
                <a
                  href={job.orgUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block font-mono text-sm text-riso-blue underline-offset-4 hover:underline"
                >
                  {job.org}
                </a>
              ) : (
                <p className="mt-2 font-mono text-sm text-sumi/70">{job.org}</p>
              )}

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-sumi/85">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-[0.35rem] h-2 w-2 shrink-0 bg-riso-pink" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
