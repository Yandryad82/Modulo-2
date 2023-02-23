import '../css/FreeTime.css'

function FreeTime({titulo}) {
  return(
    <div className="contenedor-freetime">
      <div className="contenedor-titulo-freetime">
        <h2>{titulo}</h2>
      </div>
      
      <div className="contenedor-texto">
      <ul>
        <li>Ir de Pesca</li>
        <li>Practicar Deportes</li>
        <li>Ver Series</li>
      </ul>
      </div>
      
    </div>
  );
};

export default FreeTime;