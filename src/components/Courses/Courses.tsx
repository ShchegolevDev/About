import { Section } from '../Section/Section';
import { COURSES } from '../../data/resumeData';
import styles from './Courses.module.css';

export const Courses = () => {
  return (
    <Section id="courses" title="Курсы и доп. образование">
      <div className={styles.courses__grid}>
        {COURSES.map((course) => (
          <div key={course.id} className={styles.courses__card}>
            <h3 className={styles.courses__title}>{course.title}</h3>
            <p className={styles.courses__meta}>
              {course.org}
              {course.meta ? ` · ${course.meta}` : ''}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
