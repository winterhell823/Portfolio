import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award, Code, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const iconMap = {
    Trophy: Trophy,
    Award: Award,
    Code: Code,
    Zap: Zap
  };

  const achievementsWithIcons = achievements.map(achievement => ({
    ...achievement,
    icon: iconMap[achievement.icon]
  }));

  return (
    <section id="achievements" ref={ref} className="py-20 bg-gradient-to-br from-[#D4E8EE] to-[#E8D5C4] dark:bg-gradient-to-br dark:from-[#1a4a5a] dark:to-[#153d4d]" style={{ fontFamily: "var(--font-body)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-display)" }}>
            <span className="bg-gradient-to-r from-[#E89B8E] to-[#5B8FA0] dark:from-[#d4a848] dark:to-[#c99a3d] bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E89B8E] to-[#5B8FA0] dark:from-[#d4a848] dark:to-[#c99a3d] mx-auto mb-12 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementsWithIcons.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#E89B8E] dark:hover:border-[#d4a848] dark:bg-[#2d6a7a] dark:shadow-[0_0_20px_rgba(212,168,72,0.2)]">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color} shadow-lg`}>
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#3D3D3D] dark:text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] dark:text-[hsl(240,4%,66%)]">
                    {achievement.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;