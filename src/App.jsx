import { useEffect, useState } from 'react';
import './App.css';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import Header from './components/Header/Header';
import RestaurantInfoModal from './components/Modal/RestaurantInfoModal/RestaurantInfoModal';
import AddRestaurantModal from './components/Modal/AddRestaurantModal/AddRestaurantModal';

import RestaurantList from './components/RestaurantList/RestaurantList';
import { getRestaurants } from './api/restaurant-api';

function App() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [category, setCategory] = useState('전체');
  const filteredRestaurants = category === '전체' ? restaurantList : restaurantList.filter((restaurant) => restaurant.category === category);

  const [detailRestaurant, setDetailRestaurant] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const closeDetail = () => setIsDetailOpen(false);
  const openDetail = () => setIsDetailOpen(true);

  const [isAddRestaurantOpen, setIsAddRestaurantOpen] = useState(false);

  const closeAddRestaurant = () => setIsAddRestaurantOpen(false);
  const openAddRestaurant = () => setIsAddRestaurantOpen(true);

  const fetchRestaurant = async () => {
    const data = await getRestaurants();

    setRestaurantList(data);
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <>
      <Header openAddRestaurant={openAddRestaurant} />
      <main>
        <CategoryFilter category={category} setCategory={setCategory} />
        <RestaurantList openDetail={openDetail} setDetailRestaurant={setDetailRestaurant} restaurants={filteredRestaurants} />
      </main>
      <aside>
        {isDetailOpen && <RestaurantInfoModal restaurant={detailRestaurant} closeDetail={closeDetail} />}
        {isAddRestaurantOpen && <AddRestaurantModal closeAddRestaurant={closeAddRestaurant} />}
      </aside>
    </>
  );
}

export default App;
