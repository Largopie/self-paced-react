import styles from './restaurant-info-modal.module.css';
import Modal from '../Modal';

export default function RestaurantInfoModal() {
  return (
    <Modal>
      <h2 className={`${styles.modalTitle} text-title`}>음식점 이름</h2>
      <div className={styles.restaurantInfo}>
        <p className={`${styles.restaurantInfoDescription} text-body`}>음식점 소개 문구</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.buttonPrimary} text-caption`}>닫기</button>
      </div>
    </Modal>
  );
}
