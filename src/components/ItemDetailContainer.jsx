import React from 'react';
import { useParams } from 'react-router-dom';
import vehicles from '../mockData/mockData';
import { useCart } from '../context/CartContext';
import Carousel from './Carousel';
import '../styles/ItemDetail.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id === parseInt(id));
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(vehicle);
  };

  if (!vehicle) {
    return <p>Vehículo no encontrado.</p>;
  }

  return (
    <div className="item-detail">
      <div className="product-carousel">
        <Carousel images={vehicle.images} interval={4000} />
      </div>
      <h1>{vehicle.name}</h1>
      <p className="description">{vehicle.description}</p>
      <p className="price">Precio: ${vehicle.price}</p>
      <button className="button" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;