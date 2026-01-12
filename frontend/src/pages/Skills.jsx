import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Database, Brain } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

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

  const SkillCard = ({ icon: Icon, title, skillList, color }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <div className="space-y-3">
        {skillList.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-full bg-gradient-to-r ${color} rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const SkillBadge = ({ skill }) => (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      {skill.name}
    </motion.div>
  );

  const allSkills = [
    ...skills.programming,
    ...skills.frameworks,
    ...skills.tools,
    ...skills.ml
  ];

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
            Skills & <span className="text-emerald-500">Expertise</span>
          </h1>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various domains
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <SkillCard
            icon={Code}
            title="Programming Languages"
            skillList={skills.programming}
            color="from-emerald-500 to-emerald-600"
          />
          <SkillCard
            icon={Layers}
            title="Frameworks & Libraries"
            skillList={skills.frameworks}
            color="from-blue-500 to-blue-600"
          />
          <SkillCard
            icon={Database}
            title="Tools & Databases"
            skillList={skills.tools}
            color="from-purple-500 to-purple-600"
          />
          <SkillCard
            icon={Brain}
            title="Machine Learning"
            skillList={skills.ml}
            color="from-pink-500 to-pink-600"
          />
        </div>

        {/* All Skills as Badges */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-center text-white shadow-lg"
          >
            <div className="text-4xl font-bold mb-2">{skills.programming.length}</div>
            <div className="text-sm opacity-90">Languages</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-center text-white shadow-lg"
          >
            <div className="text-4xl font-bold mb-2">{skills.frameworks.length}</div>
            <div className="text-sm opacity-90">Frameworks</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-center text-white shadow-lg"
          >
            <div className="text-4xl font-bold mb-2">{skills.tools.length}</div>
            <div className="text-sm opacity-90">Tools</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-center text-white shadow-lg"
          >
            <div className="text-4xl font-bold mb-2">{skills.ml.length}</div>
            <div className="text-sm opacity-90">ML Skills</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;