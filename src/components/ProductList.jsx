import React from 'react';
import ItemCard from './ItemCard';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products && products.length > 0 ? (
        products.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default ProductList;