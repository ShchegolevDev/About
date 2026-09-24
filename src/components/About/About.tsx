import { Section } from '../Section/Section';
import { ABOUT_PARAGRAPHS } from '../../data/resumeData';
import styles from './About.module.css';

export const About = () => {
  return (
    <Section id="about" title="Обо мне">
      {ABOUT_PARAGRAPHS.map((paragraph) => (
        <p key={paragraph} className={styles.about__text}>
          {paragraph}
        </p>
      ))}
    </Section>
  );
};
