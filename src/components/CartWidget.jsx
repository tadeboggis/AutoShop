import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-widget">
      <span>🛒</span>
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </Link>
  );
};

export default CartWidget;
