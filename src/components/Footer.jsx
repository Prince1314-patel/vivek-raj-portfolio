import SocialLinks from "./SocialLinks.jsx";
import { siteInfo } from "../data/siteInfo.js";

export default function Footer() {
  return (
    <footer className="border-t-2 border-sumi bg-sumi px-5 py-10 text-paper sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-3xl font-black uppercase leading-none tracking-poster">
              Vivek<span className="text-riso-pink">Raj</span>
            </p>
            <p className="slug mt-2 text-paper/55">
              Hand-pulled · 3 inks · {new Date().getFullYear()}
            </p>
          </div>
          <SocialLinks />
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-paper/20 pt-5">
          <p className="slug text-paper/45">COLOPHON — Big Shoulders · Familjen Grotesk · Overpass Mono</p>
          <p className="slug text-paper/45">© {new Date().getFullYear()} {siteInfo.name}</p>
        </div>
      </div>
    </footer>
  );
}
