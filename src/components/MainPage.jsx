import RestaurantFilter from './RestaurantFilter/RestaurantFilter';
import RestaurantList from './RestaurantList/RestaurantList';

export default function MainPage() {
  return (
    <main>
      <RestaurantFilter />
      <RestaurantList />
    </main>
  );
}
