import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { cx } from '../../utils/cx';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  draftNote?: boolean;
  children: ReactNode;
}

export const Section = ({ id, title, draftNote, children }: SectionProps) => {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cx(styles.section, isVisible && styles['section--visible'])}
    >
      {draftNote && <span className={styles.section__draft}>Черновик — отредактируйте под себя</span>}
      <h2 className={styles.section__title}>{title}</h2>
      {children}
    </section>
  );
};
