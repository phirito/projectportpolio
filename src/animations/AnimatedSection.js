import React from 'react';
import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { 
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.6 // Increased duration
    }
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0, // Increased duration
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.6 // Increased duration
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