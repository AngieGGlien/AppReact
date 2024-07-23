import React, { useState, useEffect } from 'react';
import Form from './Form';
import Tabla from './Tabla';

function Adopta() {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('adoptData');
    if (storedData) {
      setDataArr(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('adoptData', JSON.stringify(dataArr));
  }, [dataArr]);

  const downloadJSON = (dataArr) => {
    const jsonData = JSON.stringify(dataArr);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Karens.json';
    link.click();
    URL.revokeObjectURL(url);
    alert("Datos Descargados");
    setDataArr([]);
  };

  return (
    <div className="layout">
      <div>
        <h2>Solicitud Adopción</h2>
        <Form setDataArr={setDataArr} />
      </div>
      <div>
        <div className="container">
          <div id="lista"><Tabla dataArr={dataArr} setDataArr={setDataArr} /></div>
        </div>
        <button type="button" onClick={() => downloadJSON(dataArr)} id="downloadButton" disabled={dataArr.length === 0}>Descargar Historico</button>
      </div>
    </div>
  );
}

export default Adopta;
