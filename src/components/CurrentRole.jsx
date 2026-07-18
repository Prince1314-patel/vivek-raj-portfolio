import Reveal from "./Reveal.jsx";
import { siteInfo } from "../data/siteInfo.js";
import secondaryPhoto from "../assets/photos/secondary-photo.jpg";

export default function CurrentRole() {
  const { currentRole } = siteInfo;
  return (
    <section className="px-6 py-16">
      <Reveal className="mx-auto max-w-5xl bg-surface border border-border rounded-2xl p-8 grid md:grid-cols-[auto_1fr] gap-8 items-center">
        <img
          src={secondaryPhoto}
          alt={`${siteInfo.name} at ${currentRole.institution}`}
          className="rounded-xl w-full md:w-56 object-cover"
        />
        <div>
          <p className="uppercase tracking-[0.3em] text-gold text-xs mb-3">Current Role</p>
          <h2 className="font-display text-2xl mb-2">
            {currentRole.title} — {currentRole.org}
          </h2>
          <p className="text-muted mb-4">{currentRole.institution}</p>
          <p className="text-cream/80">{currentRole.description}</p>
        </div>
      </Reveal>
    </section>
  );
}
