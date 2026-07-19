import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { siteInfo } from "../data/siteInfo.js";

const profileImage = "https://pps.whatsapp.net/v/t61.24694-24/645615611_1342790397826509_4830761435135837980_n.jpg?ccb=11-4&oh=01_Q5Aa5AEgNbSlKJnQEaDWZjB3g-ODngvJ6W1AsH4BlVw7Vd6lww&oe=6A602C4F&_nc_sid=5e03e0&_nc_cat=104";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.822 9.822 0 012.893 6.994c-.002 5.45-4.436 9.885-9.886 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.888 11.888 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const message = encodeURIComponent(
    `Hi ${siteInfo.name}, I'd like to get in touch.`
  );
  const chatLink = `${siteInfo.social.whatsapp}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-72 sm:w-80 rounded-2xl border border-border bg-ink shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between bg-[#128C7E] px-4 py-3">
              <div className="flex items-center gap-3">
                <img
                  src={profileImage}
                  alt={siteInfo.name}
                  className="h-9 w-9 rounded-full object-cover bg-white/20"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling?.style.removeProperty('display');
                  }}
                />
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hidden">
                  <WhatsAppIcon className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-medium text-white">{siteInfo.name}</p>
                  <p className="text-xs text-white/80">Typically replies within a day</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-4 py-4">
              <div className="rounded-lg rounded-tl-none bg-white/5 px-3 py-2 text-sm text-cream/90">
                Hi there 👋
                <br />
                How can I help you?
              </div>
            </div>

            <div className="px-4 pb-4">
              <a
                href={chatLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-medium text-ink hover:bg-[#20bd5a] transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.15 }}
            >
              <X size={26} />
            </motion.span>
          ) : (
            <motion.span
              key="icon"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{ duration: 0.15 }}
            >
              <WhatsAppIcon className="h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
