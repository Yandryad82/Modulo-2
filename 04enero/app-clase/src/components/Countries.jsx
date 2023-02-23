import axios from "axios";
import React, { useEffect, useState } from "react";
import ComponentConutries from "./ComponentConutries";

const Countries = () => {
  
    const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  console.log(countries);

  return (
    <div>
       <h1>Countries list</h1>
      {countries.map((country) => (
        <ComponentConutries country={country}/>
      ))}
    </div>
  );
};

export default Countries;