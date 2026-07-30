import { motion } from 'framer-motion';
import { pageTransitionVariants } from '../../animations/transitions';

export const PageTransition = ({ children, className = '' }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
