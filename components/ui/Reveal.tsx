import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Stretch to the parent's height, e.g. so cards in a grid row line up. */
  fill?: boolean;
}

/**
 * Fades content up the first time it scrolls into view.
 * Always renders the same motion element so server HTML and client hydration match;
 * reduced motion only removes the movement and duration.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className,
  fill = false,
}) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={fill ? { height: "100%" } : undefined}
      initial={{ opacity: 0, y: reduce ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
