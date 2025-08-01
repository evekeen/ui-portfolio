import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Settings, Zap, DollarSign, Clock, Users, Target, Square, RotateCcw } from 'lucide-react';
import { ThemeProvider, useTheme } from '../../contexts/ThemeContext';
import { StyleControlPanel } from '../ui/StyleControlPanel';
import { MeasurementDisplay } from '../ui/MeasurementDisplay';
import { IndustrialButton } from '../ui/IndustrialButton';
import { Button } from '../ui/Button';
import { type MeasurementData } from '../../types';

// Simulated measurement data matching Zumbach interface
const generateMeasurementData = (): MeasurementData[] => [
  {
    id: 'rms',
    label: 'RMS (mm)',
    value: 21.924 + (Math.random() - 0.5) * 0.1,
    unit: 'mm',
    tolerance: { min: 21.0, max: 22.5 },
    status: Math.random() > 0.8 ? 'error' : Math.random() > 0.6 ? 'warning' : 'normal',
    trend: Array.from({ length: 20 }, () => 21.8 + Math.random() * 0.4),
  },
  {
    id: 'ovality',
    label: 'Ovality (mm)',
    value: 0.69 + (Math.random() - 0.5) * 0.05,
    unit: 'mm',
    tolerance: { min: 0.0, max: 1.0 },
    status: 'normal',
    trend: Array.from({ length: 20 }, () => 0.6 + Math.random() * 0.2),
  },
  {
    id: 'diameter-x',
    label: 'Diameter X (mm)',
    value: 21.120 + (Math.random() - 0.5) * 0.1,
    unit: 'mm',
    tolerance: { min: 20.5, max: 22.0 },
    status: 'normal',
    trend: Array.from({ length: 20 }, () => 21.0 + Math.random() * 0.3),
  },
  {
    id: 'diameter-y',
    label: 'Diameter Y (mm)',
    value: 18.363 + (Math.random() - 0.5) * 0.1,
    unit: 'mm',
    tolerance: { min: 18.0, max: 19.0 },
    status: 'normal',
    trend: Array.from({ length: 20 }, () => 18.2 + Math.random() * 0.4),
  },
];

const LegacyInterface: React.FC<{ data: MeasurementData[] }> = ({ data }) => (
  <div className="bg-blue-600 p-4 rounded-lg font-mono text-white min-h-[400px]">
    <div className="grid grid-cols-2 gap-2 h-full">
      {data.map((measurement) => (
        <div key={measurement.id} className="border-2 border-gray-400 bg-white text-black p-2">
          <div className="text-xs bg-gray-300 px-2 py-1 mb-2 flex items-center justify-between">
            <span>{measurement.label}</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-gray-500"></div>
              <div className="w-3 h-3 bg-gray-500"></div>
            </div>
          </div>
          <div className={`text-2xl font-bold p-4 ${
            measurement.status === 'error' ? 'bg-red-500 text-white' : 'text-black'
          }`}>
            {measurement.value.toFixed(3)}
          </div>
        </div>
      ))}
      <div className="col-span-2 border-2 border-gray-400 bg-gray-300 p-2 flex items-center justify-between">
        <span className="text-black font-semibold">No errors</span>
        <div className="flex gap-1">
          <IndustrialButton variant="primary" styleOverride="industrial" className="!px-2 !py-1 !text-xs">START</IndustrialButton>
          <IndustrialButton variant="secondary" styleOverride="industrial" className="!px-2 !py-1 !text-xs">STOP</IndustrialButton>
          <IndustrialButton variant="danger" styleOverride="industrial" className="!px-2 !py-1 !text-xs">RESET</IndustrialButton>
        </div>
      </div>
    </div>
  </div>
);

