import { Section } from '../Section/Section';
import { COURSES_PLACEHOLDER_TEXT } from '../../data/resumeData';
import styles from './Courses.module.css';

export const Courses = () => {
  return (
    <Section id="courses" title="Курсы и доп. образование">
      <div className={styles.courses__placeholder}>{COURSES_PLACEHOLDER_TEXT}</div>
    </Section>
  );
};
