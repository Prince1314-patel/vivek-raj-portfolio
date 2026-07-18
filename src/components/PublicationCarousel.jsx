import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { publicationCovers } from "../data/publicationCovers.js";

const AUTO_ADVANCE_MS = 6000;

export default function PublicationCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = publicationCovers[index];

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % publicationCovers.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused]);

  function goTo(i) {
    setIndex((i + publicationCovers.length) % publicationCovers.length);
  }

  return (
    <div
      className="mb-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous publication"
          onClick={() => goTo(index - 1)}
          className="shrink-0 text-cream/70 hover:text-gold transition-colors"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-surface">
          <img
            key={active.id}
            src={active.image}
            alt={active.title}
            className="w-full aspect-[2/3] object-cover"
          />
        </div>

        <button
          type="button"
          aria-label="Next publication"
          onClick={() => goTo(index + 1)}
          className="shrink-0 text-cream/70 hover:text-gold transition-colors"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="text-center mt-6 max-w-2xl mx-auto">
        <h3 className="font-display text-xl">{active.title}</h3>
        {active.venue && <p className="text-gold text-sm mt-1">{active.venue}</p>}
        {active.description && (
          <p className="text-cream/80 text-sm mt-2">{active.description}</p>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {publicationCovers.map((pub, i) => (
          <button
            key={pub.id}
            type="button"
            aria-label={`Go to ${pub.title}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? "bg-gold" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
