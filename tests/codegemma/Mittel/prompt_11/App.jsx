import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button onClick={handlePreviousImage}>Vorherige</button>
      <button onClick={handleNextImage}>Nächste</button>
    </div>
  );
};

export default ImageCarousel;