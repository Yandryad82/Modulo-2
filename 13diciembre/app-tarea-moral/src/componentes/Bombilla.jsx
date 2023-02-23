import React, { useState } from 'react';
import './Bombilla.css'


const Bombilla = () => {

  const [estado, setEstado] = useState(true);

  const [estadoTitulo, setestadoTitulo] = useState(true);

  const [estadoEmoji, setestadoEmoji] = useState(true);

  const [textSpan, settextSpan] = useState(true)

  const cambioEstado = () => {
    setEstado(!estado);
    setestadoTitulo(!estadoTitulo);
    setestadoEmoji(!estadoEmoji);
    settextSpan(!textSpan);
  }

  return (

    <div className='contenedor-general'>
      <div className='contenedor-titulo-emoji'>
        <i class={`${estadoEmoji ? 'bx bx-happy bx-md bx-tada' : 'bx bx-sad bx-md '}`}></i>
        <h1>{(estadoTitulo) ? 'Encendido' : 'Apagado'}</h1>
      </div>
      <div className={`contenedor-bombilla ${estado ? 'encendido' : 'apagado'}`}>

      </div>

      <div className='contenedor-boton'>
        <button className='boton' onClick={cambioEstado}>
          <span>{(textSpan) ? 'APAGAR' : 'ENCENDER'}</span>
        </button>
      </div>
    </div>

  );
};

export default Bombilla;