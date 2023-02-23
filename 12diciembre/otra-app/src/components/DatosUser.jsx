import React from "react";
import '../css/DatosUser.css'

function DatosUser() {
  
  const sayHi = () => alert('HELLO WORD')

  const me = {
    nombre: 'Yandry Almaguer',
    film: 'Alien vs Predator',
    music: 'Salsa'
  }
  
  return(
    
    <div className='contenedor-tarjeta-sobreMi'>
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

export default DatosUser;