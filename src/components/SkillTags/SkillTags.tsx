import { cx } from '../../utils/cx';
import styles from './SkillTags.module.css';

type SkillTagsVariant = 'sidebar' | 'stack' | 'soft';

interface SkillTagsProps {
  skills: string[];
  variant: SkillTagsVariant;
}

export const SkillTags = ({ skills, variant }: SkillTagsProps) => {
  return (
    <div className={cx(styles['skill-tags'], styles[`skill-tags--${variant}`])}>
      {skills.map((skill) => (
        <span key={skill} className={styles['skill-tags__chip']}>
          {skill}
        </span>
      ))}
    </div>
  );
};
