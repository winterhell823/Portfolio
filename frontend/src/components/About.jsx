import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from './ui/badge';
import { personalInfo, skills } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-20 bg-[#F9F3ED] dark:bg-[#0d2d3d]" style={{ fontFamily: "var(--font-body)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-display)" }}>
            <span className="bg-gradient-to-r from-[#E89B8E] to-[#D88B7D] dark:from-[#d4a848] dark:to-[#c99a3d] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E89B8E] to-[#D88B7D] dark:from-[#d4a848] dark:to-[#c99a3d] mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="prose dark:prose-invert max-w-none">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index} className="text-lg text-[#5B5B5B] dark:text-gray-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#3D3D3D] dark:text-white">
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="px-4 py-2 text-sm bg-gradient-to-r from-[#F4E8E4] to-[#EDD9C7] border border-[#E89B8E] text-[#C67B6E] hover:shadow-lg transition-all cursor-default dark:from-[#1a4a5a] dark:to-[#153d4d] dark:border-[#d4a848] dark:text-[#d4a848]"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#3D3D3D] dark:text-white">
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: -2 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="px-4 py-2 text-sm bg-gradient-to-r from-[#D4E8EE] to-[#C5D8E0] border border-[#5B8FA0] text-[#4A7C8E] hover:shadow-lg transition-all cursor-default dark:from-[#2d6a7a] dark:to-[#1a4a5a] dark:border-[#c99a3d] dark:text-[#c99a3d]"
                        >
                          {tool}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;