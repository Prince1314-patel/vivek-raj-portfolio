import { useState } from "react";
import Reveal from "./Reveal.jsx";
import CoverflowGallery from "./CoverflowGallery.jsx";
import "./embla.css";
import { publications } from "../data/publications.js";
import { publicationCovers } from "../data/publicationCovers.js";
import bannerB from "../assets/photos/banner-b.jpg";

export default function Publications() {
  const [activeCover, setActiveCover] = useState(0);
  const activePub = publicationCovers[activeCover];

  return (
    <section id="publications" className="relative px-6 py-24 overflow-hidden">
      <div
        data-testid="publications-banner"
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerB})` }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl">
        <h2 className="font-display text-4xl mb-12">Publications</h2>
        <CoverflowGallery
          slides={publicationCovers}
          onActiveChange={setActiveCover}
        />
        {activePub && (
          <div className="text-center mt-6 mb-2 px-4">
            <h3 className="font-display text-lg">{activePub.title}</h3>
            {activePub.venue && (
              <p className="text-gold text-sm mt-1">{activePub.venue}</p>
            )}
            {activePub.description && (
              <p className="text-cream/80 text-sm mt-2 max-w-2xl mx-auto">
                {activePub.description}
              </p>
            )}
          </div>
        )}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Reveal key={pub.id} delay={index * 0.04} className="border-b border-border pb-6">
              {pub.url ? (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-xl hover:text-gold transition-colors"
                >
                  {pub.title}
                </a>
              ) : (
                <h3 className="font-display text-xl">{pub.title}</h3>
              )}
              <p className="text-gold text-sm mt-1">{pub.venue}</p>
              {pub.description && <p className="text-cream/80 text-sm mt-2">{pub.description}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
