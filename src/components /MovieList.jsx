import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Movie from './Movie';
import ModalMovie from './ModalMovie';

function MovieList({ moviesData }) {
  const [showModal, setShowModal] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleClose = () => setShowModal(false);

  const handleShowModal = (item) => {
    setShowModal(true);
    setClickedMovie(item);
  };

  useEffect(() => {
    const getAllFavMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getmovie');
        console.log(response.data);
        setFavoriteMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllFavMovies();
  }, []);

  return (
    <>
      <Row>
        {moviesData.map((item) => (
          <Col key={item.id}>
            <Movie item={item} showModal={handleShowModal} />
          </Col>
        ))}
      </Row>
      <ModalMovie show={showModal} handleClose={handleClose} clickedMovie={clickedMovie} />
    </>
  );
}

export default MovieList;
