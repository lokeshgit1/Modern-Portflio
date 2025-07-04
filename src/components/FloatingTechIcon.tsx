import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FloatingTechIconProps {
  icon: LucideIcon;
  position: string;
  delay: number;
  floatX: MotionValue<number>;
  floatY: MotionValue<number>;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  isHovering: boolean;
}

const FloatingTechIcon: React.FC<FloatingTechIconProps> = ({
  icon: Icon,
  position,
  delay,
  floatX,
  floatY,
  springX,
  springY,
  isHovering,
}) => {
  // Transform values for this specific icon
  const iconFloatX = useTransform(floatX, (x) => x * (1 + delay));
  const iconFloatY = useTransform(floatY, (y) => y * (1 + delay));
  const iconRotateX = useTransform(springY, [-0.5, 0.5], [20, -20]);
  const iconRotateY = useTransform(springX, [-0.5, 0.5], [-20, 20]);

  return (
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className={`absolute ${position}`}
    >
      <motion.div
        whileHover={{ scale: 1.3, z: 50 }}
        style={{
          x: iconFloatX,
          y: iconFloatY,
          rotateX: iconRotateX,
          rotateY: iconRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -10, 0],
          scale: isHovering ? [1, 1.2, 1] : [1, 1.1, 1],
        }}
        transition={{
          duration: 2 + delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 2,
        }}
        className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20 cursor-pointer"
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>
    </motion.div>
  );
};

export default FloatingTechIcon;