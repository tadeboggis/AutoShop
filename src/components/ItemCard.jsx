import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ItemCard.css';

const ItemCard = ({ vehicle }) => {
  return (
    <div className="item-card">
      <img src={vehicle.image} alt={vehicle.name} className="item-card-image" />
      <h3>{vehicle.name}</h3>
      <p>{vehicle.description}</p>
      <Link to={`/product/${vehicle.id}`} className="details-link">Ver detalles</Link>
    </div>
  );
};

export default ItemCard;