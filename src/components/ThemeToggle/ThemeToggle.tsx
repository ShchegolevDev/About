import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      type="button"
      className={styles['theme-toggle']}
      onClick={toggleTheme}
      aria-label="Переключить тему"
      data-print-hide
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};
