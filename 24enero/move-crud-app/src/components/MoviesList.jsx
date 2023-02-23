import React from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovieThunk } from "../store/slices/moviesList.slice";

const MoviesList = () => {
  
  const moviesList = useSelector((state) => state.moviesList);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h1>Movies list</h1>
      <Row xs={1} md={1} lg={2} className="g-4">
        {moviesList.map((movie) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  {movie.name}
                </Card.Title>
              </Card.Body>
              
              <ListGroup className="list-group-flush">
              <ListGroup.Item>
                  <b>Género: </b> {movie.genre}
                </ListGroup.Item>

                <ListGroup.Item>
                  <b>Duración: </b> {movie.duration}
                </ListGroup.Item>
                
                <ListGroup.Item>
                  <b>Lanzamiento: </b>
                  {movie.release_date}
                </ListGroup.Item>
              </ListGroup>
              <Button
                variant="danger"
                onClick={() => dispatch(deleteMovieThunk(movie.id))}
              >
                Eliminar
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MoviesList;
