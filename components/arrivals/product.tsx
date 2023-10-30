import { products } from "@/lib/data";
import { flashAnimationVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type ProductProps = (typeof products)[number];

export default function Product({
  productfrom,
  price,
  productname,
  image,
}: ProductProps) {
  return (
    <motion.div
      variants={flashAnimationVariants}
      transition={{ delay: 1 }}
      className="flex justify-center items-center md:items-stretch flex-col md:flex-row md:justify-between border border-white/10 md:min-h-[240px] p-8 md:p-0"
    >
      <div className="flex flex-col-reverse md:flex-col justify-center md:justify-between md:p-4">
        <div className="flex flex-col">
          <span className="text-white uppercase text-xs">{productfrom}</span>
          <span className="text-orange font-bold uppercase text-xs">
            {price}
          </span>
        </div>
        <div className="text-white relative text-center md:text-left">
          <span className="text-4xl absolute opacity-10 bottom-0 z-[1] hidden md:block md:whitespace-nowrap">
            {productname}
          </span>
          <a
            title={productname}
            className="text-xl text-center block mb-1 md:whitespace-nowrap text-ellipsis"
          >
            {productname}
          </a>
        </div>
      </div>
      <div className="relative z-[2] flex items-end">
        <Image
          src={image}
          width={500}
          height={333}
          alt="PS5"
          className="max-h-[160px] mt-8 md:mt-0 md:max-h-[initial] md:h-[calc(100%-20px)] md:w-[180px] object-cover rounded-sm"
        />
      </div>
    </motion.div>
  );
}
