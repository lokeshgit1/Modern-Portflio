import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient code that scales',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, user-centric interfaces',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing for speed and user experience',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working seamlessly with teams and clients',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-dark dark:text-light">
              Passionate about creating digital experiences
            </h3>
            <p className="text-lg text-neutral dark:text-light/80 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive applications using cutting-edge technologies. My journey 
              began with a curiosity about how things work on the web, and has evolved into 
              a passion for crafting exceptional digital experiences.
            </p>
            <p className="text-lg text-neutral dark:text-light/80 mb-8 leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous learning. 
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-shadow duration-300">
                Let's Work Together
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 bg-light/50 dark:bg-dark-light/50 backdrop-blur-sm rounded-2xl border border-neutral/20 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-dark dark:text-light">
                  {feature.title}
                </h4>
                <p className="text-neutral dark:text-light/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;