import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Code, Terminal, Cpu, Zap } from 'lucide-react';
import FloatingTechIcon from './FloatingTechIcon';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  // Mouse tracking values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth movement
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  // Transform mouse position to rotation values
  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  // Transform for floating elements
  const floatX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const floatY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  // Pre-calculate all transforms that were previously in JSX
  const techGridRotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const techGridRotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const centralAvatarRotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const centralAvatarRotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const avatarRotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  // Create motion values for conditional transforms
  const isHoveringValue = useMotionValue(0);
  const pulseScale = useTransform(springX, [-0.5, 0.5], [1.2, 0.8]);

  useEffect(() => {
    isHoveringValue.set(isHovering ? 1 : 0);
  }, [isHovering, isHoveringValue]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (avatarRef.current) {
        const rect = avatarRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Normalize mouse position relative to avatar center
        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);
        
        // Clamp values between -0.5 and 0.5
        const clampedX = Math.max(-0.5, Math.min(0.5, x));
        const clampedY = Math.max(-0.5, Math.min(0.5, y));
        
        setMousePosition({ x: clampedX, y: clampedY });
        mouseX.set(clampedX);
        mouseY.set(clampedY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Tech icons data
  const techIcons = [
    { icon: Code, position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-4', delay: 0 },
    { icon: Terminal, position: 'top-1/2 right-0 translate-x-4 -translate-y-1/2', delay: 0.25 },
    { icon: Cpu, position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-4', delay: 0.5 },
    { icon: Zap, position: 'top-1/2 left-0 -translate-x-4 -translate-y-1/2', delay: 0.75 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light via-primary/5 to-secondary/5 dark:from-dark dark:via-primary/10 dark:to-secondary/10">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Hi, I'm Alex
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-dark dark:text-light/80 mb-8 leading-relaxed"
            >
              A passionate <span className="text-primary font-semibold">Full-Stack Developer</span> crafting digital experiences that blend creativity with functionality.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow duration-300"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-semibold transition-all duration-300"
              >
                Download CV
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6 text-primary" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 max-w-md"
          >
            <motion.div
              ref={avatarRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative cursor-pointer"
            >
              {/* Main Tech Avatar Container */}
              <div className="w-80 h-80 mx-auto relative">
                {/* Outer Glow Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    scale: isHovering ? 1.05 : 1,
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary p-1 opacity-80"
                >
                  <div className="w-full h-full rounded-full bg-light dark:bg-dark"></div>
                </motion.div>

                {/* Interactive Glow Effect */}
                <motion.div
                  style={{
                    x: floatX,
                    y: floatY,
                    opacity: isHovering ? 0.6 : 0.3,
                  }}
                  className="absolute inset-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl"
                />

                {/* Tech Grid Background */}
                <motion.div
                  style={{
                    rotateX: techGridRotateX,
                    rotateY: techGridRotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 backdrop-blur-sm border border-primary/20 overflow-hidden"
                >
                  {/* Binary Code Animation */}
                  <div className="absolute inset-0 opacity-20">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ y: -100 }}
                        animate={{ y: 400 }}
                        style={{
                          x: floatX,
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.3
                        }}
                        className="absolute text-xs font-mono text-primary"
                        style={{ left: `${10 + i * 12}%` }}
                      >
                        {Array.from({ length: 20 }).map((_, j) => (
                          <div key={j} className="mb-2">
                            {Math.random() > 0.5 ? '1' : '0'}
                          </div>
                        ))}
                      </motion.div>
                    ))}
                  </div>

                  {/* Central Avatar */}
                  <motion.div
                    style={{
                      rotateX: centralAvatarRotateX,
                      rotateY: centralAvatarRotateY,
                      transformStyle: "preserve-3d",
                      scale: isHovering ? 1.1 : 1,
                    }}
                    className="absolute inset-8 rounded-full bg-gradient-to-br from-white to-light dark:from-dark-light dark:to-dark border-2 border-primary/30 flex items-center justify-center overflow-hidden"
                  >
                    {/* Tech Pattern Background */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.05
                            }}
                            className="border border-primary/20"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Developer Avatar */}
                    <div className="relative z-10 text-6xl">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        style={{
                          rotateY: avatarRotateY,
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        👨‍💻
                      </motion.div>
                    </div>

                    {/* Interactive Holographic Overlay */}
                    <motion.div
                      animate={{ 
                        background: [
                          'linear-gradient(45deg, transparent 30%, rgba(127, 90, 240, 0.1) 50%, transparent 70%)',
                          'linear-gradient(45deg, transparent 40%, rgba(255, 84, 112, 0.1) 60%, transparent 80%)',
                          'linear-gradient(45deg, transparent 30%, rgba(127, 90, 240, 0.1) 50%, transparent 70%)'
                        ]
                      }}
                      style={{
                        opacity: isHovering ? 0.8 : 0.4,
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-full"
                    />
                  </motion.div>
                </motion.div>

                {/* Floating Tech Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {techIcons.map((item, index) => (
                    <FloatingTechIcon
                      key={index}
                      icon={item.icon}
                      position={item.position}
                      delay={item.delay}
                      floatX={floatX}
                      floatY={floatY}
                      springX={springX}
                      springY={springY}
                      isHovering={isHovering}
                    />
                  ))}
                </motion.div>

                {/* Interactive Pulse Rings */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    style={{
                      scale: isHovering ? pulseScale : 1,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full border-2 border-primary/30"
                  />
                ))}

                {/* Mouse Trail Effect */}
                <motion.div
                  style={{
                    x: floatX,
                    y: floatY,
                    opacity: isHovering ? 0.8 : 0,
                  }}
                  className="absolute inset-0 rounded-full border-2 border-secondary/50 pointer-events-none"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;