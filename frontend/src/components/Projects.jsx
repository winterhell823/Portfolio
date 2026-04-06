import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'GenAI', 'Full Stack', 'Hackathons'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="py-20 bg-[#F9F3ED] dark:bg-[#0d2d3d]" style={{ fontFamily: "var(--font-body)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-display)" }}>
            <span className="bg-gradient-to-r from-[#E89B8E] to-[#5B8FA0] dark:from-[#d4a848] dark:to-[#c99a3d] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E89B8E] to-[#5B8FA0] dark:from-[#d4a848] dark:to-[#c99a3d] mx-auto mb-8 rounded-full" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? 'default' : 'outline'}
                className={`rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#E89B8E] to-[#D88B7D] text-white shadow-lg dark:bg-gradient-to-r dark:from-[#d4a848] dark:to-[#c99a3d] dark:text-[#0d2d3d] dark:shadow-[0_0_20px_rgba(212,168,72,0.4)]'
                    : 'border-[#E89B8E] text-[#D88B7D] hover:bg-[#F4E8E4] dark:border-[#d4a848] dark:text-[#d4a848] dark:hover:bg-[#1a4a5a]'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-[#E89B8E] dark:hover:border-[#d4a848] dark:bg-[#1a4a5a] dark:shadow-[0_0_30px_rgba(212,168,72,0.2)]">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#3D3D3D] dark:text-white" style={{ fontFamily: "var(--font-display)" }}>
                      {project.title}
                    </h3>
                    <p className="text-[#6B6B6B] dark:text-[hsl(240,4%,66%)] mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-[#F4E8E4] text-[#C67B6E] border border-[#E89B8E] dark:bg-[#2d6a7a] dark:text-[#d4a848] dark:border-[#c99a3d]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-[#E89B8E] text-[#D88B7D] hover:bg-[#F4E8E4] dark:border-[#d4a848] dark:text-[#d4a848] dark:bg-transparent dark:hover:bg-[#2d6a7a]"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-[#E89B8E] to-[#D88B7D] hover:from-[#D88B7D] hover:to-[#C67B6E] text-white dark:from-[#d4a848] dark:to-[#c99a3d] dark:hover:from-[#c99a3d] dark:hover:to-[#b8892d] dark:text-[#0d2d3d] dark:shadow-[0_0_15px_rgba(212,168,72,0.5)]"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;