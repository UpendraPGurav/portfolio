import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { useTiltEffect } from '@/hooks/useTiltEffect';

interface GlassCardProps extends PropsWithChildren {
  className?: string;
  hover?: boolean;
  tilt?: boolean;
}

export function GlassCard({ children, className = '', hover = true, tilt = false }: GlassCardProps) {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTiltEffect({ max: 6 });

  return (
    <motion.div
      ref={tilt ? ref : undefined}
      onMouseMove={tilt ? handleMouseMove : undefined}
      onMouseLeave={tilt ? handleMouseLeave : undefined}
      style={tilt ? { rotateX, rotateY, transformPerspective: 800 } : undefined}
      className={`glass rounded-2xl shadow-xl shadow-black/5 dark:shadow-black/40 ${className}`}
      whileHover={
        hover
          ? {
              y: -6,
              borderColor: 'rgba(34,211,238,0.45)',
              boxShadow:
                '0 0 0 1px rgba(34,211,238,0.25), 0 22px 45px -18px rgba(59,130,246,0.45)',
              transition: { duration: 0.25 },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
