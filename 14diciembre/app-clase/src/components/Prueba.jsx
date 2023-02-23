import React from 'react';
import users from './usersData.json';

const Prueba = () => {
    
    const nombre = users[1].name.first
    
    return (
        <div>
           <h1>{nombre}</h1> 
        </div>
    );
};

export default Prueba;