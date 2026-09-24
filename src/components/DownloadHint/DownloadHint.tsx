import { useEffect, useState } from 'react';
import { useDelayedVisible } from '../../hooks/useDelayedVisible';
import { cx } from '../../utils/cx';
import styles from './DownloadHint.module.css';

const APPEAR_DELAY_MS = 5000;
const HOLD_DURATION_MS = 6000;
const LEAVE_DURATION_MS = 600;

export const DownloadHint = () => {
  const isVisible = useDelayedVisible(APPEAR_DELAY_MS);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      return;
    }
    const leaveTimeoutId = window.setTimeout(() => setIsLeaving(true), HOLD_DURATION_MS);
    return () => window.clearTimeout(leaveTimeoutId);
  }, [isVisible]);

  useEffect(() => {
    if (!isLeaving) {
      return;
    }
    const unmountTimeoutId = window.setTimeout(() => setIsMounted(false), LEAVE_DURATION_MS);
    return () => window.clearTimeout(unmountTimeoutId);
  }, [isLeaving]);

  if (!isVisible || !isMounted) {
    return null;
  }

  return (
    <svg
      className={cx(styles.hint, isLeaving && styles['hint--leaving'])}
      viewBox="0 0 130 96"
      aria-hidden="true"
      data-print-hide
    >
      <path className={styles.hint__path} d="M14 12 C 60 18, 88 40, 108 76" strokeLinecap="round" />
      <path
        className={styles.hint__head}
        d="M96 68 L108 76 L92 82"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
