function SobreMi(){
    
        
    return (
        <div className='caja'>
          <h1 className='titulo'>Sobre Mi</h1>
        
          <ul>
            <li>Nombre: {me.nombre}</li>
            <li>Película: {me.film}</li>
            <li>Musica: {me.music}</li>
          </ul>
        
          <div className='contenedor-boton'>
           <button className='boton' onClick={sayHi}>TOCAR</button>
          </div>
       </div>
    )
}

export default SobreMi;