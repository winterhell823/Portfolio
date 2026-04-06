import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, Copy, Check } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { personalInfo, contactInfo } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent! ✓",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    toast({
      title: "Email Copied! ✓",
      description: "Email address copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-[#F9F3ED] dark:bg-[#0d2d3d]" style={{ fontFamily: "var(--font-body)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-display)" }}>
            <span className="bg-gradient-to-r from-[#E89B8E] to-[#5B8FA0] dark:from-[#d4a848] dark:to-[#c99a3d] bg-clip-text text-transparent">
              {contactInfo.title}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E89B8E] to-[#5B8FA0] dark:from-[#d4a848] dark:to-[#c99a3d] mx-auto mb-4 rounded-full" />
          <p className="text-center text-[#6B6B6B] dark:text-[hsl(240,4%,66%)] mb-12 max-w-2xl mx-auto">
            {contactInfo.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#3D3D3D] dark:text-white">
                  Let's Connect
                </h3>
                <p className="text-[#6B6B6B] dark:text-gray-400 leading-relaxed mb-8">
                  {contactInfo.description}
                </p>
              </div>

              <Card className="p-6 border-2 border-transparent hover:border-[#E89B8E] dark:hover:border-[#d4a848] dark:bg-[#1a4a5a] transition-all">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#E89B8E] to-[#D88B7D] text-white dark:from-[#d4a848] dark:to-[#c99a3d] dark:text-[#0d2d3d]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#7B7B7B] dark:text-[#d4a848]">Email</p>
                    <p className="font-medium text-[#3D3D3D] dark:text-white">{personalInfo.email}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyEmail}
                    className="rounded-full"
                  >
                    {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                  </Button>
                </div>
              </Card>

              <Card className="p-6 border-2 border-transparent hover:border-[#E89B8E] dark:hover:border-[#d4a848] dark:bg-[#1a4a5a] transition-all">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#5B8FA0] to-[#4A7C8E] text-white dark:from-[#2d6a7a] dark:to-[#1a4a5a] dark:text-[#d4a848]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-[#7B7B7B] dark:text-[#d4a848]">Location</p>
                    <p className="font-medium text-[#3D3D3D] dark:text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-6 border-2 border-[#E89B8E]/30 dark:border-[#d4a848]/30 dark:bg-[#1a4a5a]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#5B5B5B] dark:text-[#d4a848]">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border-[#E89B8E]/40 focus:border-[#E89B8E] dark:border-[#d4a848]/40 dark:focus:border-[#d4a848] dark:bg-[#2d6a7a] dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#5B5B5B] dark:text-[#d4a848]">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full border-[#E89B8E]/40 focus:border-[#E89B8E] dark:border-[#d4a848]/40 dark:focus:border-[#d4a848] dark:bg-[#2d6a7a] dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#5B5B5B] dark:text-[#d4a848]">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      className="w-full border-[#E89B8E]/40 focus:border-[#E89B8E] dark:border-[#d4a848]/40 dark:focus:border-[#d4a848] dark:bg-[#2d6a7a] dark:text-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#E89B8E] to-[#D88B7D] hover:from-[#D88B7D] hover:to-[#C67B6E] text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all dark:from-[#d4a848] dark:to-[#c99a3d] dark:text-[#0d2d3d] dark:shadow-[0_0_20px_rgba(212,168,72,0.5)]"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;