import React from 'react';
import '../styles/CartModal.css';

const CartModal = ({ onClose }) => {
    return (
        <div className="cart-modal-overlay" onClick={onClose}>
            <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
                <h2>Tu Carrito</h2>
                <p>Aquí se mostrarán los productos añadidos al carrito.</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default CartModal;