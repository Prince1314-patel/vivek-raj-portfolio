import Reveal from "./Reveal.jsx";
import { media } from "../data/media.js";

export default function Media() {
  return (
    <section id="media" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl mb-12">Media & Videos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {media.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05} className="group">
              <a
                href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 hover:border-gold/60 transition-colors">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-red-600 ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm text-cream leading-tight hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-cream/60 text-xs mt-2">{item.description}</p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
