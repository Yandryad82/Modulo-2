import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const Tecnologies = () => {
    
    const navigate = useNavigate();

    const back =() => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Tecnologias</h1>
            <p>Esta empresa es increible</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odit voluptate repellendus iure, dolor possimus, ad ipsam hic quibusdam iste cumque, perspiciatis consequatur soluta. Consequuntur delectus voluptates tempora, eum possimus veritatis amet, ducimus quidem sunt molestias, porro quia ut expedita? Aliquid, in officia. Doloremque architecto laborum delectus veritatis animi ab?</p>
            <br />
            <button onClick={back}>Ir Atras</button>
        </div>
    );
};

export default Tecnologies;