import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personalInfo } from '@/data/portfolio';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LOADING_DURATION = 1800;
const RADIUS = 44;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const loadingMessages = [
  'Initializing systems',
  'Loading assets',
  'Compiling components',
  'Establishing connection',
  'Ready',
];

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const pct = Math.min(((now - start) / LOADING_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isLoading]);

  const roundedProgress = Math.round(progress);
  const messageIndex = Math.min(
    Math.floor((progress / 100) * (loadingMessages.length - 1)),
    loadingMessages.length - 1,
  );

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-6 overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="bg-grid absolute inset-0 opacity-40" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_65%)]" />

          <div className="relative flex h-28 w-28 items-center justify-center">
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={RADIUS}
                fill="none"
                stroke="rgba(59,130,246,0.15)"
                strokeWidth="3"
              />
              <circle
                cx="50"
                cy="50"
                r={RADIUS}
                fill="none"
                stroke="#22d3ee"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE - (CIRCUMFERENCE * progress) / 100}
                style={{ filter: 'drop-shadow(0 0 6px rgba(34,211,238,0.85))' }}
              />
            </svg>
            <div
              className="text-lg font-bold text-cyan-300"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {personalInfo.initials}
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-2">
            <p className="text-xs font-medium tracking-[0.2em] text-blue-300/80 uppercase">
              {loadingMessages[messageIndex]}
              <span className="typing-cursor">_</span>
            </p>
            <p
              className="text-sm font-semibold text-cyan-300"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {roundedProgress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
