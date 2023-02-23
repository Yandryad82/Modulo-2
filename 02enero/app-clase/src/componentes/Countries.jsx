import axios from "axios";
import React, { useEffect, useState } from "react";
import GetDataInfo from '../componentes/GetDataInfo'

const Countries = () => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/alpha/co").then((res) => {
      setCountry(res.data[0]);
      // dejar de cargar
      setIsLoading(false);
    });
  }, []);
  console.log(country);

  // const infoShowed = "location";
  const [infoShowed, setInfoShowed] = useState("demography");
  

  return (
    <div>
      {isLoading ? (
        <h1>Esta cargando!</h1>
      ) : (
        <>
          <h1>{country.name.official}</h1>
          <img src={country.flags.png} alt="" />
          <div>
            <button onClick={() => setInfoShowed("demography")}>Demography</button>
            <button onClick={() => setInfoShowed("location")}>Location</button>
            <button onClick={() => setInfoShowed("capital")}>Capital</button>
            <GetDataInfo infoShowed={infoShowed} country={country}/>
          </div>
          
          
        </>
      )}
    </div>
  );
};

export default Countries;