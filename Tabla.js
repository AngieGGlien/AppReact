import React from 'react';

function Tabla({ dataArr, setDataArr }) {
  const editarElemento = (index) => {
    const element = dataArr[index];
    document.getElementById('name').value = element.name;
    document.getElementById('email').value = element.email;
    document.getElementById('adopt').value = element.adopt;
    document.getElementById('concentimiento').checked = element.concentimiento;

    const newDataArr = [...dataArr];
    newDataArr.splice(index, 1);
    setDataArr(newDataArr);
  };

  const eliminarElemento = (index) => {
    const newDataArr = [...dataArr];
    newDataArr.splice(index, 1);
    setDataArr(newDataArr);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Ingreso</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Cantidad</th>
          <th>Seguimiento</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {dataArr.map((p, index) => (
          <tr key={index}>
            <td>{new Date().toLocaleString()}</td>
            <td>{p.name}</td>
            <td>{p.email}</td>
            <td>{p.adopt}</td>
            <td>{p.concentimiento ? 'Sí' : 'No'}</td>
            <td>
              <button onClick={() => editarElemento(index)}>Editar</button>
              <button onClick={() => eliminarElemento(index)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
