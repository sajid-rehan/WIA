import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    const newIndex = currentImageIndex - 1;
    if (newIndex < 0) newIndex = images.length - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNextImage = () => {
    const newIndex = currentImageIndex + 1;
    if (newIndex >= images.length) newIndex = 0;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="image-carousel">
      <button onClick={goToPreviousImage}>Previous</button>
      <img src={images[currentImageIndex]} alt="" />
      <button onClick={goToNextImage}>Next</button>
    </div>
  );
};

export default ImageCarousel;