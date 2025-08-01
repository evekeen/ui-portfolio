import { type Project } from '../types';

export const projects: Project[] = [
  {
    id: 'enabled-health',
    title: 'Enabled Health AI Trainer',
    subtitle: 'Medical Device UI for Elderly Patients',
    description: 'Built an iOS bedside trainer app integrating computer vision-based engagement tracking and exercise guidance for hospitalized patients. Designed elderly-friendly interface with voice AI integration.',
    technologies: ['Swift', 'SwiftUI', 'Node.js', 'TypeScript', 'Computer Vision', 'Voice AI', 'Firebase'],
    highlights: [
      'Elderly-optimized UI with large buttons and clear typography',
      'Real-time computer vision for exercise form monitoring',
      'Voice AI agent for hands-free patient interaction',
      'Clinical dashboard with key metrics and alerts',
      'Successfully deployed in hospital pilot programs'
    ],
    imageUrl: '/images/enabled-health-preview.jpg',
    category: 'ai'
  },
  {
    id: 'structure-gantt',
    title: 'Structure.Gantt by Tempo',
    subtitle: 'Enterprise Gantt Chart Visualization',
    description: 'Led development of Structure.Gantt supporting 14,000+ active installations. Created complex enterprise-scale React component library with advanced timeline management and dependency visualization.',
    technologies: ['React', 'TypeScript', 'Java', 'Atlassian SDK', 'D3.js', 'Redux'],
    highlights: [
      '14,000+ active enterprise installations',
      'Complex dependency visualization and management',
      'Real-time collaboration and data synchronization',
      'Customizable timeline views and resource allocation',
      'Performance optimization for 100,000+ item datasets'
    ],
    imageUrl: '/images/structure-gantt-preview.jpg',
    websiteUrl: 'https://marketplace.atlassian.com/apps/1217809/gantt-charts-for-structure-ppm-jira-roadmaps-tempo',
    category: 'enterprise'
  },
  {
    id: 'structure-tempo',
    title: 'Structure by Tempo',
    subtitle: 'Jira Portfolio Management Platform',
    description: 'Developed modular React component library for enterprise project portfolio management. Created hierarchical project views and cross-team visualization tools used by 5,000+ organizations.',
    technologies: ['React', 'TypeScript', 'Java', 'Atlassian Connect', 'REST APIs', 'PostgreSQL'],
    highlights: [
      '5,000+ organizations using the platform',
      'Hierarchical project structure management',
      'Excel-like interface with advanced filtering',
      'Real-time data integration with Jira',
      'Component library with 100+ reusable elements'
    ],
    imageUrl: '/images/structure-preview.jpg',
    websiteUrl: 'https://marketplace.atlassian.com/apps/34717/structure-by-tempo-jira-portfolio-management-ppm',
    category: 'enterprise'
  },
  {
    id: 'ace-trace',
    title: 'Ace Trace - Golf Shot Tracing',
    subtitle: 'Computer Vision Sports App',
    description: 'Created mobile sports video editor with custom computer vision model for golf ball flight tracking. Achieved 6,000 paying subscribers with 4.4 App Store rating through on-device ML inference. Successfully sold to strategic acquirer.',
    technologies: ['Swift', 'SwiftUI', 'Jetpack Compose', 'PyTorch', 'Computer Vision', 'Video Processing'],
    highlights: [
      '6,000 paying subscribers with $15K MRR',
      '4.4 App Store rating with 1,100+ reviews',
      'On-device neural network inference',
      'Real-time video overlay rendering at 60fps',
      'Successfully sold - strategic exit achieved'
    ],
    imageUrl: '/images/ace-trace-preview.jpg',
    websiteUrl: 'https://acetrace.app',
    category: 'mobile'
  }
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.slice(0, 4);
};