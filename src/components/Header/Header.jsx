import styles from './header.module.css';
import IMAGE_SOURCE from '../../../templates';

export default function Header() {
  return (
    <header className={styles.gnb}>
      <h1 className={`${styles.gnbTitle} text-title`}>점심 뭐 먹지</h1>
      <button type='button' className={styles.gnbButton} aria-label='음식점 추가'>
        <img src={IMAGE_SOURCE.음식점추가} alt='음식점 추가' />
      </button>
    </header>
  );
}
