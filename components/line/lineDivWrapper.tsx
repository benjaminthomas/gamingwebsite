import { floatingAnimationVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

type LineDivWrapperProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function LineDivWrapper({
  children,
  delay,
}: LineDivWrapperProps) {
  return (
    <motion.div
      animate="initial"
      variants={floatingAnimationVariants(delay)}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
