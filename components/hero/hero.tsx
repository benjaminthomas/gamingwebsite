"use client";
import Image from "next/image";
import React from "react";
import { PeekIn, TypingText } from "../animationcomponents/textAnimation";
import { motion } from "framer-motion";
import { peekInVariants } from "@/utils/motion";

export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-b from-white/10 to-black/10 absolute inset-0 z-[2]" />
      <div className="relative flex flex-col justify-between max-w-full xl:w-[1280px] mx-auto py-20 h-full z-[3] flex-1">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl text-orange font-extrabold uppercase">
            <TypingText title="The Gaming" />
          </h1>
          <PeekIn
            title="Beast"
            delay={1}
            textStyles="text-[170px] font-extrabold bg-gradient-to-b from-orange/60 from-20% to-black/0 to-70%  bg-clip-text uppercase tracking-widest leading-none text-transparent"
          />
          <motion.div
            variants={peekInVariants(1.2)}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/images/gamingcomputer.png"
              width={500}
              height={500}
              alt="Gaming computer"
              quality={95}
              className="max-w-[100%] -mt-24"
            />
          </motion.div>
        </div>
        <motion.div
          className="flex justify-around items-center mt-8 md:mt-0 md:items-start gap-12 flex-col md:flex-row"
          initial="initial"
          whileInView="animate"
        >
          <motion.div
            className="relative text-orange font-bold p-3"
            variants={peekInVariants(1.9)}
            key="1"
          >
            <div className="absolute top-0 left-0 w-[30px] h-[30px] border-orange m-auto border-b-1 border-r-1 border-t-2 border-l-2 border-b-transparent border-r-transparent"></div>
            <h3 className="text-2xl">
              250 <span className="text-white text-sm uppercase">hz</span>
            </h3>
            <div className="absolute bottom-0 right-0 w-[30px] h-[30px] border-orange m-auto border-b-2 border-r-2 border-t-1 border-l-2 border-t-transparent border-l-transparent"></div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            variants={peekInVariants(1.7)}
            key="2"
          >
            <h3 className="text-2xl text-orange uppercase font-bold tracking-widest">
              Ultimate
            </h3>
            <small className="text-white text-sm uppercase tracking-tight text-center">
              Gaming experience
            </small>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            variants={peekInVariants(1.5)}
            key="3"
          >
            <h3 className="text-2xl text-orange uppercase font-bold tracking-widest">
              Enhanced
            </h3>
            <small className="text-white text-sm uppercase tracking-tight text-center">
              Cooling system
            </small>
          </motion.div>
          <motion.div
            className="relative font-bold p-3"
            variants={peekInVariants(1.3)}
            key="4"
          >
            <div className="absolute top-0 left-0 w-[30px] h-[30px] border-orange m-auto border-b-1 border-r-1 border-t-2 border-l-2 border-b-transparent border-r-transparent"></div>
            <h3 className="text-2xl text-white">
              RTX <span className="text-orange">4090</span>
            </h3>
            <div className="absolute bottom-0 right-0 w-[30px] h-[30px] border-orange m-auto border-b-2 border-r-2 border-t-1 border-l-2 border-t-transparent border-l-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
