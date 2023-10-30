"use client";
import { motion } from "framer-motion";
import React from "react";
import LineDivWrapper from "./lineDivWrapper";
import {
  staggerChildernVariants,
  flashAnimationVariants,
} from "@/utils/motion";

export default function Lines() {
  return (
    <motion.div
      className="absolute inset-0 hidden justify-between max-w-7xl mx-auto z-[1] md:flex"
      initial="initial"
      animate="animate"
      variants={staggerChildernVariants()}
    >
      <motion.div
        key="1"
        variants={flashAnimationVariants}
        className="w-[1px] h-full bg-[#dbdbdb]/10 flex flex-col"
      >
        <LineDivWrapper>
          <span className="absolute w-[6px] bg-orange -ml-[2px] top-[50%] rounded-md h-[220px]"></span>
          <span className="absolute w-[6px] bg-orange -ml-[2px] top-[0%] rounded-md h-[160px]"></span>
        </LineDivWrapper>
      </motion.div>

      <motion.div
        key="2"
        variants={flashAnimationVariants}
        className="w-[1px] h-full bg-[#dbdbdb]/10 flex flex-col"
      >
        <LineDivWrapper delay={1}>
          <span className="absolute w-[6px] bg-orange -ml-[2px] top-[10%] rounded-md h-[140px]"></span>
          <span className="absolute w-[6px] bg-orange -ml-[2px] top-[80%] rounded-md h-[70px]"></span>
        </LineDivWrapper>
      </motion.div>
      <motion.div
        key="3"
        variants={flashAnimationVariants}
        className="w-[1px] h-full bg-[#dbdbdb]/10 flex flex-col"
      >
        <LineDivWrapper delay={1.5}>
          <span className="absolute w-[6px] bg-orange -ml-[2px] top-[0%] rounded-md h-[160px]"></span>
          <span className="absolute w-[6px] bg-orange -ml-[2px] top-[80%] rounded-md h-[65px]"></span>
        </LineDivWrapper>
      </motion.div>
      <motion.div
        key="4"
        variants={flashAnimationVariants}
        className="w-[1px] h-full bg-[#dbdbdb]/10 flex flex-col"
      >
        <LineDivWrapper>
          <span className="absolute w-[6px] bg-orange -ml-[2px] top-[20%] rounded-md h-[120px]"></span>
          <span className="absolute w-[6px] bg-orange -ml-[2px] top-[90%] rounded-md h-[60px]"></span>
        </LineDivWrapper>
      </motion.div>
      <motion.div
        key="5"
        variants={flashAnimationVariants}
        className="w-[1px] h-full bg-[#dbdbdb]/10 flex flex-col"
      >
        <LineDivWrapper delay={2}>
          <span className="absolute w-[6px] bg-orange -ml-[2px] top-[10%] rounded-md h-[140px]"></span>
          <span className="absolute w-[6px] bg-orange -ml-[2px] bottom-0 rounded-md h-[70px]"></span>
        </LineDivWrapper>
      </motion.div>
    </motion.div>
  );
}
