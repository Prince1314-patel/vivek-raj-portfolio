import { Phone, Mail, MapPin } from "lucide-react";
import { siteInfo } from "../data/siteInfo.js";

const ITEMS = [
  { Icon: Phone, label: "TEL", value: siteInfo.phone },
  { Icon: Mail, label: "MAIL", value: siteInfo.email },
  { Icon: MapPin, label: "STUDIO", value: siteInfo.location },
];

export default function ContactStrip() {
  return (
    <section className="border-y-2 border-sumi bg-riso-blue text-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-stretch divide-sumi/30 sm:divide-x-2">
        {ITEMS.map(({ Icon, label, value }) => (
          <div
            key={label}
            className="flex flex-1 items-center gap-3 px-5 py-4 sm:px-8"
          >
            <Icon size={18} className="shrink-0 text-riso-yellow" />
            <div className="leading-tight">
              <p className="slug text-paper/60">{label}</p>
              <p className="font-mono text-sm text-paper">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
