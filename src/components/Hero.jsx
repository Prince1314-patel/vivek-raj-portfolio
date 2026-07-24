import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks.jsx";
import { siteInfo } from "../data/siteInfo.js";
import profileHeadshot from "../assets/photos/profile-headshot.jpg";

const INKS = ["#EC2A78", "#2340E0", "#FFD200", "#0FA98F", "#FF6A2B", "#6E2CC4"];

export default function Hero() {
  const first = siteInfo.name.split(" ")[0];
  return (
    <section
      id="top"
      className="crops grain relative min-h-[100svh] overflow-hidden px-5 pt-28 pb-16 sm:px-8"
    >
      <span className="crops-b" aria-hidden="true" />

      {/* vertical CMYK-style ink test strip down the left edge */}
      <div
        data-testid="hero-banner"
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-3 flex-col sm:flex"
      >
        {INKS.map((c) => (
          <div key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>

      {/* job docket, top corner */}
      <div className="slug mb-10 flex items-center justify-between text-sumi/70">
        <span>JOB&nbsp;№&nbsp;VR-01 · HAND-PULLED</span>
        <span className="hidden sm:inline">1 OF 1 · EDITION OPEN</span>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.25fr_0.75fr]">
        {/* ---- Nameplate + statement ---- */}
        <div>
          <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-lg uppercase tracking-tight sm:text-2xl">
            <span className="text-riso-pink">Artist</span>
            <span className="text-sumi/40">/</span>
            <span className="text-riso-blue">Policy</span>
            <span className="text-sumi/40">/</span>
            <span className="text-riso-purple">Journalism</span>
          </p>

          <h1 className="misprint misprint-lg font-display text-[19vw] font-black leading-[0.82] tracking-poster sm:text-[15vw] md:text-[11rem]">
            {first.toUpperCase()}
            <span className="block">RAJ</span>
          </h1>

          <p className="mt-8 max-w-xl border-l-[3px] border-riso-pink pl-4 text-base leading-relaxed text-sumi/90 sm:text-lg">
            I treat policy the way a printer treats ink — layer over layer, until
            the disciplines overlap and something new prints through. Law,
            campaigns, human-rights research and journalism are my materials;
            color, composition and design are how I make them land.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="stamp bg-riso-pink text-sumi transition-transform hover:rotate-0 hover:scale-[1.03]"
            >
              ✦ Commission / Contact
            </a>
            <SocialLinks />
          </div>
        </div>

        {/* ---- Halftone duotone portrait, mis-registered ---- */}
        <motion.div
          initial={{ opacity: 0, x: 24, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          {/* offset pink plate = the misregistration */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 bg-riso-pink" aria-hidden="true" />
          <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-riso-blue mix-blend-multiply" aria-hidden="true" />
          <div className="relative overflow-hidden bg-riso-yellow">
            <img
              src={profileHeadshot}
              alt={siteInfo.name}
              className="w-full mix-blend-multiply [filter:grayscale(1)_contrast(1.35)_brightness(1.05)]"
            />
            <div
              className="pointer-events-none absolute inset-0 halftone-lg text-sumi/60 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <p className="slug mt-2 text-right text-sumi/60">FIG. 1 — SELF, SCREENED IN 3 INKS</p>
        </motion.div>
      </div>

      {/* scroll cue as a color bar */}
      <div className="slug mt-12 flex items-center gap-3 text-sumi/70">
        <span className="reg-target text-sumi/70" aria-hidden="true" />
        <span>SCROLL TO RUN THE SHEET ↓</span>
      </div>
    </section>
  );
}
