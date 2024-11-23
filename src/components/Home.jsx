import React from 'react';
import ItemCard from './ItemCard';
import vehicles from '../mockData/mockData';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>Bienvenido a AutoShop</h1>
        <p>El mejor lugar para encontrar el auto de tus sueños.</p>
      </div>
      <div className="product-list">
        {vehicles.map((vehicle) => (
          <ItemCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Home;