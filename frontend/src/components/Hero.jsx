import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo, socialLinks as socialLinksData, resumeUrl } from '../data/portfolioData';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = personalInfo.title;
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Mail: Mail
  };

  const socialLinks = socialLinksData.map(link => ({
    icon: iconMap[link.icon],
    href: link.url,
    label: link.name
  }));

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5E6D3] via-[#E8D5C4] to-[#C5D8E0] dark:bg-[#003153]">
      {/* Light Mode Background Image */}
      <div className="absolute inset-0 overflow-hidden block dark:hidden z-0">
        <img
          src="https://customer-assets.emergentagent.com/job_ai-portfolio-vaibhav/artifacts/2oztcxc5_istanbul-bosphorus-dreamy-storybook-harbor.jpg"
          alt="Istanbul Harbor Background"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3]/80 via-[#E8D5C4]/70 to-[#C5D8E0]/70" />
      </div>

      {/* Dark Mode Video Background */}
      <div className="absolute inset-0 overflow-hidden hidden dark:block z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-rise"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#3D3D3D] dark:text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-[#E89B8E] via-[#D88B7D] to-[#C67B6E] dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div
            className="h-16 sm:h-20 flex items-center justify-center animate-fade-rise-delay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#5B5B5B] dark:text-[hsl(240,4%,66%)] font-medium" style={{ fontFamily: "var(--font-body)" }}>
              {displayText}
              {!isTypingComplete && (
                <span className="inline-block w-0.5 h-6 sm:h-8 bg-[#E89B8E] dark:bg-white ml-1 animate-pulse" />
              )}
            </h2>
          </motion.div>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-[#6B6B6B] dark:text-[hsl(240,4%,66%)] max-w-2xl mx-auto leading-relaxed animate-fade-rise-delay"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-rise-delay-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-[#E89B8E] to-[#D88B7D] hover:from-[#D88B7D] hover:to-[#C67B6E] dark:liquid-glass text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.03]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full border-2 border-[#E89B8E] text-[#D88B7D] hover:bg-[#F4E8E4] dark:liquid-glass dark:text-white dark:hover:scale-[1.03]"
              style={{ fontFamily: "var(--font-body)" }}
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-10 flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all dark:bg-[#1a4a5a] dark:shadow-[0_0_20px_rgba(212,168,72,0.3)]"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-6 w-6 text-[#5B8FA0] dark:text-[#d4a848]" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="text-[#7B9876] dark:text-[hsl(240,4%,66%)] hover:text-[#5B8FA0] dark:hover:text-white transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
