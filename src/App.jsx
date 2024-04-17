import { useState } from 'react';
import './App.css';
import { restaurants } from '../db.json';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import Header from './components/Header/Header';
// import AddRestaurantModal from './components/Modal/AddRestaurantModal/AddRestaurantModal';
// import RestaurantInfoModal from './components/Modal/RestaurantInfoModal/RestaurantInfoModal';

import RestaurantList from './components/RestaurantList/RestaurantList';

function App() {
  const [category, setCategory] = useState('전체');
  const filteredRestaurants = category === '전체' ? restaurants : restaurants.filter((restaurant) => restaurant.category === category);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} setCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} />
      </main>
      <aside>
        {/* <RestaurantInfoModal /> */}
        {/* <AddRestaurantModal /> */}
      </aside>
    </>
  );
}

export default App;
