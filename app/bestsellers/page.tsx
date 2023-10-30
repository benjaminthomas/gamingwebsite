"use client";
import ProductCard from "@/components/bestsellers/productCard";
import PageTransisition from "@/components/pageTransition";
import { products } from "@/lib/data";
import { peekInVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function BestSellers() {
  return (
    <PageTransisition>
      <div className="flex flex-col h-full justify-center max-w-5xl mx-auto px-4 relative z-10 py-6">
        <motion.h1
          variants={peekInVariants(0.2)}
          className="text-lg text-orange font-semibold tracking-widest uppercase relative z-10 text-center"
        >
          <span className="bg-orange px-3 py-1 text-white inline-block rounded-sm">
            New Arrivals
          </span>
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-10">
          {products.map((product, index) => (
            <ProductCard {...product} key={index} index={index} />
          ))}
        </div>
      </div>
    </PageTransisition>
  );
}
