import { Section } from '../Section/Section';
import { ExperienceItem } from './ExperienceItem';
import { EXPERIENCE } from '../../data/resumeData';
import styles from './Experience.module.css';

export const Experience = () => {
  return (
    <Section id="experience" title="Опыт работы">
      <div className={styles.timeline}>
        {EXPERIENCE.map((entry, index) => (
          <ExperienceItem key={entry.id} entry={entry} isLatest={index === 0} />
        ))}
      </div>
    </Section>
  );
};
