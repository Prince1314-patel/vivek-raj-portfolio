import Reveal from "./Reveal.jsx";
import { siteInfo } from "../data/siteInfo.js";
import secondaryPhoto from "../assets/photos/secondary-photo.jpg";

export default function CurrentRole() {
  const { currentRole } = siteInfo;
  return (
    <section className="grain relative px-5 py-16 sm:px-8">
      <Reveal className="crops relative mx-auto grid max-w-5xl gap-0 border-2 border-sumi bg-paper md:grid-cols-[16rem_1fr]">
        <span className="crops-b" aria-hidden="true" />

        {/* riso duotone photo panel */}
        <div className="relative overflow-hidden border-b-2 border-sumi bg-riso-pink md:border-b-0 md:border-r-2">
          <img
            src={secondaryPhoto}
            alt={`${siteInfo.name} at ${currentRole.institution}`}
            className="h-56 w-full object-cover mix-blend-multiply [filter:grayscale(1)_contrast(1.3)] md:h-full"
          />
          <div className="pointer-events-none absolute inset-0 halftone text-sumi/40 mix-blend-multiply" aria-hidden="true" />
        </div>

        <div className="p-7 sm:p-9">
          <div className="mb-4 flex items-center gap-3">
            <span className="stamp bg-riso-pink text-sm text-sumi">Latest Pull</span>
            <span className="slug text-sumi/55">2024–25 · ACTIVE</span>
          </div>
          <h2 className="font-display text-3xl font-black leading-none tracking-poster text-sumi sm:text-4xl">
            {currentRole.title} — {currentRole.org}
          </h2>
          <p className="mt-2 font-mono text-sm text-riso-blue">{currentRole.institution}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-sumi/85">{currentRole.description}</p>
        </div>
      </Reveal>
    </section>
  );
}
