import { useEffect, useState } from 'react';

export const useDelayedVisible = (delayMs: number): boolean => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setVisible(true), delayMs);
    return () => window.clearTimeout(timeoutId);
  }, [delayMs]);

  return visible;
};
