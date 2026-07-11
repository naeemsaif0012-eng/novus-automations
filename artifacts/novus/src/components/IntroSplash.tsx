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
            className="flex items-center justify-center text-foreground font-sans font-light tracking-[0.1em] sm:tracking-[0.13em] md:tracking-[0.15em] select-none lowercase text-[3.15rem] sm:text-[4rem] md:text-[4.95rem] lg:text-[5.85rem] leading-none"
          >
            <span className="text-[1.0em]">n</span>
            <div className="relative w-[0.9em] h-[0.9em] mx-[0.045em] flex items-center justify-center">
              {/* Outer slow ring */}
              <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 32 32"
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              >
                <motion.g
                  animate={{ rotate: -180 }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '16px 16px' }}
                >
                  <circle cx="16" cy="3" r="1.75" fill="currentColor" opacity="0.9" />
                  <circle cx="24.4" cy="7" r="1.1" fill="currentColor" opacity="0.55" />
                  <circle cx="28" cy="16" r="2.2" fill="currentColor" opacity="1" />
                  <circle cx="24.4" cy="25" r="1.1" fill="currentColor" opacity="0.45" />
                  <circle cx="16" cy="29" r="1.75" fill="currentColor" opacity="0.8" />
                  <circle cx="7.6" cy="25" r="1.1" fill="currentColor" opacity="0.35" />
                  <circle cx="4" cy="16" r="2.2" fill="currentColor" opacity="0.9" />
                  <circle cx="7.6" cy="7" r="1.1" fill="currentColor" opacity="0.65" />
                </motion.g>
              </motion.svg>
              {/* Inner fast ring - Primary Accent */}
              <motion.svg
                width="60%"
                height="60%"
                viewBox="0 0 18 18"
                className="absolute text-primary"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                <g style={{ transformOrigin: '9px 9px' }}>
                  <circle cx="9" cy="1.2" r="1.2" fill="currentColor" opacity="0.95" />
                  <circle cx="16" cy="6" r="1.75" fill="currentColor" opacity="1" />
                  <circle cx="13.5" cy="16" r="1.1" fill="currentColor" opacity="0.55" />
                  <circle cx="4.2" cy="15" r="1.1" fill="currentColor" opacity="0.8" />
                  <circle cx="3" cy="5" r="1.1" fill="currentColor" opacity="0.65" />
                </g>
              </motion.svg>
            </div>
            <span className="text-[1.03em]">vus</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
