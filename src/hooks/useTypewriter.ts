import { useEffect, useState } from 'react';

export const useTypewriter = (text: string, speedMs = 55): string => {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = window.setInterval(() => {
      index += 1;
      setTyped(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(intervalId);
      }
    }, speedMs);

    return () => window.clearInterval(intervalId);
  }, [text, speedMs]);

  return typed;
};
