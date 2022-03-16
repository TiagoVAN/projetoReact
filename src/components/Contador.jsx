import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0)

  const aumentar = () => {
    setContador(contador + 1);
  }

  const descontar = () => {
    setContador(contador - 1);
  }


  return (
    <div className="App">
      <h3> Contador: {contador} </h3>
      <button type='btn' onClick={aumentar}>Aumentar</button>
      <button onClick={descontar}>Diminuir</button>
    </div>
  );
}
export default Contador;


