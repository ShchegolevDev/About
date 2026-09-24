import { Section } from "../Section/Section";
import { PROJECTS } from "../../data/resumeData";
import { cx } from "../../utils/cx";
import styles from "./Projects.module.css";

export const Projects = () => {
  if (PROJECTS.length === 0) {
    return null;
  }

  return (
    <Section id="projects" title="Пет-проекты">
      <div className={styles.projects__grid}>
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className={cx(
              styles.projects__card,
              project.isPlaceholder && styles["projects__card--placeholder"],
            )}
          >
            <h3 className={styles.projects__title}>{project.title}</h3>
            <p className={styles.projects__description}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
