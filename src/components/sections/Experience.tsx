import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Download, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '../ui/Button';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  period: string;
  type: 'full-time' | 'contract' | 'founder';
  highlights: string[];
  technologies?: string[];
}

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Enabled Health Inc',
    position: 'Co-founder, CTO',
    location: 'Boston, MA, USA',
    period: 'January 2024 - Present',
    type: 'founder',
    highlights: [
      'Built and launched iOS bedside trainer app integrating computer vision-based engagement tracking',
      'Designed and implemented voice AI agent to communicate with patients and collect feedback',
      'Led R&D of new computer vision algorithms for body-pose estimation and motion tracking',
      'Manage mixed remote/on-site team of engineers, UX designers, and data analysts',
      'Designed patient-friendly UI through iterative testing and user feedback',
      'Conduct direct hospital staff and patient interviews to validate features and define roadmap',
      'Won MA challenge grant, raised $200k funding, launched two hospital pilots',
      '80% of new code written by AI agents (Claude Code, Cursor, etc)'
    ],
    technologies: ['Swift', 'SwiftUI', 'Node.js', 'TypeScript', 'Computer Vision', 'Voice AI', 'LLMs', 'Google Cloud', 'Firebase']
  },
  {
    company: 'Ace Trace',
    position: 'Founder',
    location: 'Boston, MA, USA',
    period: 'April 2021 - July 2025',
    type: 'founder',
    highlights: [
      'Created custom computer vision model that traces golf-ball flight in video',
      'Grew to 6,000 paying subscribers and ~20,000 monthly installs (MRR $15K)',
      'Achieved 4.4 App Store rating with 1,100+ reviews',
      'Designed intuitive mobile UI through trial-and-error testing and user acceptance feedback',
      'Hired and managed UX/UI contractors for visual design and user experience optimization',
      'Automated marketing partnership outreach with AI agent for Instagram influencers',
      'Produced marketing videos using generative AI tools (Runway, Veo, Sora)',
      'Conducted product research, user interviews, and roadmap prioritization',
      'Successfully exited company through app acquisition'
    ],
    technologies: ['SwiftUI', 'Jetpack Compose', 'Python', 'PyTorch', 'Video Processing', 'Computer Vision', 'Node.js', 'TypeScript', 'Docker', 'Google Cloud']
  },
  {
    company: 'ALM Works, Inc.',
    position: 'Leading Software Developer',
    location: 'Boston, MA, USA',
    period: 'April 2019 - March 2022',
    type: 'full-time',
    highlights: [
      'Led development of Structure.Gantt supporting on-premises and cloud versions (team of 4 engineers)',
      'Made significant contributions to Structure product for both platforms',
      'Researched and shipped MVP of Cross-Team PI Planner product',
      'Conducted customer interviews, analyzed feedback, and created product roadmaps',
      'Conducted customer interviews and created product roadmaps',
      'Managed projects as team lead and mentored new developers',
      'Presented products at corporate events and international conferences'
    ],
    technologies: ['Java', 'Kotlin', 'TypeScript', 'JavaScript', 'React', 'Atlassian SDK', 'Kubernetes', 'Cloud Development']
  },
  {
    company: 'OOO ALM Works',
    position: 'Leading Software Developer',
    location: 'St. Petersburg, Russia',
    period: 'April 2015 - March 2019',
    type: 'full-time',
    highlights: [
      'Developed Structure.Gantt from scratch, participated in architectural design',
      'Shipped to market achieving 5K+ installations',
      'Participated in Structure Cloud, Structure.Pages, Structure.Testy projects',
      'Performance analysis and optimizations for large datasets',
      'Communicated with customers, analyzed feedback, and influenced product direction',
      'Presented products to customers at international conferences',
      'Interviewed candidates and mentored new software developers'
    ],
    technologies: ['Java', 'JavaScript', 'React', 'Performance Optimization']
  },
  {
    company: 'Moscow Institute of Physics and Technology',
    position: 'Leading Software Developer (Part-Time)',
    location: 'Moscow, Russia',
    period: 'May 2013 - January 2016',
    type: 'contract',
    highlights: [
      'Created video simulator and test system for video stabilization algorithms',
      'Researched and prototyped computer vision algorithms for object tracking',
      'Organized agile-based work process and planned project roadmap',
      'Designed user interface and presented results to customers'
    ],
    technologies: ['Computer Vision', 'Video Processing']
  },
  {
    company: 'OpenWay Group',
    position: 'Software Developer',
    location: 'St. Petersburg, Russia',
    period: 'May 2012 - March 2015',
    type: 'full-time',
    highlights: [
      'Participated in web, mobile, kiosk, and ATM banking projects',
      'Developed configuration management system for banking software',
      'Customized interactive screens for kiosk environments',
      'Investigated and solved technical problems for customers',
      'Performance optimizations for banking applications'
    ],
    technologies: ['Java', 'JavaScript', 'Banking Software', 'Kiosk Development']
  },
  {
    company: 'InviewLab',
    position: 'Leading Software Developer (Part-Time)',
    location: 'Moscow, Russia',
    period: 'September 2009 - May 2013',
    type: 'contract',
    highlights: [
      'Created spectral recognition software for sample material analysis device',
      'Reached final in Skolkovo Innovation Award 2011',
      'Research of algorithms for spectral recognition and signal processing',
      'Designed user interface and organized agile-based work process'
    ],
    technologies: ['Signal Processing', 'Spectral Recognition']
  },
  {
    company: 'OpenWay Group',
    position: 'Quality Engineer',
    location: 'St. Petersburg, Russia',
    period: 'August 2009 - May 2012',
    type: 'full-time',
    highlights: [
      'Developed testing framework for automated tests for banking software',
      'As Payment System Interchange team leader, covered functionality with automated tests',
      'Designed testing strategy for Mastercard Russian Switch project',
      'Development of testing frameworks and tools'
    ],
    technologies: ['Test Automation', 'Banking Software', 'Quality Assurance']
  },
  {
    company: 'Sun Microsystems (Oracle)',
    position: 'Quality Engineer',
    location: 'St. Petersburg, Russia',
    period: 'December 2007 - July 2009',
    type: 'full-time',
    highlights: [
      'Participated in Java Device Test Suite project',
      'Created automated web reports for release preparation',
      'Developed web application for testing documentation review',
      'Automated test development and maintenance'
    ],
    technologies: ['Java', 'Test Automation', 'Web Development']
  }
];

