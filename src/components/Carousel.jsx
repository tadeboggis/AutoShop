import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Carousel.css';

const Carousel = ({ images = [], interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    if (images.length > 0) {
      setCurrent((current + 1) % images.length);
    }
  }, [current, images.length]);

  useEffect(() => {
    if (images.length === 0) return; 
    const autoSlide = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(autoSlide);
  }, [current, interval, images, nextSlide]);

  const prevSlide = () => {
    if (images.length > 0) {
      setCurrent((current - 1 + images.length) % images.length);
    }
  };

  if (images.length === 0) {
    return <div>No hay imágenes disponibles</div>;
  }

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevSlide}>{'<'}</button>
      <img src={`/images/${images[current]}`} alt={`Imagen ${current + 1}`} className="carousel-image" />
      <button className="carousel-button right" onClick={nextSlide}>{'>'}</button>
    </div>
  );
};

export default Carousel;