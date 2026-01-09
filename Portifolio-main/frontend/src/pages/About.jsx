import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';

const About = () => {
  const { personal, experience, education, certifications } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/20 to-white dark:from-gray-950 dark:via-emerald-950/10 dark:to-gray-950 pt-24 pb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-emerald-500">Me</span>
          </h1>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        {/* Profile Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-2xl blur-2xl opacity-20" />
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-emerald-500/20">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {personal.name}
              </h2>
              <p className="text-xl text-emerald-500 mb-4">{personal.title}</p>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                <MapPin className="w-5 h-5" />
                <span>{personal.location}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {personal.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {personal.roles.map((role, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-emerald-500" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Experience
            </h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp) => (
              <motion.div
                key={exp.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-emerald-500 font-medium mt-1 sm:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-emerald-500" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-emerald-500 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {edu.duration}
                </p>
                {edu.score && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Score: {edu.score}
                  </p>
                )}
                {edu.status && (
                  <span className="inline-block mt-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium">
                    {edu.status}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-emerald-500" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg border border-emerald-200 dark:border-emerald-900/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {cert.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;