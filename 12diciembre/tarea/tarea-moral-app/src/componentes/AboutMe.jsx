import React from "react";
import '../css/AboutMe.css';

function AboutMe({titulo, nombreUsuario}) {
  return(
    <div className="contenedor-aboutme">
      <div className="contenedor-titulo">
        <h2>{titulo}</h2>
      </div>
      
      <div className="contenedor-texto">
      <ul>
        <li>{nombreUsuario}</li>
        <li>Serie La que se Avecina</li>
        <li>Salsa</li>
      </ul>
      </div>
      
    </div>
  );
};

export default AboutMe;