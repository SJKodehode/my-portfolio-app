'use client'
import { Card, CardBody, CardFooter } from '@heroui/card';
import { Button } from '@heroui/button';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { title, subtitle } from './primitives';
import Image from 'next/image';

const projects = [
  {
    name: 'ergosmart-2',
    description: 'ErgoSmart 2.0 - A comprehensive ergonomic workspace solution with modern design and advanced features',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/sjkodehode/ergosmart-2',
    demo: 'https://www.ergosmart.no/'
  },
  {
    name: 'ergosmart-reimagined',
    description: 'A Next.js reimagined version of ErgoSmart with enhanced performance and user experience',
    tech: ['Next.js', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/sjkodehode/ergosmart-reimagined-main',
    demo: '#'
  },
  {
    name: 'my-next-portfolio',
    description: 'Personal portfolio showcasing projects and skills with modern design principles',
    tech: ['Next.js', 'React', 'CSS Modules'],
    github: 'https://github.com/sjkodehode/my-next-portfolio',
    demo: 'https://my-next-portfolio-livid-zeta.vercel.app'
  },
  {
    name: 'Kodeverket-oslo',
    description: 'New design for Kodeverket Oslo',
    tech: ['React', 'TypeScript', 'SCSS'],
    github: 'https://github.com/sjkodehode/kodeverket-oslo',
    demo: 'https://kodeverket-oslo.vercel.app/'
  },
  {
    name: 'jui-ds',
    description: 'A custom made react component design system.',
    tech: ['React', 'TypeScript', 'CSS'],
    github: 'https://github.com/sjkodehode/jui-ds',
    demo: '#'
  },
  {
    name: 'my-chat',
    description: 'A simple chat-app.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/sjkodehode/my-chat',
    demo: '#'
  }
];

// GitHub language statistics data
const githubStats = [
  { language: 'TypeScript', percentage: 67.28, color: 'hsl(194, 98%, 55%)' },
  { language: 'JavaScript', percentage: 16.13, color: 'hsl(280, 100%, 70%)' },
  { language: 'CSS', percentage: 11.93, color: 'hsl(60, 100%, 65%)' },
  { language: 'HTML', percentage: 3.94, color: 'hsl(140, 70%, 55%)' },
  { language: 'Astro', percentage: 0.72, color: 'hsl(38, 100%, 65%)' }
];

export function Statistics() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 text-center">
        <span className={title({color: "violet", size: "lg"})}>/ visualized</span>

        {/* GitHub Language Statistics */}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="my-28"
        >
          <h3 className={title({ size: 'xs'})}>GitHub Language Statistics</h3>
          <div className="max-w-4xl mx-auto surface-elevated rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                {githubStats.map((stat, index) => (
                  <motion.div
                    key={stat.language}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <span className="font-medium text-foreground">{stat.language}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: stat.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="text-sm text-foreground-secondary w-8">{stat.percentage}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Circular Chart Visual */}
              <div className="relative w-64 h-64 mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {githubStats.map((stat, index) => {
                    const radius = 40;
                    const circumference = 2 * Math.PI * radius;
                    const strokeDasharray = `${(stat.percentage / 100) * circumference} ${circumference}`;
                    const previousPercentages = githubStats.slice(0, index).reduce((sum, s) => sum + s.percentage, 0);
                    const strokeDashoffset = -((previousPercentages / 100) * circumference);
                    
                    return (
                      <motion.circle
                        key={stat.language}
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke={stat.color}
                        strokeWidth="8"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        initial={{ strokeDasharray: `0 ${circumference}` }}
                        whileInView={{ strokeDasharray }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="opacity-80"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <h3 className={title({ size: 'xs'})}>Projects</h3>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6}}
        viewport={{ once: true }}
        
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <Card key={index} className=''>
                <CardBody>


            <div
              key={project.name}

              className="surface-elevated rounded-xl p-6 transition-all group"
              >
                  <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex space-x-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full surface transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                  </motion.a>
                  {project.demo !== '#' && (
                      <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full surface  transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      >
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
              </div>
              
              <p className="text-foreground-secondary mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium surface rounded-full text-primary"
                    >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </CardBody>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}