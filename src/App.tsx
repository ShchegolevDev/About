import { About } from './components/About/About';
import { Courses } from './components/Courses/Courses';
import { DownloadHint } from './components/DownloadHint/DownloadHint';
import { Experience } from './components/Experience/Experience';
import { PrintButton } from './components/PrintButton/PrintButton';
import { Projects } from './components/Projects/Projects';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SoftSkills } from './components/SoftSkills/SoftSkills';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { useForceOpenDetailsOnPrint } from './hooks/useForceOpenDetailsOnPrint';
import styles from './App.module.css';

export const App = () => {
  useForceOpenDetailsOnPrint();

  return (
    <div className={styles.app}>
      <ThemeToggle />
      <div className={styles.app__page}>
        <Sidebar />
        <main className={styles.app__content}>
          <About />
          <Experience />
          <Projects />
          <SoftSkills />
          <Courses />
        </main>
      </div>
      <PrintButton />
      <DownloadHint />
    </div>
  );
};
