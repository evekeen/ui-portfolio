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
                <Card className="h-full flex flex-col">
                  {/* Project Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg mb-6 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-blue-400" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.category === 'enterprise' ? 'bg-blue-100 text-blue-800' :
                        project.category === 'mobile' ? 'bg-green-100 text-green-800' :
                        project.category === 'embedded' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {project.category.toUpperCase()}
                      </span>
                    </div>
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
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4 border-t">
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