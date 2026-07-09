import { motion } from 'framer-motion';

export function Logo() {
  return (
    <div className="flex items-center text-foreground font-sans font-light tracking-[0.25em] text-xl select-none uppercase">
      <span>N</span>
      <div className="relative w-7 h-7 mx-[0.1em] flex items-center justify-center">
        {/* Outer slow ring */}
        <motion.svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <motion.g
            animate={{ rotate: -180 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "14px 14px" }}
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
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="absolute text-primary"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <g style={{ transformOrigin: "8px 8px" }}>
            <circle cx="8" cy="1" r="1" fill="currentColor" opacity="0.9" />
            <circle cx="14" cy="5" r="1.5" fill="currentColor" opacity="1" />
            <circle cx="12" cy="13" r="1" fill="currentColor" opacity="0.5" />
            <circle cx="3" cy="12" r="1" fill="currentColor" opacity="0.8" />
            <circle cx="2" cy="4" r="1" fill="currentColor" opacity="0.6" />
          </g>
        </motion.svg>
      </div>
      <span>VUS</span>
    </div>
  );
}