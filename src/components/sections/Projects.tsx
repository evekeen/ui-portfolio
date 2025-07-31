import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Users, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { projects } from '../../data/projects';

const categoryFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'embedded', label: 'Embedded' },
  { id: 'ai', label: 'AI/ML' },
];

const categoryIcons = {
  enterprise: Users,
  mobile: TrendingUp,
  embedded: Star,
  ai: Star,
};

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world solutions that transformed legacy interfaces into modern, 
            user-friendly experiences for industrial and medical applications.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categoryFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = categoryIcons[project.category] || Star;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/50 hover:from-white hover:via-blue-50/50 hover:to-cyan-50/70 border-2 hover:border-blue-200/50">
                  {/* Project Image Placeholder */}
                  <div className={`relative h-48 rounded-xl mb-6 overflow-hidden ${
                    project.category === 'enterprise' ? 'bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700' :
                    project.category === 'mobile' ? 'bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700' :
                    project.category === 'embedded' ? 'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700' :
                    'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600'
                  }`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-20 h-20 text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-white/20">
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${
                              techIndex % 4 === 0 ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100' :
                              techIndex % 4 === 1 ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' :
                              techIndex % 4 === 2 ? 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100' :
                              'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 hover:from-gray-100 hover:to-gray-200 transition-all duration-200">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {project.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                            <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                              idx === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                              idx === 1 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                              'bg-gradient-to-r from-purple-500 to-indigo-500'
                            }`} />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-6 border-t border-gradient-to-r from-gray-200 via-gray-100 to-gray-200">
                      {project.demoUrl && (
                        <Button
                          variant="primary"
                          size="sm"
                          href={project.demoUrl}
                          external
                          className="flex-1"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          href={project.githubUrl}
                          external
                          className="flex-1"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source
                        </Button>
                      )}
                      {!project.demoUrl && !project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="flex-1"
                        >
                          Learn More
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Modernize Your Device Interfaces?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help transform your legacy systems into modern, 
            user-friendly interfaces that improve efficiency and reduce errors.
          </p>
          <Button
            size="lg"
            href="https://calendly.com/ivkindev/30-minutes"
            external
          >
            Schedule a Technical Discussion
          </Button>
        </motion.div>
      </div>
    </section>
  );
};