import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteInfo } from "../data/siteInfo.js";
import GlitterWrap from "./GlitterWrap.jsx";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      className="fixed inset-0 z-[9999] bg-ink flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 w-full h-full">
        <GlitterWrap
          particleCount={400}
          color1="#ffffff"
          color2="#b39ef0"
          color3="#cdd9ff"
          speed={4}
          density={80}
          starSize={15}
          focalDepth={13}
          turbulence={2}
          brightness={80}
          glitterIntensity={4}
          trailAmount={85}
          reverse={false}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center relative z-10"
      >
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-cream mb-4 leading-tight">
          {siteInfo.name}
        </h1>
        <p className="text-muted tracking-[0.2em] uppercase text-xs md:text-sm">
          {siteInfo.title}
        </p>
      </motion.div>
    </motion.div>
  );
}
