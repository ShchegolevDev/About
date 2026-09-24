import { Avatar } from '../Avatar/Avatar';
import { ContactList } from '../ContactList/ContactList';
import { SkillTags } from '../SkillTags/SkillTags';
import { TypewriterRole } from '../TypewriterRole/TypewriterRole';
import { CONTACTS, PERSONAL_INFO, TECH_SKILL_GROUPS } from '../../data/resumeData';
import photo from '../../assets/photo.jpg';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Avatar initials="ВЩ" alt={PERSONAL_INFO.name} photoSrc={photo} />
      <h1 className={styles.sidebar__name}>{PERSONAL_INFO.name}</h1>
      <TypewriterRole text={PERSONAL_INFO.role} />

      <section className={styles.sidebar__section}>
        <h2 className={styles['sidebar__section-title']}>Контакты</h2>
        <ContactList items={CONTACTS} />
        <p className={styles.sidebar__note}>{PERSONAL_INFO.citizenshipNote}</p>
      </section>

      <section className={styles.sidebar__section}>
        <h2 className={styles['sidebar__section-title']}>Технологии</h2>
        <div className={styles['sidebar__skill-groups']}>
          {TECH_SKILL_GROUPS.map((group) => (
            <div key={group.id} className={styles['sidebar__skill-group']}>
              <h3 className={styles['sidebar__skill-group-title']}>{group.label}</h3>
              <SkillTags skills={group.skills} variant="sidebar" />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.sidebar__section}>
        <h2 className={styles['sidebar__section-title']}>Образование</h2>
        <p className={styles.sidebar__education}>
          {PERSONAL_INFO.education}
          <br />
          <span className={styles['sidebar__education-meta']}>{PERSONAL_INFO.educationMeta}</span>
        </p>
      </section>
    </aside>
  );
};
