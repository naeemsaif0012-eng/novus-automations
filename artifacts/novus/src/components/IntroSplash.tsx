import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const holdTimer = setTimeout(() => setVisible(false), prefersReducedMotion ? 400 : 2400);
    return () => {
      clearTimeout(holdTimer);
      // Fallback: guarantee scroll is restored even if the component unmounts
      // before the exit-animation's onExitComplete fires (e.g. HMR, fast unmount).
      document.body.style.overflow = '';
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = '';
      }}
    >
      {visible && (
        <motion.div
          key="intro-splash"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.7, ease: easeOut }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 1, ease: easeOut }}
            className="flex items-center text-foreground font-sans font-light tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] select-none uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl"
          >
            <span>N</span>
            <div className="relative w-[0.85em] h-[0.85em] mx-[0.08em] flex items-center justify-center">
              {/* Outer slow ring */}
              <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 28 28"
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              >
                <motion.g
                  animate={{ rotate: -180 }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '14px 14px' }}
                >
                  <circle cx="14" cy="3" r="1.5" fill="currentColor" opacity="0.9" />
                  <circle cx="21.7" cy="6.3" r="1" fill="currentColor" opacity="0.5" />
                  <circle cx="25" cy="14" r="2" fill="currentColor" opacity="1" />
                  <circle cx="21.7" cy="21.7" r="1" fill="currentColor" opacity="0.4" />
                  <circle cx="14" cy="25" r="1.5" fill="currentColor" opacity="0.8" />
                  <circle cx="6.3" cy="21.7" r="1" fill="currentColor" opacity="0.3" />
                  <circle cx="3" cy="14" r="2" fill="currentColor" opacity="0.9" />
                  <circle cx="6.3" cy="6.3" r="1" fill="currentColor" opacity="0.6" />
                </motion.g>
              </motion.svg>
              {/* Inner fast ring - Primary Accent */}
              <motion.svg
                width="57%"
                height="57%"
                viewBox="0 0 16 16"
                className="absolute text-primary"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                <g style={{ transformOrigin: '8px 8px' }}>
                  <circle cx="8" cy="1" r="1" fill="currentColor" opacity="0.9" />
                  <circle cx="14" cy="5" r="1.5" fill="currentColor" opacity="1" />
                  <circle cx="12" cy="13" r="1" fill="currentColor" opacity="0.5" />
                  <circle cx="3" cy="12" r="1" fill="currentColor" opacity="0.8" />
                  <circle cx="2" cy="4" r="1" fill="currentColor" opacity="0.6" />
                </g>
              </motion.svg>
            </div>
            <span>VUS</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
