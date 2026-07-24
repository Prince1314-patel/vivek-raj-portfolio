import { motion } from "framer-motion";

// The "print pull": the sheet drops into registration — a short offset settle
// with an ink-split that resolves. Authored once here, reused by every plate.
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 26, x: -6, filter: "blur(1px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
