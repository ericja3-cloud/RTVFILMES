import { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: any;
  y?: number;
  duration?: number;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  y = 30,
  duration = 0.8,
}: RevealProps) {
  const MotionTag = motion(as);

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom spring-like premium easing
      }}
    >
      {children}
    </MotionTag>
  );
}