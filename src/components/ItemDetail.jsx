import React from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../mockData/mockData';
import Carousel from './Carousel';
import '../styles/ItemDetail.css';

const ItemDetail = () => {
    const { id } = useParams();
    const product = mockData.find((item) => item.id === parseInt(id));

    if (!product) return <div>Producto no encontrado</div>;

    return (
        <div className="product-detail">
            <div className="product-carousel">
                
                <Carousel images={product.images} interval={4000} />
            </div>
            <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Precio: ${product.price}</p>
                <button className="add-to-cart">Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemDetail;
