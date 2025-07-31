import React, { type ButtonHTMLAttributes } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface IndustrialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
}

export const IndustrialButton: React.FC<IndustrialButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const { currentTheme } = useTheme();
  
  const getButtonStyles = () => {
    const { buttonStyle } = currentTheme.components;
    const scale = currentTheme.typography.scale;
    
    const scaleClasses = {
      compact: 'px-3 py-2 text-sm',
      standard: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg',
      'extra-large': 'px-8 py-4 text-xl',
    };
    
    const baseClasses = `font-semibold transition-all duration-200 ${scaleClasses[scale]} ${
      buttonStyle === 'flat' ? 'border-none' :
      buttonStyle === 'raised' ? 'shadow-lg hover:shadow-xl' :
      buttonStyle === 'outlined' ? 'border-2 bg-transparent' :
      'backdrop-blur-sm border border-white/20'
    }`;
    
    const variantClasses = {
      primary: buttonStyle === 'outlined' 
        ? `border-[${currentTheme.colors.primary}] text-[${currentTheme.colors.primary}] hover:bg-[${currentTheme.colors.primary}] hover:text-white`
        : `bg-[${currentTheme.colors.primary}] text-white hover:opacity-90`,
      secondary: buttonStyle === 'outlined'
        ? `border-[${currentTheme.colors.secondary}] text-[${currentTheme.colors.secondary}] hover:bg-[${currentTheme.colors.secondary}] hover:text-white`
        : `bg-[${currentTheme.colors.secondary}] text-white hover:opacity-90`,
      danger: buttonStyle === 'outlined'
        ? `border-[${currentTheme.colors.error}] text-[${currentTheme.colors.error}] hover:bg-[${currentTheme.colors.error}] hover:text-white`
        : `bg-[${currentTheme.colors.error}] text-white hover:opacity-90`,
    };
    
    return `${baseClasses} ${variantClasses[variant]}`;
  };
  
  return (
    <button
      className={`${getButtonStyles()} ${className}`}
      style={{
        backgroundColor: currentTheme.components.buttonStyle === 'outlined' ? 'transparent' : 
          variant === 'primary' ? currentTheme.colors.primary :
          variant === 'secondary' ? currentTheme.colors.secondary :
          currentTheme.colors.error,
        borderColor: currentTheme.components.buttonStyle === 'outlined' ? 
          (variant === 'primary' ? currentTheme.colors.primary :
           variant === 'secondary' ? currentTheme.colors.secondary :
           currentTheme.colors.error) : 'transparent',
        color: currentTheme.components.buttonStyle === 'outlined' ? 
          (variant === 'primary' ? currentTheme.colors.primary :
           variant === 'secondary' ? currentTheme.colors.secondary :
           currentTheme.colors.error) : 'white',
        fontFamily: currentTheme.typography.fontFamily,
      }}
      {...props}
    >
      {children}
    </button>
  );
};