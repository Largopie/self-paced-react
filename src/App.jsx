import './App.css';
import Header from './components/Header/Header';
import AddRestaurantModal from './components/Modal/AddRestaurantModal/AddRestaurantModal';
import RestaurantInfoModal from './components/Modal/RestaurantInfoModal/RestaurantInfoModal';
import RestaurantFilter from './components/RestaurantFilter/RestaurantFilter';
import RestaurantList from './components/RestaurantList/RestaurantList';

function App() {
  return (
    <>
      <Header />
      <main>
        <RestaurantFilter />
        <RestaurantList />
      </main>
      <aside>
        <RestaurantInfoModal />
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
