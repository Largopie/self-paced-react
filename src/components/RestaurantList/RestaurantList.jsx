import styles from './restaurant-list.module.css';
import IMAGE_SOURCE from '../../../templates';

export default function RestaurantList({ restaurants, setDetailRestaurant, openDetail }) {
  const onClick = (restaurant) => {
    setDetailRestaurant(restaurant);
    openDetail();
  };

  return (
    <section className={styles.restaurantListContainer}>
      <ul className={styles.restaurantList}>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} onClick={() => onClick(restaurant)} className={styles.restaurant}>
            <div className={styles.restaurantCategory}>
              <img src={IMAGE_SOURCE[restaurant.category]} alt={restaurant.category} className='category-icon' />
            </div>
            <div className={styles.restaurantInfo}>
              <h3 className={`${styles.restaurantName} text-subtitle`}>{restaurant.name}</h3>
              <p className={`${styles.restaurantDescription} text-body`}>{restaurant.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
