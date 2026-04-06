import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 flex items-center justify-center md:justify-start">
              Built with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> using React & Tailwind CSS
            </p>
            <p className="text-gray-500 text-sm mt-1">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Back to Top Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              size="icon"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;