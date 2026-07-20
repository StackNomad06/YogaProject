import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `end` once the element is in view.
 * Returns [ref, value] — attach ref to the element that triggers the count.
 */
export function useCounter(end, { duration = 1800, start = false } = {}) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease-out cubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [start, end, duration]);

  return value;
}
