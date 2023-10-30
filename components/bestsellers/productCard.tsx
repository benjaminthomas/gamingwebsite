import { products } from "@/lib/data";
import { peekInVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type ProductCardProps = (typeof products)[number] & {
  onsale?: string;
  index: number;
};

export default function ProductCard({
  price,
  productname,
  image,
  onsale,
  index,
}: ProductCardProps) {
  return (
    <motion.div
      className="rounded bg-black/20 overflow-hidden shadow-lg"
      variants={peekInVariants(index * 0.3)}
    >
      <div className="relative">
        {onsale && (
          <span className="absolute top-3 right-0 text-sm text-white bg-orange px-2 py-1">
            {onsale}
          </span>
        )}
        <Image
          src={image}
          width={500}
          height={333}
          alt="PS5"
          className="w-full h-[200px] object-cover"
        />
      </div>
      <div className="px-6 py-4">
        <span className="font-semibold text-lg inline-block text-white">
          {productname}
        </span>
        <p className="text-gray-500 text-sm">{price}</p>
      </div>
    </motion.div>
  );
}
