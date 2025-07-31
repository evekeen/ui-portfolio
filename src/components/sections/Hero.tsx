import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary-200 to-transparent rounded-full opacity-30"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-accent-200 to-transparent rounded-full opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Transforming
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {' '}Industrial & Medical{' '}
            </span>
            Device Interfaces
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
        >
          From Legacy Systems to Modern React-Based Solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
            <Code className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
            <Users className="w-5 h-5 text-cyan-600" />
            <span className="text-gray-700 font-medium">5,000+ Enterprise Customers</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-700 font-medium">Performance-Critical UIs</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            href="https://calendly.com/ivkindev/30-minutes"
            external
            className="group"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Specialized in:</p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {[
              'React Component Libraries',
              'Embedded System UIs',
              'Real-time Data Visualization',
              'Touch Interface Optimization',
              'Performance-Critical Applications',
              'Enterprise-Scale Architecture'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};