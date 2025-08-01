import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type IndustrialTheme } from '../types';

interface ThemeContextType {
  currentTheme: IndustrialTheme;
  updateTheme: (updates: Partial<IndustrialTheme>) => void;
  resetTheme: () => void;
  presetConfigs: Record<string, IndustrialTheme>;
  applyPreset: (presetId: string) => void;
}

const defaultTheme: IndustrialTheme = {
  id: 'default',
  name: 'Default',
  colors: {
    primary: '#2563eb',
    secondary: '#64748b',
    accent: '#0ea5e9',
    background: '#ffffff',
    text: '#1f2937',
    error: '#dc2626',
    warning: '#f59e0b',
    success: '#10b981',
  },
  typography: {
    scale: 'compact',
    fontFamily: 'Inter',
  },
  components: {
    buttonStyle: 'raised',
    cardLayout: 'spacious',
    dataDisplay: 'numeric',
  },
};

const presetConfigs: Record<string, IndustrialTheme> = {
  'default': {
    id: 'default',
    name: 'Default',
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      accent: '#0ea5e9',
      background: '#ffffff',
      text: '#1f2937',
      error: '#dc2626',
      warning: '#f59e0b',
      success: '#10b981',
    },
    typography: {
      scale: 'compact',
      fontFamily: 'Inter',
    },
    components: {
      buttonStyle: 'raised',
      cardLayout: 'spacious',
      dataDisplay: 'numeric',
    },
  },
  'factory-floor': {
    id: 'factory-floor',
    name: 'Factory Floor',
    colors: {
      primary: '#dc2626',
      secondary: '#374151',
      accent: '#f59e0b',
      background: '#111827',
      text: '#f9fafb',
      error: '#fca5a5',
      warning: '#fbbf24',
      success: '#34d399',
    },
    typography: {
      scale: 'extra-large',
      fontFamily: 'JetBrains Mono',
    },
    components: {
      buttonStyle: 'raised',
      cardLayout: 'compact',
      dataDisplay: 'gauge',
    },
  },
  'control-room': {
    id: 'control-room',
    name: 'Control Room',
    colors: {
      primary: '#3b82f6',
      secondary: '#6b7280',
      accent: '#06b6d4',
      background: '#f8fafc',
      text: '#1e293b',
      error: '#ef4444',
      warning: '#f97316',
      success: '#22c55e',
    },
    typography: {
      scale: 'large',
      fontFamily: 'Inter',
    },
    components: {
      buttonStyle: 'outlined',
      cardLayout: 'grid',
      dataDisplay: 'graph',
    },
  },
  'mobile-inspection': {
    id: 'mobile-inspection',
    name: 'Mobile Inspection',
    colors: {
      primary: '#7c3aed',
      secondary: '#64748b',
      accent: '#ec4899',
      background: '#ffffff',
      text: '#374151',
      error: '#f87171',
      warning: '#fbbf24',
      success: '#4ade80',
    },
    typography: {
      scale: 'compact',
      fontFamily: 'Inter',
    },
    components: {
      buttonStyle: 'flat',
      cardLayout: 'list',
      dataDisplay: 'progress',
    },
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<IndustrialTheme>(() => {
    const saved = localStorage.getItem('industrial-theme');
    if (saved) {
      const parsedTheme = JSON.parse(saved);
      // Check if this is an old theme without the updated defaults
      const version = localStorage.getItem('theme-version');
      if (version !== '2.0') {
        localStorage.removeItem('industrial-theme');
        localStorage.setItem('theme-version', '2.0');
        return defaultTheme;
      }
      return parsedTheme;
    }
    localStorage.setItem('theme-version', '2.0');
    return defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem('industrial-theme', JSON.stringify(currentTheme));
  }, [currentTheme]);

  const updateTheme = (updates: Partial<IndustrialTheme>) => {
    setCurrentTheme(prev => ({
      ...prev,
      ...updates,
      colors: { ...prev.colors, ...updates.colors },
      typography: { ...prev.typography, ...updates.typography },
      components: { ...prev.components, ...updates.components },
    }));
  };

  const resetTheme = () => {
    setCurrentTheme(defaultTheme);
  };

  const applyPreset = (presetId: string) => {
    const preset = presetConfigs[presetId];
    if (preset) {
      setCurrentTheme(preset);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        updateTheme,
        resetTheme,
        presetConfigs,
        applyPreset,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};