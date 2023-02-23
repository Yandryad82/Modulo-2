import React from 'react';

const DutiesList = ({ dutieList, deleteDutie, selectDutie }) => {
  return (
    <div className="dutie-list">
      <h1>Duties List</h1>
      <ul>
        {dutieList.map((dutie) => (
          <li key={dutie.id}>
            <h4>{dutie.title}</h4>

            <div>
              <b>Description: </b>
              {dutie.description}
            </div>

            <div>
              <b>Is Completed: </b>
              {dutie.isCompleted.toString()}
            </div>
            <div className='container-general-btn'>
             <button className='delete-btn' onClick={() => deleteDutie(dutie)}>Delete</button>
             <button className='select-btn' onClick={() => selectDutie(dutie)}>Select</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DutiesList;