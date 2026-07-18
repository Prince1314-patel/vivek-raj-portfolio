import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import { siteInfo } from "../data/siteInfo.js";

const ICONS = [
  { key: "linkedin", Icon: Linkedin, href: siteInfo.social.linkedin, label: "LinkedIn" },
  { key: "facebook", Icon: Facebook, href: siteInfo.social.facebook, label: "Facebook" },
  { key: "twitter", Icon: Twitter, href: siteInfo.social.twitter, label: "Twitter" },
  { key: "instagram", Icon: Instagram, href: siteInfo.social.instagram, label: "Instagram" },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {ICONS.map(({ key, Icon, href, label }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="text-cream/70 hover:text-gold transition-colors"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
