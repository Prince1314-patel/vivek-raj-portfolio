import Reveal from "./Reveal.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 bg-surface/40">
      <div className="mx-auto max-w-5xl">
        <p className="uppercase tracking-[0.3em] text-gold text-xs mb-3">[ Experience ]</p>
        <h2 className="font-display text-4xl mb-12">Professional Development</h2>
        <div className="grid gap-6">
          {experience.map((job, index) => (
            <Reveal
              key={job.id}
              delay={index * 0.05}
              className="border border-border rounded-2xl p-6 hover:border-gold/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="font-display text-3xl text-gold/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-muted text-sm">{job.period}</span>
              </div>
              <h3 className="font-display text-xl mb-1">{job.role}</h3>
              {job.orgUrl ? (
                <a
                  href={job.orgUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold hover:underline text-sm mb-3 inline-block"
                >
                  {job.org}
                </a>
              ) : (
                <p className="text-muted text-sm mb-3">{job.org}</p>
              )}
              <ul className="list-disc list-inside space-y-1 text-cream/80 text-sm">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
