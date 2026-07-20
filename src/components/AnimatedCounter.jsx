import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCounter } from '../hooks/useCounter.js';

export default function AnimatedCounter({ end, suffix = '+', label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const value = useCounter(end, { start: inView });

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
      <span className="font-heading text-4xl font-bold text-forest dark:text-sage sm:text-5xl">
        {value}
        {suffix}
      </span>
      <span className="text-sm font-medium text-forest-600/70 dark:text-beige/70 sm:text-base">
        {label}
      </span>
    </div>
  );
}
