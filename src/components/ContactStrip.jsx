import { Phone, Mail, MapPin } from "lucide-react";
import { siteInfo } from "../data/siteInfo.js";

const ITEMS = [
  { Icon: Phone, label: "Phone", value: siteInfo.phone },
  { Icon: Mail, label: "Email", value: siteInfo.email },
  { Icon: MapPin, label: "Location", value: siteInfo.location },
];

export default function ContactStrip() {
  return (
    <section className="border-y border-border px-6 py-6">
      <div className="mx-auto max-w-6xl flex flex-wrap gap-8 justify-center text-sm">
        {ITEMS.map(({ Icon, label, value }) => (
          <div key={label} className="flex items-center gap-2 text-muted">
            <Icon size={16} className="text-gold" />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
