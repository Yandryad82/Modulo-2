import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import '../css/styles.css'
import { addToDo } from "../store/slices/toDos.slice";

const ToDosForms = () => {

  const {register, handleSubmit} = useForm();

  const dispatch = useDispatch();

  const submit = (data) => {
    console.log(data);
    data.id = Date.now();
    dispatch(addToDo(data));
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control {...register("name")} type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="module">
        <Form.Label>Name</Form.Label>
        <Form.Control {...register("module")} type="text" placeholder="Module" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control {...register("description")} as="textarea" rows={3} />
      </Form.Group>
      
      <Form.Check className="mb-3"
        type="checkbox"
        label={`is Complete ?`}
        id='isComplete'
        {...register("isComplete")}
      />
      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  );
};

export default ToDosForms;
