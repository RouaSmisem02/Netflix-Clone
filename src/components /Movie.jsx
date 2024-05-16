import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import axios from "axios";
import Movie from "./Movie";
import ModalMovie from "./ModalMovie";

const MovieList = ({ moviesData }) => {
    const [showModal, setShowModal] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const fetchFavoriteMovies = async () => {
            try {
                const response = await axios.get("https://movie-management.onrender.com/getmovie");
                setFavoriteMovies(response.data);
            } catch (error) {
                console.log(error);
            }
        };

  return (
    <Card style={{ width: '20rem', marginBottom: '20px', backgroundColor: '#B8B8B8', fontFamily: 'Arial, sans-serif' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${item.posterPath}`} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        {showDescription ? (
          <div>
            <Card.Text>{item.overview}</Card.Text>
            <Button variant="link" onClick={toggleDescription} style={{ color: 'blue', fontWeight: 'bold' }}>View Less</Button>
          </div>
        ) : (
          <div>
            <Card.Text>{item.overview.substring(0, 100)}...</Card.Text>
            <Button variant="link" onClick={toggleDescription} style={{ color: 'blue', fontWeight: 'bold' }}>View More</Button>
          </div>
        )}
        <Button variant="primary" onClick={() => showModal(item)} style={{ marginTop: '10px', backgroundColor: 'white', color: 'blue', fontWeight: 'bold', width: '100%' }}>
          Add to Favorites Page
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieList;
