import React from 'react';
import '../css/UsersItems.css'

const UsersItems = ({users}) => (
  <div className='container-app'>
    <div className='container-data'>
     <ul className='container-lista'>
        {users.map((user) => (
          <li className='container'>
            <p><b>{user.name.title} {user.name.first} {user.name.last}</b></p>
            <img src={user.picture.large} alt="" />
          </li>
        ))}
      </ul>
    </div>
  </div>
);  

export default UsersItems;