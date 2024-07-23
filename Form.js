import React, { useState } from 'react';

function Form({ setDataArr }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adopt, setAdopt] = useState('');
  const [concentimiento, setConcentimiento] = useState(false);

  const saveData = () => {
    if (name && email && adopt) {
      const data = { name, email, adopt, concentimiento };
      setDataArr((prevData) => [...prevData, data]);
      alert("Solicitud enviada");
      setName('');
      setEmail('');
      setAdopt('');
      setConcentimiento(false);
    } else {
      alert('Formulario incompleto');
    }
  };

  return (
    <form id="dataForm">
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <label htmlFor="adopt">Cantidad a Adoptar: </label>
      <input type="number" id="adopt" value={adopt} onChange={(e) => setAdopt(e.target.value)} min="1" /><br /><br />
      <label htmlFor="concentimiento">Acepta ser contactado</label>
      <input type="checkbox" id="concentimiento" checked={concentimiento} onChange={(e) => setConcentimiento(e.target.checked)} /><br /><br />
      <button type="button" id="enviarButton" onClick={saveData}>Eviar Solicitud</button>
    </form>
  );
}

export default Form;
