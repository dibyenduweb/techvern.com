/* eslint-disable no-unused-vars */
// src/components/Home/Carousel.jsx
import React, { useEffect, useState } from 'react';

const images = [
  'https://iili.io/dmL4FkJ.png',
  'https://iili.io/dmL4Kmv.png',
  'https://iili.io/dmL4BXp.png',
];


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover max-h-30" // Adjust max height here
            />
          </div>
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200"
        onClick={prevSlide}
      >
        &#9664;
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200"
        onClick={nextSlide}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
