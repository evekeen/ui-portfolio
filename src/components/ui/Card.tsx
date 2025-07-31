import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  onClick
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg p-6 transition-all duration-300 border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-2 hover:shadow-blue-500/10' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};