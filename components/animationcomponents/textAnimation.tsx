"use client";
import { peekInVariants, textContainer, textVariant } from "@/utils/motion";
import { MotionProps, motion } from "framer-motion";

interface TypingTextProps {
  title: string;
  textStyles?: string;
}

interface PeakInProps extends TypingTextProps, MotionProps {
  delay?: number;
}

export function TypingText({ title, textStyles }: TypingTextProps) {
  return (
    <motion.p
      variants={textContainer()}
      initial="hidden"
      animate="show"
      className={`${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}

export function PeekIn({ title, textStyles, delay = 0 }: PeakInProps) {
  return (
    <motion.p
      variants={peekInVariants(delay)}
      initial="initial"
      animate="animate"
      className={`${textStyles}`}
    >
      {title}
    </motion.p>
  );
}
