import { useState } from 'react';
import Modal from '../Modal';
import styles from './add-restaurant-modal.module.css';

export default function AddRestaurantModal({ addRestaurant, closeAddRestaurant }) {
  const [restaurant, setRestaurant] = useState({
    name: '',
    category: '',
    description: '',
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addRestaurant(restaurant);
    closeAddRestaurant();
  };

  return (
    <Modal close={closeAddRestaurant}>
      <h2 className={`${styles.modalTitle} text-title`}>새로운 음식점</h2>
      <form onSubmit={onSubmitHandler}>
        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor='category text-caption'>카테고리</label>
          <select
            value={restaurant.category}
            onChange={(e) => setRestaurant({ ...restaurant, category: e.target.value })}
            name='category'
            id='category'
            required
          >
            <option value=''>선택해 주세요</option>
            <option value='한식'>한식</option>
            <option value='중식'>중식</option>
            <option value='일식'>일식</option>
            <option value='양식'>양식</option>
            <option value='아시안'>아시안</option>
            <option value='기타'>기타</option>
          </select>
        </div>
        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor='name text-caption'>이름</label>
          <input type='text' name='name' id='name' value={restaurant.name} onChange={(e) => setRestaurant({ ...restaurant, name: e.target.value })} required />
        </div>
        <div className={styles.formItem}>
          <label htmlFor='description text-caption'>설명</label>
          <textarea
            name='description'
            id='description'
            cols='30'
            rows='5'
            value={restaurant.description}
            onChange={(e) => setRestaurant({ ...restaurant, description: e.target.value })}
          ></textarea>
          <span className={`${styles.helpText} text-caption`}>메뉴 등 추가 정보를 입력해 주세요.</span>
        </div>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${styles.buttonPrimary} text-caption`}>추가하기</button>
        </div>
      </form>
    </Modal>
  );
}
