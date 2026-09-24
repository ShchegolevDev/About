import type { ExperienceEntry } from '../../types/resume';
import { SkillTags } from '../SkillTags/SkillTags';
import { cx } from '../../utils/cx';
import styles from './Experience.module.css';

interface ExperienceItemProps {
  entry: ExperienceEntry;
  isLatest?: boolean;
}

export const ExperienceItem = ({ entry, isLatest }: ExperienceItemProps) => {
  return (
    <article className={styles.timeline__item}>
      <span className={cx(styles.timeline__dot, isLatest && styles['timeline__dot--latest'])} />
      <div className={styles.timeline__content}>
        <div className={styles.timeline__header}>
          <h3 className={styles.timeline__role}>{entry.role}</h3>
          <span className={styles.timeline__period}>
            {entry.period} · {entry.duration}
          </span>
        </div>
        <p className={styles.timeline__company}>{entry.company}</p>
        {entry.projectNote && <p className={styles.timeline__note}>{entry.projectNote}</p>}
        <SkillTags skills={entry.stack} variant="stack" />
        {entry.responsibilities && (
          <p className={styles.timeline__responsibilities}>{entry.responsibilities}</p>
        )}
        <details className={styles.timeline__achievements} open>
          <summary className={styles['timeline__achievements-summary']}>Ключевые достижения</summary>
          <ul className={styles['timeline__achievements-list']}>
            {entry.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </details>
      </div>
    </article>
  );
};
