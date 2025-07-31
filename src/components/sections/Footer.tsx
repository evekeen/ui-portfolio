import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, Github, Linkedin } from 'lucide-react';
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
          className="text-center mb-12"
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
            className="mb-8"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule a Technical Discussion
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:a@ivkin.dev" className="text-gray-300 hover:text-white transition-colors">
              a@ivkin.dev
            </a>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <div className="text-gray-300">
              <div>+1 (617) 775-9686 (US)</div>
              <div>+381 677 627 699 (EU)</div>
            </div>
          </div>
          
          <div className="text-center md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Schedule a Call</h3>
            <a 
              href="https://calendly.com/ivkindev/30-minutes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              calendly.com/ivkindev/30-minutes
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              <p>&copy; 2025 Alexander Ivkin. All rights reserved.</p>
              <p className="text-sm mt-1">
                CTO & Full-Stack Engineer specializing in Industrial & Medical Device UI Modernization
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/ivkin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/alexander-ivkin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};