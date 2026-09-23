import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

interface UseRevealResult<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isVisible: boolean;
}

export const useReveal = <T extends HTMLElement>(threshold = 0.15): UseRevealResult<T> => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};
