import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ModalMovie from './ModalMovie'; // Assuming ModalMovie and MovieList are correctly imported
import MovieList from './MovieList'; // Assuming this import is needed

const Movie = ({ item, showModal, isFavPage, handleDelete }) => { // Added handleDelete prop
  const [showDescription, setShowDescription] = useState(false);
  const [cardHeight, setCardHeight] = useState('300px'); 

  const toggleDescription = () => {
    setShowDescription(!showDescription);
    setCardHeight(showDescription ? '400px' : 'auto');
  };

  return (
    <>
      <Card style={{ width: '18rem', marginBottom: '20px', backgroundColor: '#B8B8B8', fontFamily: 'Arial, sans-serif' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${isFavPage?item.poster_path:item.posterPath}`} />
        <Card.Body style={{ height: cardHeight, overflow: 'hidden' }}> {/* Dynamic height for card body */}
          <Card.Title>{item.title}</Card.Title>
          {item.comment && (
            <Card.Text>
              <strong>Comment:</strong> {item.comment}
            </Card.Text>
          )}
          <div style={{ maxHeight: showDescription ? 'none' : '100px', overflow: 'hidden' }}>
            <Card.Text>{item.overview}</Card.Text>
          </div>
          <Button variant="link" onClick={toggleDescription} style={{ color: 'blue', fontWeight: 'bold' }}>
            {showDescription ? 'Show Less' : 'Show More'}
          </Button>
          {!isFavPage && (
            <Button variant="primary" onClick={() => showModal(item)} style={{ marginTop: '10px', backgroundColor: 'white', color: 'blue', fontWeight: 'bold', width: '100%' }}>
              Add a Comment
            </Button>
          )}
          {isFavPage && (
            <>
              <Button variant="primary" onClick={() => showModal(item)} style={{ marginTop: '10px', backgroundColor: 'white', color: 'blue', fontWeight: 'bold', width: '100%' }}>
                Update a Comment
              </Button>
              <Button variant="danger" onClick={() => handleDelete(item.id)} style={{ marginTop: '10px', fontWeight: 'bold', width: '100%' }}>
                Delete Movie
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Movie; // Corrected export
