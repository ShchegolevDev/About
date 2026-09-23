import { useTypewriter } from '../../hooks/useTypewriter';
import styles from './TypewriterRole.module.css';

interface TypewriterRoleProps {
  text: string;
}

export const TypewriterRole = ({ text }: TypewriterRoleProps) => {
  const typed = useTypewriter(text);

  return <p className={styles.role}>{typed}</p>;
};
