import SocialLinks from "./SocialLinks.jsx";
import { siteInfo } from "../data/siteInfo.js";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} {siteInfo.name}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
