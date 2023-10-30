export const flashAnimationVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 0.1, 0.4, 1, 0.2, 0.1, 0.4, 0.8, 1],
  },
};

export const staggerChildernVariants = (delay?: number) => ({
  initial: {},
  animate: {
    transition: {
      delay,
      staggerChildren: 0.2,
      delayChildren: 0.1,
      staggerDirection: -1,
    },
  },
});

export const lineAnimationVariants = {
  animate: (direction: string) => ({
    y:
      direction === "upwards"
        ? [0, -200, -400, -600, -800, -1000]
        : [0, 200, 400, 600, 800, 1000],
    transition: {
      type: "linear",
      times: [0, 0.2, 0.4, 0.6, 0.9, 1],
      duration: 20,
      repeat: Infinity,
      delay: 1.5,
    },
  }),
};

export const floatingAnimationVariants = (delay?: number) => ({
  initial: {
    y: [-20, 20, -20],
    rotate: 0,
    transition: {
      delay,
      duration: 4,
      repeat: Infinity,
    },
  },
});

export const textContainer = (delaysec?: number) => ({
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: i * 0.1,
      delay: delaysec,
    },
  }),
});

export const textVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const peekInVariants = (delay?: number) => ({
  initial: {
    opacity: 0,
    y: -60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay,
    },
  },
});

export const peekDownVariants = (delay?: number) => ({
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay,
    },
  },
});

export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};
