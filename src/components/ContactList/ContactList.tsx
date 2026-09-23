import type { ContactItem } from '../../types/resume';
import { cx } from '../../utils/cx';
import styles from './ContactList.module.css';

interface ContactListProps {
  items: ContactItem[];
}

export const ContactList = ({ items }: ContactListProps) => {
  return (
    <ul className={styles['contact-list']}>
      {items.map((item) => (
        <li key={item.id} className={styles['contact-list__item']}>
          <span aria-hidden="true">{item.icon}</span>
          {item.href ? (
            <a
              className={cx(
                styles['contact-list__link'],
                item.isPlaceholder && styles['contact-list__link--placeholder'],
              )}
              href={item.href}
            >
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
