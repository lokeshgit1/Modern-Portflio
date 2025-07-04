import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Cloud, Palette, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vue.js'],
      color: 'from-primary to-blue-500',
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
      color: 'from-secondary to-red-500',
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Firebase'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'DevOps',
      icon: Cloud,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Monitoring'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Design',
      icon: Palette,
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX', 'Prototyping', 'Design Systems'],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'Tools',
      icon: Zap,
      skills: ['Git', 'VS Code', 'Postman', 'Jira', 'Slack', 'Notion'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-neutral dark:text-light/80 max-w-2xl mx-auto">
            I'm passionate about staying up-to-date with the latest technologies and continuously expanding my skill set.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-light/50 dark:bg-dark-light/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral/20 hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-dark dark:text-light group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 bg-white/30 dark:bg-dark/30 rounded-lg text-center text-sm font-medium text-dark dark:text-light hover:bg-primary/20 transition-colors duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;