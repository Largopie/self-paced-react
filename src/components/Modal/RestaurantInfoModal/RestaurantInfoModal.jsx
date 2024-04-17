import styles from './restaurant-info-modal.module.css';
import Modal from '../Modal';

export default function RestaurantInfoModal({ restaurant, closeDetail }) {
  return (
    <Modal close={closeDetail}>
      <h2 className={`${styles.modalTitle} text-title`}>{restaurant.name}</h2>
      <div className={styles.restaurantInfo}>
        <p className={`${styles.restaurantInfoDescription} text-body`}>{restaurant.description}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={closeDetail} className={`${styles.button} ${styles.buttonPrimary} text-caption`}>
          닫기
        </button>
      </div>
    </Modal>
  );
}
