import styles from './PrintButton.module.css';

export const PrintButton = () => {
  return (
    <button
      type="button"
      className={styles['print-button']}
      onClick={() => window.print()}
      data-print-hide
    >
      🖨️ Сохранить в PDF
    </button>
  );
};
