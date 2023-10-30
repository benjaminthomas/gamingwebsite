"use client";
import React from "react";
import Brand from "../topnavigation/brand";
import Link from "next/link";
import { motion } from "framer-motion";
import { peekInVariants } from "@/utils/motion";

export default function Footer() {
  return (
    <motion.footer className="bg-gradientGray py-4 px-14 border-t border-white/10">
      <motion.div
        className="flex flex-col justify-center flex-wrap"
        variants={peekInVariants(2)}
        initial="initial"
        animate="animate"
      >
        <div className="flex items-center justify-center gap-3 md:justify-between flex-col md:flex-row">
          <Brand />
          <small className="block text-white text-xs">
            &copy; {new Date().getFullYear()}
            {""} Benjamin. All rights reserved.
          </small>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/"
              className="text-white/80 hover:text-white transition"
            >
              Privacy policy
            </Link>
            <Link
              href="/"
              className="text-white/80 hover:text-white transition"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
