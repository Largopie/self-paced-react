import styles from './restaurant-list.module.css';
import IMAGE_SOURCE from '../../../templates';

export default function RestaurantList({ restaurants }) {
  return (
    <section className={styles.restaurantListContainer}>
      <ul className={styles.restaurantList}>
        {restaurants.map(({ id, name, description, category }) => (
          <li key={id} className={styles.restaurant}>
            <div className={styles.restaurantCategory}>
              <img src={IMAGE_SOURCE[category]} alt={category} className='category-icon' />
            </div>
            <div className={styles.restaurantInfo}>
              <h3 className={`${styles.restaurantName} text-subtitle`}>{name}</h3>
              <p className={`${styles.restaurantDescription} text-body`}>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
