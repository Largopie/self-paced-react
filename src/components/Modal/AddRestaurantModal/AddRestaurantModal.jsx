import Modal from '../Modal';
import styles from './add-restaurant-modal.module.css';

export default function AddRestaurantModal() {
  return (
    <Modal>
      <h2 className={`${styles.modalTitle} text-title`}>새로운 음식점</h2>
      <form>
        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor='category text-caption'>카테고리</label>
          <select name='category' id='category' required>
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
          <input type='text' name='name' id='name' required />
        </div>
        <div className={styles.formItem}>
          <label htmlFor='description text-caption'>설명</label>
          <textarea name='description' id='description' cols='30' rows='5'></textarea>
          <span className={`${styles.helpText} text-caption`}>메뉴 등 추가 정보를 입력해 주세요.</span>
        </div>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${styles.buttonPrimary} text-caption`}>추가하기</button>
        </div>
      </form>
    </Modal>
  );
}
