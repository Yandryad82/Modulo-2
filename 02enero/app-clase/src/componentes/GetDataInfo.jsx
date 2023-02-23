import React from 'react';

const GetDataInfo = ({ infoShowed, country }) => {
    if (infoShowed === "demography") {
      return (
        <>
          <h3>Demography</h3>
          <p>
            <b>Population: </b>
            {country.population}
          </p>
          <p>
            <b>Area: </b>
            {country.area} km2
          </p>
        </>
      );
    } else if (infoShowed === "location") {
      return (
        <>
          <h3>Location</h3>
          <p>
            <b>Continent: </b>
            {country.continents?.[0]}
          </p>
          <p>
            <b>Region: </b>
            {country.region}
          </p>
          <p>
            <b>Subregion: </b>
            {country.subregion}
          </p>
        </>
      );
    } else {
      return (
        <>
          <h3>Capital</h3>
          <p>
            <b>Capital: </b> {country.capital?.[0]}
          </p>
        </>
      );
    }
  };
  
  export default GetDataInfo;
  
  
  
