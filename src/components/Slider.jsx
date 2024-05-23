
import React, { useState } from 'react';


const Card = ({ name, price, rating }) => (
  <div className="card">
    <div className="card-content">
      <div className="rating">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <h3 className="name">{name}</h3>
      <p className="price">Price: <span className='price-color'>${price.toFixed(2)}</span></p>
      <button className="cart-btn">Add To Cart</button>
    </div>
  </div>
);

const CardSlider = () => {
  const cards = [
    { name: "Crispy Fried Chicken", price: 29.99, rating: 4 },
    { name: "Burger Patty Receipe", price: 39.99, rating: 5 },
    { name: "Must-Try Dishes", price: 19.99, rating: 3 },
    { name: "Tasty French Fries", price: 49.99, rating: 4 },
    { name: "Product 5", price: 24.99, rating: 2 },
    { name: "Product 6", price: 44.99, rating: 5 },
    { name: "Product 7", price: 34.99, rating: 3 },
    { name: "Product 8", price: 54.99, rating: 4 },
    { name: "Product 9", price: 24.99, rating: 2 },
    { name: "Product 10", price: 44.99, rating: 5 },
    { name: "Product 11", price: 34.99, rating: 3 },
    { name: "Product 12", price: 54.99, rating: 4 },
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 + cards.length) % cards.length);
  };

  return (
    <div className="slider-container">
      
      <div className="slider">
        {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      
      <div className="dots">
        {Array.from({ length: Math.ceil(cards.length / 4) }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === Math.floor(currentIndex / 4) ? 'actives' : ''}`}
            onClick={() => setCurrentIndex(index * 4)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
