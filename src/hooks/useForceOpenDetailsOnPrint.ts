import { useEffect } from 'react';

// Forces every achievements list open before printing, regardless of what
// the visitor collapsed on screen, so nothing is missing from the PDF.
export const useForceOpenDetailsOnPrint = (): void => {
  useEffect(() => {
    const openAllDetails = () => {
      document.querySelectorAll<HTMLDetailsElement>('details').forEach((details) => {
        details.open = true;
      });
    };

    window.addEventListener('beforeprint', openAllDetails);
    return () => window.removeEventListener('beforeprint', openAllDetails);
  }, []);
};
