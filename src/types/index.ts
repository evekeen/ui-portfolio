export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'enterprise' | 'mobile' | 'embedded' | 'ai';
}

export interface IndustrialTheme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    error: string;
    warning: string;
    success: string;
  };
  typography: {
    scale: 'compact' | 'standard' | 'large' | 'extra-large';
    fontFamily: string;
  };
  components: {
    buttonStyle: 'flat' | 'raised' | 'outlined' | 'glass';
    cardLayout: 'compact' | 'spacious' | 'grid' | 'list';
    dataDisplay: 'numeric' | 'graph' | 'gauge' | 'progress';
  };
}

export interface MeasurementData {
  id: string;
  label: string;
  value: number;
  unit: string;
  tolerance: {
    min: number;
    max: number;
  };
  status: 'normal' | 'warning' | 'error';
  trend: number[];
}

export interface StyleToggleConfig {
  buttonStyles: Array<{
    id: string;
    name: string;
    className: string;
  }>;
  cardLayouts: Array<{
    id: string;
    name: string;
    className: string;
  }>;
  colorThemes: Array<{
    id: string;
    name: string;
    colors: Record<string, string>;
  }>;
  typographyScales: Array<{
    id: string;
    name: string;
    scale: number;
  }>;
  dataDisplays: Array<{
    id: string;
    name: string;
    component: 'Numeric' | 'Graph' | 'Gauge' | 'Progress';
  }>;
}