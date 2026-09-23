import styles from './Avatar.module.css';

interface AvatarProps {
  initials: string;
  alt: string;
  photoSrc?: string;
}

export const Avatar = ({ initials, alt, photoSrc }: AvatarProps) => {
  return (
    <div className={styles['avatar-wrap']}>
      <div className={styles.avatar}>
        {photoSrc ? (
          <img className={styles.avatar__image} src={photoSrc} alt={alt} />
        ) : (
          <span>{initials}</span>
        )}
      </div>
    </div>
  );
};
