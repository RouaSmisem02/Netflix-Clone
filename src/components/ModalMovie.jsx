import React from 'react';
import axios from 'axios';
import { Modal, Button, Card, Form } from 'react-bootstrap';

const ModalMovie = (props) => {
    const handleAddComment = async (e) => {
        e.preventDefault();
        const comment = e.target.comment.value || "";

        const movieData = {
            title: props.clickedMovie.title,
            release_date: props.clickedMovie.release_date,
            poster_path: props.clickedMovie.poster_path,
            overview: props.clickedMovie.overview,
            comment: comment
        };

        try {
            const response = await axios.post("https://movies-library-1-hydu.onrender.com/addMovie", movieData);
            console.log(response);
            console.log('Success');

            // Update the favorite movies list with the new movie data
            const updatedMovies = [...props.favoriteMovies, { ...movieData, id: response.data.id }];
            props.updateFavoriteMovies(updatedMovies);

            props.handleClose(); // Close the modal
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Movie Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w185${props.clickedMovie.poster_path}`}
                    width='100%'
                    style={{
                        width: "100%",
                        height: "400px"
                    }}
                />
                <h3 style={{ textAlign: "center" }}>{props.clickedMovie.title}</h3>
                {props.clickedMovie.comment && (
                    <p><strong>Comment:</strong> {props.clickedMovie.comment}</p>
                )}
                <Form onSubmit={handleAddComment}>
                    <Form.Group className="mb-3">
                        <Form.Label>Add a comment</Form.Label>
                        <Form.Control name='comment' placeholder="Enter your comment" />
                    </Form.Group>
                    <Button variant="primary" type='submit'>
                        Submit and Add to Favorite Page
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalMovie;
