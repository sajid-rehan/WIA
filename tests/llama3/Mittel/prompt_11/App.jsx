import { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Carousel image"
          className={`carousel-image ${
            currentIndex === index ? 'active' : ''
          }`}
        />
      ))}
      <button onClick={handlePreviousClick} className="previous">
        Vorwärts
      </button>
      <button onClick={handleNextClick} className="next">
        Rückwärts
      </button>
    </div>
  );
};