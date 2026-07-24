import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import { siteInfo } from "../data/siteInfo.js";

const WhatsAppIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.868 1.533c-1.493.821-2.712 1.993-3.556 3.355-1.168 1.885-1.8 4.045-1.8 6.315 0 2.289.632 4.449 1.8 6.334 1.169 1.885 2.817 3.355 4.811 4.176 1.993.821 4.183 1.231 6.373 1.231 2.19 0 4.38-.41 6.373-1.231 1.993-.821 3.642-2.291 4.811-4.176 1.168-1.885 1.8-4.045 1.8-6.334 0-2.289-.632-4.449-1.8-6.334a9.87 9.87 0 00-9.184-5.309zm0-1.231A11.097 11.097 0 0112 1c6.127 0 11.1 4.973 11.1 11.1S18.127 23.2 12 23.2 .9 18.227.9 12.1 5.873 0 12 0z" />
  </svg>
);

const ICONS = [
  { key: "linkedin", Icon: Linkedin, href: siteInfo.social.linkedin, label: "LinkedIn" },
  { key: "facebook", Icon: Facebook, href: siteInfo.social.facebook, label: "Facebook" },
  { key: "twitter", Icon: Twitter, href: siteInfo.social.twitter, label: "Twitter" },
  { key: "instagram", Icon: Instagram, href: siteInfo.social.instagram, label: "Instagram" },
  { key: "whatsapp", Icon: WhatsAppIcon, href: siteInfo.social.whatsapp, label: "WhatsApp" },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {ICONS.map(({ key, Icon, href, label }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center border-2 border-current text-current transition-all hover:border-riso-pink hover:bg-riso-pink hover:text-sumi"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
