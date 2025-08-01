import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Users, TrendingUp, Image } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { projects } from '../../data/projects';


const categoryIcons = {
  enterprise: Users,
  mobile: TrendingUp,
  embedded: Star,
  ai: Star,
};

const renderModalContent = (projectId: string) => {
  switch (projectId) {
    case 'enabled-health':
      return (
        <div className="p-6 space-y-6">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              AI-powered physical therapy trainer for hospitals, helping patients stay active during recovery 
              with computer vision-based engagement tracking and voice AI guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile AI Trainer</h3>
              <img 
                src="/src/assets/screenshots/eh-exercise.png" 
                alt="Enabled Health iOS Exercise Trainer" 
                className="w-full h-auto rounded-lg shadow-md border border-gray-200"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">iOS Bedside Trainer App with Computer Vision & Voice AI</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Clinical Dashboard</h3>
              <img 
                src="/src/assets/screenshots/eh-dashboard.png" 
                alt="Enabled Health Clinical Dashboard" 
                className="w-full h-auto rounded-lg shadow-md border border-gray-200"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">Web-based Analytics for Patient Progress & Metrics</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-3">Key Achievements</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div><p>• Won MA Challenge Grant</p><p>• Raised $200k in funding</p></div>
              <div><p>• Launched two hospital pilots</p><p>• 80% of code written by AI agents</p></div>
            </div>
          </div>
        </div>
      );

    case 'structure-gantt':
      return (
        <div className="p-6 space-y-6">
          <p className="text-lg text-gray-600">Enterprise Gantt chart visualization with 7,000+ active installations.</p>
          <div className="flex justify-center">
            <img 
              src="/src/assets/screenshots/gantt.png" 
              alt="Structure.Gantt Interface" 
              className="max-w-full h-auto rounded-lg shadow-lg border border-gray-200"
            />
          </div>
        </div>
      );

    case 'structure-tempo':
      return (
        <div className="p-6 space-y-6">
          <p className="text-lg text-gray-600">Jira portfolio management platform used by 5,000+ organizations.</p>
          <div className="flex justify-center">
            <img 
              src="/src/assets/screenshots/structure.png" 
              alt="Structure by Tempo Interface" 
              className="max-w-full h-auto rounded-lg shadow-lg border border-gray-200"
            />
          </div>
        </div>
      );

    case 'ace-trace':
      return (
        <div className="p-6 space-y-6">
          <p className="text-lg text-gray-600">Golf shot tracing app with 6,000 paying subscribers. Successfully sold to strategic acquirer.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg p-8 aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 bg-green-200 rounded-lg mx-auto mb-2 flex items-center justify-center">⛳</div>
                <p className="text-sm">Mobile App Interface</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 bg-red-200 rounded-lg mx-auto mb-2 flex items-center justify-center">🎯</div>
                <p className="text-sm">Ball Flight Tracking</p>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return <div className="p-6">No screenshots available.</div>;
  }
};

export const Projects: React.FC = () => {
  const filteredProjects = projects;
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  const openModal = (projectId: string) => setActiveModal(projectId);
  const closeModal = () => setActiveModal(null);

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
                    <div className="flex gap-3 pt-6 border-t border-gradient-to-r from-gray-200 via-gray-100 to-gray-200">
                      {project.id === 'enabled-health' ? (
                        /* Enabled Health - Only Screenshots button */
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => openModal(project.id)}
                          className="flex-1"
                        >
                          <Image className="w-4 h-4 mr-2" />
                          Screenshots
                        </Button>
                      ) : (
                        /* Other projects - Both buttons */
                        <>
                          {project.websiteUrl && (
                            <Button
                              variant="primary"
                              size="sm"
                              href={project.websiteUrl}
                              external
                              className="flex-1"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Learn More
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openModal(project.id)}
                            className="flex-1"
                          >
                            <Image className="w-4 h-4 mr-2" />
                            Screenshots
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Project Modals */}
        {activeModal && (
          <Modal
            isOpen={!!activeModal}
            onClose={closeModal}
            title={`${projects.find(p => p.id === activeModal)?.title} - Screenshots`}
          >
            {renderModalContent(activeModal)}
          </Modal>
        )}
      </div>
    </section>
  );
};