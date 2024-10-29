import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const formatPrice = (price) =>
    price.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handleWhatsAppRedirect = () => {
    const itemsDescription = cart.map(item => `${item.quantity}x ${item.name}`).join(", ");
    const message = encodeURIComponent(`Hola, quiero finalizar mi compra de ${itemsDescription} por un total de $${formatPrice(total)}.`);
    const phoneNumber = "549123456789"; 
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">Precio: ${formatPrice(item.price)}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => decrementQuantity(item.id)} className="quantity-button">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)} className="quantity-button">+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            Total: ${formatPrice(total)}
          </div>
          <button className="cart-checkout-button" onClick={handleWhatsAppRedirect}>
            Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;