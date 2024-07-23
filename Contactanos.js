import React, { useState, useEffect } from 'react';

function Contactanos({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="layout">
      <h2>Contáctanos</h2>
      <p>Nos puedes encontrar por todo el internet... y si te animas, en tu casa tambien</p>
      <img 
        src={images.length > 0 ? images[currentImageIndex].url : ''} 
        alt={images.length > 0 ? `Cat ${images[currentImageIndex].id}` : 'Cargandi...'} 
        style={{ width: '80%', height: 'auto' }} 
      />
    </div>
  );
}

export default Contactanos;
