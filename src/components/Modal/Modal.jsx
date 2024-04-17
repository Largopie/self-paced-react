import styles from './modal.module.css';

export default function Modal({ children, close }) {
  return (
    <div className={`${styles.modal} ${styles.modalOpen}`}>
      <div onClick={close} className={styles.modalBackdrop}></div>
      <div className={styles.modalContainer}>{children}</div>
    </div>
  );
}
