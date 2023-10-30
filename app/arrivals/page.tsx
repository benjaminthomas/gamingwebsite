"use client";
import Product from "@/components/arrivals/product";
import PageTransisition from "@/components/pageTransition";
import { products } from "@/lib/data";
import { peekInVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Arrivals() {
  return (
    <PageTransisition>
      <div className="flex flex-col h-full justify-center max-w-5xl mx-auto px-4">
        <div className="grid grid-rows-[repeat(5,auto)] md:grid-cols-3 md:grid-rows-2 relative z-10 justify-center bg-gradientGray">
          <div className="md:row-span-2 p-12 border border-white/10 flex flex-col justify-center">
            <motion.h1
              variants={peekInVariants(0.2)}
              className="text-lg text-orange font-semibold tracking-widest uppercase relative z-10 text-center"
            >
              <span className="bg-orange px-3 py-1 text-white inline-block rounded-sm">
                New Arrivals
              </span>
            </motion.h1>
            <motion.div className="mt-8" variants={peekInVariants(0.3)}>
              <Image
                src="/images/ps5.jpg"
                width={500}
                height={333}
                alt="PS5"
                className="max-w-[100%] p-2 outline outline-orange rounded-sm"
              />
            </motion.div>
            <motion.p
              variants={peekInVariants(0.5)}
              className="text-lg uppercase mt-10 text-white font-semibold text-center"
            >
              The all new <span className="text-orange">PS5</span>
            </motion.p>
          </div>
          {products.map((product, index) => (
            <React.Fragment key={index}>
              <Product {...product} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </PageTransisition>
  );
}
