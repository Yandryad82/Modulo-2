import React from 'react';
import axios from 'axios';
import { useEffect, useState} from 'react';

const ResidentCard = ({url}) => {
   
const [residentInfo, SetResidentInfo] = useState({});

useEffect(() => {
 axios.get(url).then((res) => SetResidentInfo(res.data));
}, []);

//console.log(residentInfo);
   
    return (
        <div>
            <li>
                <div>
                   {residentInfo.name}
                   <img src={residentInfo?.image} alt="" /> 
                </div>
            </li>
        </div>
    );
};

export default ResidentCard;