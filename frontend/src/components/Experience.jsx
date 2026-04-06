import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Card } from './ui/card';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const iconMap = {
    Briefcase: Briefcase,
    GraduationCap: GraduationCap
  };

  const experiencesWithIcons = experiences.map(exp => ({
    ...exp,
    icon: iconMap[exp.icon]
  }));

  return (
    <section id="experience" ref={ref} className="py-20 bg-gradient-to-br from-[#E8D5C4] to-[#D4E8EE] dark:bg-gradient-to-br dark:from-[#153d4d] dark:to-[#0d2d3d]" style={{ fontFamily: "var(--font-body)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-display)" }}>
            <span className="bg-gradient-to-r from-[#E89B8E] to-[#5B8FA0] dark:from-[#d4a848] dark:to-[#c99a3d] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E89B8E] to-[#5B8FA0] dark:from-[#d4a848] dark:to-[#c99a3d] mx-auto mb-12 rounded-full" />

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#E89B8E] to-[#5B8FA0] dark:from-[#d4a848] dark:to-[#c99a3d] rounded-full" />

            <div className="space-y-12">
              {experiencesWithIcons.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className={`relative md:flex md:items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F9F3ED] dark:bg-[#153d4d] rounded-full border-4 border-[#E89B8E] dark:border-[#d4a848] z-10" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <Card className="p-6 hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-[#E89B8E] dark:hover:border-indigo-800">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                          <exp.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-[#3D3D3D] dark:text-white">
                                {exp.company}
                              </h3>
                              <p className="text-[#D88B7D] dark:text-indigo-400 font-medium">
                                {exp.role}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-[#7B7B7B] dark:text-gray-400 mb-3">
                            {exp.period}
                          </p>
                          <p className="text-[#5B5B5B] dark:text-gray-300 mb-4 leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 text-xs font-medium bg-[#F4E8E4] text-[#C67B6E] rounded-full border border-[#E89B8E] dark:bg-[#1a4a5a] dark:text-[#d4a848] dark:border-[#d4a848]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;