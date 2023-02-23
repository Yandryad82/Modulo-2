import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectsId = () => {
    
    const {id} = useParams();
    
    return (
        <div>
            <h1>Projects</h1>
            <p>Info del proyecto: <span>{id}</span></p>
        </div>
    );
};

export default ProjectsId;