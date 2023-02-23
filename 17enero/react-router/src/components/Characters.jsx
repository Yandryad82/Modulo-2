import React, { useEffect, useState } from "react";
import axios from "axios";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => setCharacters(res.data.results));
  }, []);

  console.log(characters);

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
