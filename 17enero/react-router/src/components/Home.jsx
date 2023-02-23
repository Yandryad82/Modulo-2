import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Ruta home</h1>
      <Link to="/characters">Ir a characters</Link>
    </div>
  );
};

export default Home;
