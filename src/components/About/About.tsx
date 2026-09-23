import { Section } from '../Section/Section';
import { ABOUT_TEXT } from '../../data/resumeData';
import styles from './About.module.css';

export const About = () => {
  return (
    <Section id="about" title="Обо мне">
      <p className={styles.about__text}>{ABOUT_TEXT}</p>
    </Section>
  );
};
