import React, { type ButtonHTMLAttributes } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface IndustrialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  styleOverride?: 'modern' | 'industrial' | 'glass' | 'neon';
}

export const IndustrialButton: React.FC<IndustrialButtonProps> = ({
  children,
  variant = 'primary',
  styleOverride,
  className = '',
  ...props
}) => {
  const { currentTheme } = useTheme();
  
  const getButtonStyles = () => {
    const { buttonStyle } = currentTheme.components;
    const scale = currentTheme.typography.scale;
    const effectiveStyle = styleOverride || buttonStyle;
    
    const scaleClasses = {
      compact: 'px-3 py-2 text-sm',
      standard: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg',
      'extra-large': 'px-8 py-4 text-xl',
    };
    
    // Style-specific base classes
    const styleClasses = {
      modern: 'rounded-xl border-none shadow-md hover:shadow-lg transform hover:scale-105',
      industrial: 'rounded border-2 shadow-inner bg-gradient-to-b from-gray-300 to-gray-400 text-gray-800',
      glass: 'rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-xl',
      neon: 'rounded-lg border-2 shadow-lg hover:shadow-2xl hover:shadow-current/50',
      flat: 'border-none rounded-md',
      raised: 'shadow-lg hover:shadow-xl rounded-md',
      outlined: 'border-2 bg-transparent rounded-md',
      glassmorphism: 'backdrop-blur-sm border border-white/20 rounded-lg'
    };
    
    const baseClasses = `font-semibold transition-all duration-200 ${scaleClasses[scale]} ${styleClasses[effectiveStyle] || styleClasses.flat}`;
    
    const getVariantColors = () => {
      if (effectiveStyle === 'industrial') {
        return {
          primary: 'border-gray-600 hover:bg-gray-500 hover:text-white',
          secondary: 'border-gray-500 hover:bg-gray-400',
          danger: 'border-red-700 bg-gradient-to-b from-red-400 to-red-500 text-white hover:from-red-500 hover:to-red-600'
        };
      }
      
      if (effectiveStyle === 'neon') {
        return {
          primary: 'border-cyan-400 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500',
          secondary: 'border-purple-400 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500',
          danger: 'border-red-400 bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-500 hover:to-orange-500'
        };
      }
      
      if (effectiveStyle === 'glass') {
        return {
          primary: 'text-blue-800 hover:bg-white/30',
          secondary: 'text-purple-800 hover:bg-white/30',
          danger: 'text-red-800 hover:bg-white/30'
        };
      }
      
      // Modern and default styles
      return {
        primary: effectiveStyle === 'outlined' 
          ? `border-[${currentTheme.colors.primary}] text-[${currentTheme.colors.primary}] hover:bg-[${currentTheme.colors.primary}] hover:text-white`
          : `bg-[${currentTheme.colors.primary}] text-white hover:opacity-90`,
        secondary: effectiveStyle === 'outlined'
          ? `border-[${currentTheme.colors.secondary}] text-[${currentTheme.colors.secondary}] hover:bg-[${currentTheme.colors.secondary}] hover:text-white`
          : `bg-[${currentTheme.colors.secondary}] text-white hover:opacity-90`,
        danger: effectiveStyle === 'outlined'
          ? `border-[${currentTheme.colors.error}] text-[${currentTheme.colors.error}] hover:bg-[${currentTheme.colors.error}] hover:text-white`
          : `bg-[${currentTheme.colors.error}] text-white hover:opacity-90`,
      };
    };
    
    const variantClasses = getVariantColors();
    return `${baseClasses} ${variantClasses[variant]}`;
  };
  
  const getInlineStyles = () => {
    const effectiveStyle = styleOverride || currentTheme.components.buttonStyle;
    
    // For special styles, don't override with theme colors
    if (['industrial', 'neon', 'glass'].includes(effectiveStyle)) {
      return {
        fontFamily: currentTheme.typography.fontFamily,
      };
    }
    
    // Default theme-based styling
    return {
      backgroundColor: effectiveStyle === 'outlined' ? 'transparent' : 
        variant === 'primary' ? currentTheme.colors.primary :
        variant === 'secondary' ? currentTheme.colors.secondary :
        currentTheme.colors.error,
      borderColor: effectiveStyle === 'outlined' ? 
        (variant === 'primary' ? currentTheme.colors.primary :
         variant === 'secondary' ? currentTheme.colors.secondary :
         currentTheme.colors.error) : 'transparent',
      color: effectiveStyle === 'outlined' ? 
        (variant === 'primary' ? currentTheme.colors.primary :
         variant === 'secondary' ? currentTheme.colors.secondary :
         currentTheme.colors.error) : 'white',
      fontFamily: currentTheme.typography.fontFamily,
    };
  };

  return (
    <button
      className={`${getButtonStyles()} ${className}`}
      style={getInlineStyles()}
      {...props}
    >
      {children}
    </button>
  );
};