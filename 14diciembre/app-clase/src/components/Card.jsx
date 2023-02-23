import { useState } from 'preact/hooks';
import React from 'react';
import '../css/Card.css';
import users from './usersData.json';

const Card = () => {

    const [index, setindex] = useState(Math.floor(Math.random() * users.length))

    const cambiar = () => {
        
        setindex(Math.floor(Math.random() * users.length))
    }

    return (
        <div className='general-container'>
            <div className='general-title-container'>
                <div className='contenedor-tarjeta'>
                    <div className='contenedor-centro'>
                        <h1>{users[index].name.title} {users[index].name.first} {users[index].name.last}</h1>

                        <img src={users[index].picture.large} alt="" />
                        <div className='container-email'>
                            <span><i class="fa-solid fa-envelope"></i></span>
                            <p>{users[index].email}</p>
                        </div>

                        <div className='container-phone'>
                            <span><i class="fa-solid fa-phone"></i></span>
                            <p>{users[index].phone}</p>
                        </div>
                        <div className='container-location'>
                            <span><i class="fa-solid fa-location-dot"></i></span>
                            <p>{users[index].location.city}</p>
                        </div>
                        <div className='btn'>
                          <button onClick={cambiar}>Cambiar</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Card;