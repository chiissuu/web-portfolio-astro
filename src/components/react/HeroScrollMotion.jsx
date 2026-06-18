import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function HeroScrollMotion({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);
  const scale = useTransform(scrollYProgress, [0, 0.85], [1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 0.85], [0, 80]);
  const blur = useTransform(scrollYProgress, [0, 0.85], ["blur(0px)", "blur(6px)"]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        y,
        filter: blur,
        transformOrigin: "center top",
      }}
    >
      {children}
    </motion.div>
  );
}