import styles from './modal.module.css';

export default function Modal({ children }) {
  return (
    <div className={`${styles.modal} ${styles.modalOpen}`}>
      <div className={styles.modalBackdrop}></div>
      <div className={styles.modalContainer}>{children}</div>
    </div>
  );
}
