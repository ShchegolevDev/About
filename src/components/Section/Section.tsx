import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { cx } from '../../utils/cx';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export const Section = ({ id, title, children }: SectionProps) => {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cx(styles.section, isVisible && styles['section--visible'])}
    >
      <h2 className={styles.section__title}>{title}</h2>
      {children}
    </section>
  );
};
