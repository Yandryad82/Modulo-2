import '../css/Food.css'

function Food({titulo}) {
  return(
    <div className="contenedor-food">
      <div className="contenedor-titulo-food">
        <h2>{titulo}</h2>
      </div>
      
      <div className="contenedor-texto">
      <ul>
        <li>Comida cubana</li>
        <li>Pescados y Mariscos</li>
        <li>Pastas</li>
      </ul>
      </div>
      
    </div>
  );
};

export default Food;