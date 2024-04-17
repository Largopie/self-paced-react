import styles from './category-filter.module.css';

export default function CategoryFilter({ category, setCategory }) {
  return (
    <section className={styles.restaurantFilterContainer}>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        name='category'
        id='category-filter'
        className={styles.restaurantFilter}
        aria-label='음식점 카테고리 필터'
      >
        <option value='전체'>전체</option>
        <option value='한식'>한식</option>
        <option value='중식'>중식</option>
        <option value='일식'>일식</option>
        <option value='양식'>양식</option>
        <option value='아시안'>아시안</option>
        <option value='기타'>기타</option>
      </select>
    </section>
  );
}
