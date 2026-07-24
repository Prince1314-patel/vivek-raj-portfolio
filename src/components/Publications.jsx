import { useState } from "react";
import Reveal from "./Reveal.jsx";
import PlateHeading from "./PlateHeading.jsx";
import CoverflowGallery from "./CoverflowGallery.jsx";
import "./embla.css";
import { publications } from "../data/publications.js";
import { publicationCovers } from "../data/publicationCovers.js";

export default function Publications() {
  const [activeCover, setActiveCover] = useState(0);
  const activePub = publicationCovers[activeCover];

  return (
    <section
      id="publications"
      data-testid="publications-banner"
      className="grain relative border-b-2 border-sumi bg-paperDeep px-5 py-24 sm:px-8"
    >
      <div className="relative mx-auto max-w-4xl">
        <PlateHeading slug="THE ZINE RACK" title="Publications" plate="E" />

        <div className="crops relative mb-6 border-2 border-sumi bg-paper py-6">
          <span className="crops-b" aria-hidden="true" />
          <CoverflowGallery slides={publicationCovers} onActiveChange={setActiveCover} />
          {activePub && (
            <div className="mx-auto mt-5 max-w-2xl px-5 text-center">
              <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-sumi">
                {activePub.title}
              </h3>
              {activePub.venue && (
                <p className="mt-1 font-mono text-sm text-riso-blue">{activePub.venue}</p>
              )}
              {activePub.description && (
                <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-sumi/80">
                  {activePub.description}
                </p>
              )}
            </div>
          )}
        </div>

        {/* the full catalogue, printed as a stamped index */}
        <ol className="border-t-2 border-sumi">
          {publications.map((pub, index) => (
            <Reveal
              as="li"
              key={pub.id}
              delay={index * 0.03}
              className="group flex gap-4 border-b-2 border-sumi py-5"
            >
              <span className="slug shrink-0 pt-1 text-sumi/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-sumi underline-offset-4 transition-colors hover:text-riso-pink hover:underline"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-sumi">
                    {pub.title}
                  </h3>
                )}
                <p className="mt-1 font-mono text-sm text-riso-blue">{pub.venue}</p>
                {pub.description && (
                  <p className="mt-2 text-sm leading-relaxed text-sumi/80">{pub.description}</p>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
