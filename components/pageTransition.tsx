"use client";
import { pageTransitionVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

type PageTransitionProps = {
  children: React.ReactNode;
  styles?: string;
};

export default function PageTransisition({
  children,
  styles,
}: PageTransitionProps) {
  return (
    <motion.section
      className={`relative flex-1 h-full flex flex-col ${styles}`}
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="bg-gradientGray h-full">{children}</div>
    </motion.section>
  );
}
