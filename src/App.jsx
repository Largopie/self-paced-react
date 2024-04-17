import { useState } from 'react';
import './App.css';
import { restaurants } from '../db.json';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import Header from './components/Header/Header';
import RestaurantInfoModal from './components/Modal/RestaurantInfoModal/RestaurantInfoModal';
// import AddRestaurantModal from './components/Modal/AddRestaurantModal/AddRestaurantModal';

import RestaurantList from './components/RestaurantList/RestaurantList';

function App() {
  const [category, setCategory] = useState('전체');
  const filteredRestaurants = category === '전체' ? restaurants : restaurants.filter((restaurant) => restaurant.category === category);

  const [detailRestaurant, setDetailRestaurant] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const closeDetail = () => setIsDetailOpen(false);
  const openDetail = () => setIsDetailOpen(true);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} setCategory={setCategory} />
        <RestaurantList openDetail={openDetail} setDetailRestaurant={setDetailRestaurant} restaurants={filteredRestaurants} />
      </main>
      <aside>
        {isDetailOpen && <RestaurantInfoModal restaurant={detailRestaurant} closeDetail={closeDetail} />}
        {/* <AddRestaurantModal closeAddRestaurant={closeDetail} /> */}
      </aside>
    </>
  );
}

export default App;
