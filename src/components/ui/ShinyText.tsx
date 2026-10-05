'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ShinyTextProps {
  text: string;
  className?: string;
  speed?: number;
  baseColor?: string;
  shineColor?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  className = '',
  speed = 3,
  baseColor = '#64CEFB',
  shineColor = '#ffffff',
}) => {
  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(100deg, ${baseColor} 0%, ${baseColor} 30%, ${shineColor} 50%, ${baseColor} 70%, ${baseColor} 100%)`,
        backgroundSize: '250% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      animate={{
        backgroundPosition: ['100% 0%', '-100% 0%'],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
