"use client";
import React from "react";
import Navbar from "../topnavigation/navbar";
import Brand from "../topnavigation/brand";
import { motion } from "framer-motion";
import { peekDownVariants } from "@/utils/motion";

export default function Header() {
  return (
    <motion.header
      className="flex justify-between items-center px-14 bg-white border-b border-gray-200"
      variants={peekDownVariants()}
      initial="initial"
      animate="animate"
    >
      <Brand />
      <Navbar />
    </motion.header>
  );
}
