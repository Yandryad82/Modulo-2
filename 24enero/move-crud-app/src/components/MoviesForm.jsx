import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createMovieThunk } from "../store/slices/moviesList.slice";

const MoviesForm = () => {

    const {register, handleSubmit, reset} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        console.log(data)
        dispatch(createMovieThunk(data))
        reset()
    }
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control {...register('name')} type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="genre">
        <Form.Label>Genero</Form.Label>
        <Form.Control {...register('genre')} type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="duration">
        <Form.Label>Duracción</Form.Label>
        <Form.Control {...register('duration')} type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="release_date">
        <Form.Label>Fecha de Extreno</Form.Label>
        <Form.Control {...register('release_date')} type="date"  />
      </Form.Group>
      <Button variant="success" type="submit">
        Success
      </Button>
    </Form>
  );
};

export default MoviesForm;