const ModernInterface: React.FC<{ data: MeasurementData[] }> = ({ data }) => {
  const [isSystemRunning, setIsSystemRunning] = useState(true);
  const { currentTheme } = useTheme();
  
  const getButtonStyle = () => {
    const { buttonStyle } = currentTheme.components;
    
    const baseClasses = "w-12 h-12 flex items-center justify-center transition-all duration-200";
    
    switch (buttonStyle) {
      case 'flat':
        return `${baseClasses} rounded-lg`;
      case 'raised':
        return `${baseClasses} rounded-lg shadow-lg hover:shadow-xl`;
      case 'outlined':
        return `${baseClasses} rounded-lg border-2`;
      default:
        return `${baseClasses} rounded-full`;
    }
  };
  
  return (
    <div className="min-h-[400px] p-4 rounded-lg" style={{ backgroundColor: '#f8fafc' }}>
      <div className="grid grid-cols-2 gap-4 h-full">
        {data.map((measurement) => (
          <MeasurementDisplay key={measurement.id} data={measurement} />
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-3">
          <button
            onClick={() => setIsSystemRunning(true)}
            className={`${getButtonStyle()} ${
              isSystemRunning 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-600 hover:bg-green-100'
            } ${currentTheme.components.buttonStyle === 'outlined' ? 'border-green-500' : ''}`}
            title="Start System"
          >
            <Play className="w-5 h-5" fill={isSystemRunning ? 'white' : 'currentColor'} />
          </button>
          <button
            onClick={() => setIsSystemRunning(false)}
            className={`${getButtonStyle()} ${
              !isSystemRunning 
                ? 'bg-red-500 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-600 hover:bg-red-100'
            } ${currentTheme.components.buttonStyle === 'outlined' ? 'border-red-500' : ''}`}
            title="Stop System"
          >
            <Square className="w-4 h-4" fill={!isSystemRunning ? 'white' : 'currentColor'} />
          </button>
          <button
            onClick={() => {
              setIsSystemRunning(false);
              setTimeout(() => setIsSystemRunning(true), 500);
            }}
            className={`${getButtonStyle()} bg-gray-200 text-gray-600 hover:bg-blue-100 hover:text-blue-600 ${
              currentTheme.components.buttonStyle === 'outlined' ? 'border-blue-500' : ''
            }`}
            title="Reset System"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${
            isSystemRunning 
              ? 'bg-green-500 animate-pulse' 
              : 'bg-red-500'
          }`}></div>
          <span className={`font-medium ${
            isSystemRunning ? 'text-green-600' : 'text-red-600'
          }`}>
            {isSystemRunning ? 'System Operating' : 'System Stopped'}
          </span>
        </div>
      </div>
    </div>
  );
};

const ZumbachDemoContent: React.FC = () => {
  const [measurementData, setMeasurementData] = useState<MeasurementData[]>(generateMeasurementData());
  const [isRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      setMeasurementData(generateMeasurementData());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Proposal Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Device UI Modernization Proposal
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Transform your legacy device interfaces into modern, React-based solutions with 
            component libraries, agile development practices, and continuous user feedback.
          </p>

          {/* Proposal Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 border border-green-200"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">$110/hr</h3>
              <p className="text-gray-600 text-sm">Competitive hourly rate for senior full-stack development</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 border border-blue-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">32h/week</h3>
              <p className="text-gray-600 text-sm">Dedicated weekly commitment for consistent progress</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 border border-purple-200"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-purple-600 mb-2">Team Lead</h3>
              <p className="text-gray-600 text-sm">Mentoring, agile processes, and technical leadership</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 border border-orange-200"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-orange-600 mb-2">User-Centered</h3>
              <p className="text-gray-600 text-sm">User interviews, feedback loops, and continuous improvement</p>
            </motion.div>
          </div>

          {/* Scope of Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Scope of Work</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Technical Development</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Design protocol for device discovery and unified measurement reporting</li>
                  <li>• Build modular, reusable component library</li>
                  <li>• Modernize device dashboard UI with React components</li>
                  <li>• Customizable dashboard (configure devices, measurements, display formats)</li>
                  <li>• Role-based authorization and access control system</li>
                  <li>• UI theme selection and visual customization system</li>
                  <li>• Implement responsive design for 7" displays</li>
                  <li>• Optimize for distance readability and touch interaction</li>
                  <li>• Set up CI/CD pipeline and automated testing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Leadership & Process</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Set up agile development processes and workflows</li>
                  <li>• Mentor development team on React best practices</li>
                  <li>• Establish design system and coding standards</li>
                  <li>• Conduct user interviews with technicians and operators</li>
                  <li>• Collect feedback and iterate on UI/UX improvements</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <Button
            size="lg"
            href="https://calendly.com/ivkindev/30-minutes"
            external
            className="mb-12"
          >
            Schedule Technical Discussion
          </Button>
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Interactive UI Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Experience how device interfaces can be modernized with customizable components, 
            real-time data visualization, and industrial-grade design patterns.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-3xl mx-auto mb-12">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This interactive demo is provided for demonstration purposes and fun exploration. 
              The actual device components will be specifically designed and tailored to your industrial 
              requirements, measurement protocols, and brand guidelines.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
            <div className="text-center mb-8">
              
              {/* Style Control Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="bg-white rounded-xl shadow-lg border border-blue-200/50 p-6 max-w-4xl mx-auto">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                      <Settings className="w-6 h-6 text-blue-600" />
                      Customize Interface Styles
                    </h3>
                    <p className="text-sm text-gray-600">
                      Try different presets and styles to see changes instantly in the interfaces below
                    </p>
                  </div>
                  <StyleControlPanel embedded={true} />
                </div>
              </motion.div>
            </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Legacy Interface */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                Current Interface
                <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">Legacy</span>
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Typical industrial interface with limited customization and basic data display.
              </p>
              <LegacyInterface data={measurementData} />
              
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Current Limitations:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fixed color scheme and layout</li>
                  <li>• Poor readability from distance</li>
                  <li>• Limited data visualization options</li>
                  <li>• No accessibility features</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Modern Interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                Modernized Interface
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">React</span>
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Modern React-based interface with full customization and multiple display modes.
              </p>
              <ModernInterface data={measurementData} />
              
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Modern Advantages:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fully customizable themes and layouts</li>
                  <li>• Distance-readable typography scaling</li>
                  <li>• Multiple data visualization modes</li>
                  <li>• Responsive design for all devices</li>
                  <li>• Real-time style switching</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Real-time Customization</h4>
            <p className="text-gray-600 text-sm">
              Instantly switch between different UI styles, colors, and layouts without interrupting operations.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-cyan-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Component Library</h4>
            <p className="text-gray-600 text-sm">
              Reusable components that can be easily configured for different device families and use cases.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Industrial Ready</h4>
            <p className="text-gray-600 text-sm">
              Designed for harsh environments with high contrast options, large touch targets, and distance readability.
            </p>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export const ZumbachDemo: React.FC = () => {
  return (
    <section id="demo" className="bg-gray-50">
      <ThemeProvider>
        <ZumbachDemoContent />
      </ThemeProvider>
    </section>
  );
};