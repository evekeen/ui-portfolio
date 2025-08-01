import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Modernize Your Interfaces Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to transform your legacy device interfaces into modern, efficient, and user-friendly experiences? 
            Let's discuss your specific requirements and how I can help.
          </p>
          
          <Button
            size="lg"
            href="https://calendly.com/ivkindev/30-minutes"
            external
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule a Technical Discussion
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12 text-center"
        >
          <div className="text-gray-400">
            <p>&copy; 2025 Alexander Ivkin. All rights reserved.</p>
            <p className="text-sm mt-1">
              CTO & Full-Stack Engineer specializing in AI-Powered Software Development
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};