import React from 'react';

const ComponentConutries = ({country}) => (
 
 <li >
    {country.name.common}
    <img src={country.flags.png} alt="" />
</li>
);

export default ComponentConutries;