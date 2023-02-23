import React from 'react';
import '../css/Card.css'

const Card = ({ titulo, item1, item2, item3, background }) => {
    return (

        <div className='contenedor-principal-card' style={{background:background}}>
            <div className='contenedor-titulo-card'>
                <h1>{titulo}</h1>
            </div>
            <div className='contenedor-items-card'>
                <ul>
                    <li>{item1}</li>
                    <li>{item2}</li>
                    <li>{item3}</li>
                </ul>
            </div>
            
        </div>

    );
};

export default Card;