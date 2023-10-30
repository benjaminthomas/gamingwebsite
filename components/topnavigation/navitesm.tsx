"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
type NavitemsProps = (typeof links)[number];

export default function Navitems({ name, hash }: NavitemsProps) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        className={`relative text-orange p-3 leading-relaxed block ${
          pathname === `${hash}` ? "text-white" : ""
        }`}
        href={hash}
      >
        {pathname === `${hash}` && (
          <motion.span
            layoutId="background"
            className="absolute left-0 top-0 bg-orange z-0 h-full w-full"
            initial={{ top: "-100%" }}
            animate={{ top: "0" }}
            transition={{ duration: 0.5 }}
          ></motion.span>
        )}
        <span className="relative z-10">{name}</span>
      </Link>
    </li>
  );
}
