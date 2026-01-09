import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const { personal } = portfolioData;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % personal.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [personal.roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-white dark:from-gray-950 dark:via-emerald-950/20 dark:to-gray-950">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-30" />
                <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-emerald-500/30 shadow-2xl">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Hi, I'm{' '}
              <span className="text-emerald-500 inline-block">
                {personal.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 font-light h-12 flex items-center justify-center">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {personal.roles[currentRole]}
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Computer Science student at <span className="font-semibold text-gray-800 dark:text-gray-200">SRM University AP</span> passionate about building
              innovative solutions with Python, Web Development, and Machine Learning.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border-2 border-emerald-500 text-emerald-500 dark:text-emerald-400 rounded-lg font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 hover:scale-105"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-200" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-4 mt-12"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all duration-200 hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all duration-200 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all duration-200 hover:scale-110 group"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1"
              >
                <div className="w-1.5 h-3 bg-emerald-500 rounded-full mx-auto" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;