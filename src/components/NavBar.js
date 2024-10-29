import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/NavBar.css';

const NavBar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">AutoShop</Link>
      <div className="categories">
        <Link to="/category/Sedans">Sedans</Link>
        <Link to="/category/SUVs">SUVs</Link>
        <Link to="/category/Eléctricos">Eléctricos</Link>
      </div>
      <div className="navbar-cart">
        <Link to="/cart" className="cart-icon">
          🛒
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
