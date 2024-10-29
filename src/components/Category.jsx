import React from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../mockData/mockData';
import ItemCard from './ItemCard';
import '../styles/Category.css';

const Category = () => {
    const { categoryName } = useParams();
    const filteredProducts = mockData.filter((item) => item.category === categoryName);

    return (
        <div className="category-page">
            <h2>{categoryName}</h2>
            <div className="category-products">
                {filteredProducts.map((product) => (
                    <ItemCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Category;
