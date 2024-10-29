import React from 'react';
import ItemCard from './ItemCard';
import vehicles from '../mockData/mockData';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>Bienvenido a Auto Shop</h1>
        <p>El mejor lugar para encontrar el auto de tus sueños. Explora nuestra amplia gama de autos, SUVs y eléctricos.</p>
      </div>
      <div className="product-list">
        {vehicles.map(vehicle => (
          <ItemCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Home;