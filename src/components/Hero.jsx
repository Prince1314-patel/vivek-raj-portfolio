import Reveal from "./Reveal.jsx";
import SocialLinks from "./SocialLinks.jsx";
import { siteInfo } from "../data/siteInfo.js";
import profileHeadshot from "../assets/photos/profile-headshot.jpg";
import bannerA from "../assets/photos/banner-a.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 px-6 overflow-hidden">
      <div
        data-testid="hero-banner"
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerA})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink to-ink"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <Reveal>
          <p className="uppercase tracking-[0.3em] text-gold text-xs mb-6">
            [ {siteInfo.title} ]
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight mb-6">
            Hello, I&apos;m {siteInfo.name.split(" ")[0]}
          </h1>
          <p className="text-muted max-w-xl mb-8">{siteInfo.bio}</p>
          <SocialLinks />
        </Reveal>
        <Reveal delay={0.15}>
          <img
            src={profileHeadshot}
            alt={siteInfo.name}
            className="rounded-2xl border border-border w-full max-w-sm mx-auto"
          />
        </Reveal>
      </div>
    </section>
  );
}
