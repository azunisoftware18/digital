/**
 * Reusable Framer Motion transitions and spring physics configs.
 */

export const springSmooth = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 0.5,
};

export const springBouncy = {
  type: 'spring',
  stiffness: 300,
  damping: 15,
};

export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
