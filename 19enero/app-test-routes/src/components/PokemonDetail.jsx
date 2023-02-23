import React, { useState } from 'react';
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
    
    const { id } = useParams();
    const [enviar, setEnviar] = useState('');

    return (
        <div>
            <h1>Pokemon Details: {id} {enviar}</h1>
            <input type="text"
            value={enviar}
            onChange={(e) => setEnviar(e.target.value)} />
            <button>Enviar</button>
        </div>
    );
};

export default PokemonDetail;