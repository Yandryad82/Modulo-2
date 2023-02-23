import React from "react";
import '../css/Hobbies.css';

function Hobbies({ titulo }) {
  return (
    <div className="contenedor-hoobies">
      <div className="contenedor-titulo-hobbies">
        <h2>{titulo}</h2>
      </div>

      <div className="contenedor-texto">
        <ul>
          <li>Pescar</li>
          <li>Deportes</li>
          <li>TV</li>
        </ul>
      </div>

    </div>
  );
};

export default Hobbies;