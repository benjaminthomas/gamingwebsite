import { peekInVariants, staggerChildernVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

type PeakRightInProps = {
  title: string;
  textStyles: string;
  delay?: number;
};

export function PeakRightIn({
  title,
  textStyles,
  delay = 0,
}: PeakRightInProps) {
  return (
    <motion.div variants={staggerChildernVariants(delay)}>
      <motion.p
        variants={peekInVariants(delay)}
        className={textStyles}
        initial="hidden"
        animate="animate"
      >
        {title}
      </motion.p>
    </motion.div>
  );
}
