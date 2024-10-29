import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from './ItemCard';
import mockdata from '../mockData/mockData';
import '../styles/VehicleList.css';

const VehicleList = () => {
  const { categoryName } = useParams();

  const filteredVehicles = mockdata.filter(
    (vehicle) => vehicle.category === categoryName
  );

  return (
    <div className="vehicle-list-container">
      <h2 className="category-title">{categoryName}</h2>
      <div className="vehicle-list">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((vehicle) => (
            <ItemCard key={vehicle.id} vehicle={vehicle} />
          ))
        ) : (
          <p>No hay vehículos disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default VehicleList;