const education: EducationItem[] = [
  {
    institution: 'Moscow Institute of Physics and Technology',
    degree: 'Unfinished Ph.D.',
    field: 'Computer Science',
    period: '2013 - 2015',
    location: 'Moscow, Russia'
  },
  {
    institution: 'St. Petersburg State Electrotechnical University',
    degree: "Master's Degree",
    field: 'Electronics and Microelectronics',
    period: '2007 - 2009',
    location: 'St. Petersburg, Russia'
  },
  {
    institution: 'St. Petersburg State Electrotechnical University',
    degree: "Bachelor's Degree",
    field: 'Electronics and Microelectronics',
    period: '2003 - 2007',
    location: 'St. Petersburg, Russia'
  }
];

const achievements = [
  'Successfully exited founder-led startup (Ace Trace) through acquisition',
  '15+ years of software development experience',
  'AI early adopter and enthusiast - 80% of code written by AI agents',
  'Finalist in Skolkovo Innovation Award 2011 (InviewLab)',
  'Multiple successful product launches with thousands of enterprise customers',
  'Experience in healthcare tech, sports tech, fintech, and enterprise software'
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From enterprise software to successful startup exit, bringing deep technical expertise 
            and business acumen to every project.
          </p>
          <Button
            href="/alexander-ivkin-cv.pdf"
            external
            size="lg"
            className="inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Full Resume
          </Button>
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Experience Column */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-600" />
              Work Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200" />
                )}
                
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    exp.type === 'founder' ? 'bg-gradient-to-br from-purple-500 to-indigo-600' :
                    exp.type === 'full-time' ? 'bg-gradient-to-br from-blue-500 to-cyan-600' :
                    'bg-gradient-to-br from-gray-500 to-gray-600'
                  }`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{exp.position}</h4>
                        <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <div className="flex items-center gap-1 justify-end mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-end">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education
              </h3>
              
              {education.map((edu) => (
                <div key={edu.institution} className="bg-white rounded-xl border border-gray-200 p-6">
                  <h4 className="font-bold text-gray-900 mb-1">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-700 mb-2">{edu.field}</p>
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-600" />
                Key Achievements
              </h3>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <ul className="space-y-3">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Skills</h3>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Languages & Frameworks</h4>
                  <p className="text-gray-700 text-sm">Java, Kotlin, Python, TypeScript, React, Redux, Node.js</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mobile Development</h4>
                  <p className="text-gray-700 text-sm">Swift, SwiftUI, Jetpack Compose, Flutter, React Native</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI/ML & Computer Vision</h4>
                  <p className="text-gray-700 text-sm">PyTorch, TensorFlow, Computer Vision, LLMs, Voice AI</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Infrastructure</h4>
                  <p className="text-gray-700 text-sm">Docker, Kubernetes, MongoDB, AWS, Google Cloud, Firebase</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Product Management</h4>
                  <p className="text-gray-700 text-sm">User Interviews, Roadmap Planning, Analytics, A/B Testing, Market Research</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">UI/UX Design</h4>
                  <p className="text-gray-700 text-sm">Interface Design, User Testing, Acceptance Testing, UX Contractor Management</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};