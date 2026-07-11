import { motion } from 'framer-motion';

export function Logo() {
  return (
    <div className="flex items-center text-foreground font-sans font-light tracking-[0.12em] text-base select-none lowercase leading-none">
      <span className="text-[1.1rem]">n</span>
      <div className="relative w-8 h-8 mx-[0.05em] flex items-center justify-center">
        {/* Outer slow ring */}
        <motion.svg
          width="32"
          height="32"
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
          width="18"
          height="18"
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
      <span className="text-[1.15rem]">vus</span>
    </div>
  );
}
