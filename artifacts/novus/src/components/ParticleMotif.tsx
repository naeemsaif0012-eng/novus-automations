import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ParticleMotif({ className = "", count = 30 }: { className?: string, count?: number }) {
  const [dots, setDots] = useState<Array<{x: number, y: number, r: number, isPrimary: boolean, opacity: number}>>([]);

  useEffect(() => {
    // Generate only on client to avoid hydration mismatch
    setDots(Array.from({ length: count }).map(() => ({
      x: Math.random() * 400,
      y: Math.random() * 400,
      r: Math.random() * 2 + 0.5,
      isPrimary: Math.random() > 0.8,
      opacity: Math.random() * 0.5 + 0.1
    })));
  }, [count]);

  return (
    <div className={`absolute pointer-events-none opacity-20 select-none ${className}`}>
       <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="min-w-[400px] min-h-[400px]"
        >
          {dots.map((dot, i) => (
            <circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r={dot.r}
              fill={dot.isPrimary ? "currentColor" : "#ffffff"}
              className={dot.isPrimary ? "text-primary" : ""}
              opacity={dot.opacity}
            />
          ))}
       </motion.svg>
    </div>
  )
}