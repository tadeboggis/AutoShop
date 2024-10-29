import React from 'react';
import mockData from '../mockData/mockData';
import ItemCard from './ItemCard';

function ItemListContainer({ category }) {
  const items = category ? mockData.filter(item => item.category === category) : mockData;

  return (
    <div className="item-list">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemListContainer;