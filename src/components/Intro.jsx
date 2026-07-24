import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteInfo } from "../data/siteInfo.js";

// The press pulls the sheet: three ink layers slam down out of registration,
// snap into place, then the whole sheet lifts off the drum. Dismissal uses the
// proven return-null pattern; the lift is a plain animate, no AnimatePresence.
export default function Intro() {
  const [visible, setVisible] = useState(true);
  const [lifting, setLifting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLifting(true), 1900);
    const t2 = setTimeout(() => setVisible(false), 2550);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  const layer = (color, dx, dy, delay) => ({
    initial: { opacity: 0, x: dx, y: dy },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
    style: { color },
  });

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: lifting ? "-100%" : 0 }}
      transition={{ duration: 0.65, ease: [0.7, 0, 0.84, 0] }}
      className="grain fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-paper"
    >
      <p className="slug absolute left-1/2 top-8 -translate-x-1/2 text-sumi/60">
        NOW PRINTING · 3 INKS · 1 PASS
      </p>

      <div className="relative text-center">
        <motion.h1
          {...layer("#EC2A78", -18, -10, 0.05)}
          className="absolute inset-0 font-display text-6xl font-black uppercase leading-none tracking-poster mix-blend-multiply sm:text-8xl"
        >
          {siteInfo.name}
        </motion.h1>
        <motion.h1
          {...layer("#2340E0", 16, 8, 0.18)}
          className="absolute inset-0 font-display text-6xl font-black uppercase leading-none tracking-poster mix-blend-multiply sm:text-8xl"
        >
          {siteInfo.name}
        </motion.h1>
        <motion.h1
          {...layer("#181309", 0, 0, 0.32)}
          className="relative font-display text-6xl font-black uppercase leading-none tracking-poster sm:text-8xl"
        >
          {siteInfo.name}
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 font-display text-lg uppercase tracking-tight text-sumi/70"
      >
        {siteInfo.title}
      </motion.p>
    </motion.div>
  );
}
