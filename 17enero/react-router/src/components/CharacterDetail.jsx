import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CharacterDetail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setCharacter(res.data));
  }, [id]);
  
  return (
    <div>
      <h1>Character detail</h1>
      <p>Mostrando personaje de id: {id}</p>
      <p>{character.name}</p>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <img src={character.image} alt="" />
    </div>
  );
};

export default CharacterDetail;
