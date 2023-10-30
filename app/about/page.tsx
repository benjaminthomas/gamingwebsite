"use client";
import PageTransisition from "@/components/pageTransition";
import { peekInVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <PageTransisition>
      <div className="h-full flex justify-center gap-6 max-w-5xl mx-auto px-4 flex-wrap">
        <div className="relative flex-1 py-20 flex flex-col justify-center">
          <motion.span
            variants={peekInVariants(0.5)}
            className="text-center lg:text-left text-[170px] font-extrabold bg-gradient-to-b from-white from-20% to-black/0 to-60% bg-clip-text uppercase tracking-widest leading-none text-transparent relative z-10"
          >
            01
          </motion.span>
          <motion.h1
            variants={peekInVariants(0.7)}
            className="text-4xl text-orange font-extrabold tracking-widest uppercase relative -top-[60px] text-center lg:text-left"
          >
            About <span className="text-white">us</span>
          </motion.h1>
          <motion.p
            variants={peekInVariants(0.9)}
            className="text-white -mt-[40px] text-center lg:text-left"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi
            quis eleifend quam adipiscing.
          </motion.p>
          <motion.div
            variants={peekInVariants(1.2)}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <div className="flex flex-col items-center text-center gap-2 max-w-[120px]">
              <h2 className="text-orange text-4xl uppercase font-bold">1k+</h2>
              <small className="text-sm tracking-wide uppercase text-white flex-wrap">
                Satisfied customers
              </small>
            </div>
            <div className="flex flex-col items-center text-center gap-2 max-w-[120px]">
              <h2 className="text-orange text-4xl uppercase font-bold">S+</h2>
              <small className="text-sm tracking-wide uppercase text-white flex-wrap">
                Verified ratings
              </small>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="relative text-orange flex-1 self-end"
          variants={peekInVariants(0.3)}
        >
          <Image
            src="/images/vr.png"
            width={800}
            height={872}
            alt="Person with VR headset"
            className="relative z-10 max-w-[600px] md:saturate-50 hover:saturate-150"
          />
        </motion.div>
      </div>
    </PageTransisition>
  );
}
