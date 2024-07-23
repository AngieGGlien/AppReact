import React, { useState, useEffect } from 'react';
import './App.css';
import Navegacion from './componentes/Nav';
import Home from './componentes/Home';
import Conocenos from './componentes/Conocenos';
import Adopta from './componentes/Adopta';
import Contactanos from './componentes/Contactanos';
import Footer from './componentes/Ppage';

function App() {
  const [section, setSection] = useState('home');
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    const data = await response.json();
    setImages(data);
  };

  return (
    <div className="App">
      <h1>🐱Gatitos😻</h1>
      <Navegacion showContent={setSection} />
      <main>
        {section === 'home' && <Home />}
        {section === 'Conocenos' && <Conocenos />}
        {section === 'Adopta' && <Adopta />}
        {section === 'Contactanos' && <Contactanos images={images} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
