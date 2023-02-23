import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const ToDosList = () => {
  const toDos = useSelector((state) => state.toDos);

  return (
    <div className="container-toDos">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Module</th>
            <th>Description</th>
            <th>IsComplete</th>
          </tr>
        </thead>
        
        <tbody>
          {toDos.map((toDo) => (
            <tr key={toDo.id}>
              <td>{toDo.id}</td>
              <td>{toDo.name}</td>
              <td>{toDo.module}</td>
              <td>{toDo.description}</td>
              <td>{toDo.isComplete.toString()}</td>
              
            </tr>
          ))}
        </tbody>
        
      </Table>
      
    </div>
  );
};

export default ToDosList;
