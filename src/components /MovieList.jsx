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

        fetchFavoriteMovies();
    }, []);

    const handleCloseModal = () => setShowModal(false);

    const handleShowModal = (item) => {
        setShowModal(true);
        setClickedMovie(item);
    };

    return (
        <>
            <Row>
                {moviesData.map(item => (
                    <Col key={item.id}>
                        <Movie item={item} showModal={handleShowModal} />
                    </Col>
                ))}
            </Row>
            <ModalMovie 
                show={showModal} 
                handleClose={handleCloseModal} 
                clickedMovie={clickedMovie} 
                favoriteMovies={favoriteMovies} 
                setFavoriteMovies={setFavoriteMovies} 
            />
        </>
    );
};

export default MovieList;