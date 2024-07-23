import React from 'react';

function Navegacion({ showContent }) {
  return (
    <nav>
      <a href="#" onClick={() => showContent('home')}>Home</a>
      <a href="#" onClick={() => showContent('Conocenos')}>Quienes Somos</a>
      <a href="#" onClick={() => showContent('Adopta')}>Adopta</a>
      <a href="#" onClick={() => showContent('Contactanos')}>Contactanos</a>
    </nav>
  );
}

export default Navegacion;
