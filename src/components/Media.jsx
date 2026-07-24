import { Play } from "lucide-react";
import Reveal from "./Reveal.jsx";
import PlateHeading from "./PlateHeading.jsx";
import { media } from "../data/media.js";

export default function Media() {
  return (
    <section id="media" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <PlateHeading slug="CONTACT SHEET" title="Media" plate="F" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {media.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <a
                href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="crops group relative block border-2 border-sumi bg-paper shadow-pull transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1"
              >
                <span className="crops-b" aria-hidden="true" />
                <div className="relative overflow-hidden border-b-2 border-sumi bg-riso-teal">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-44 w-full object-cover mix-blend-multiply [filter:grayscale(1)_contrast(1.25)] transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 halftone text-sumi/30 mix-blend-multiply" aria-hidden="true" />
                  <span className="absolute bottom-2 right-2 flex h-11 w-11 items-center justify-center border-2 border-sumi bg-riso-pink text-paper">
                    <Play size={18} className="ml-0.5" fill="currentColor" />
                  </span>
                  <span className="slug absolute left-2 top-2 bg-paper px-2 py-0.5 text-sumi">
                    REEL {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold uppercase leading-tight tracking-tight text-sumi transition-colors group-hover:text-riso-pink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-sumi/70">{item.description}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
