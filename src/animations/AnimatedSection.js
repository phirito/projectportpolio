import React from 'react';
import { motion } from 'framer-motion';

export const topSectionTransition = { duration: 0.75, ease: "easeInOut" };

const defaultVariants = {
  hidden: { 
    opacity: 0,
    y: 100,
    transition: {
      duration: 1.0, // Matches the top-section duration
      delay: 0.2 // Add slight delay for synchronization
    }
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5, // Matches the top-section duration
      ease: "easeOut",
      delay: 0.2 // Add slight delay for synchronization
    }
  },
  exit: { 
    opacity: 0,
    y: 100,
    transition: {
      duration: 1.0, // Matches the top-section duration
      delay: 0.2 // Add slight delay for synchronization
    }
  }
};

const AnimatedSection = ({ children, className, customVariants }) => {
  // Use the provided custom variants or fall back to default
  const variants = customVariants || defaultVariants;
  
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;