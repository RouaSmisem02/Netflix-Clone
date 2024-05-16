import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ModalMovie from './ModalMovie';

const Movie = ({ item, showModal }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [cardHeight, setCardHeight] = useState('300px'); // Initial height

  const toggleDescription = () => {
    setShowDescription(!showDescription);
    // Update card height dynamically based on whether "Show More" or "Show Less" is clicked
    setCardHeight(showDescription ? '300px' : 'auto');
  };

  return (
    <>
      <Card style={{ width: '18rem', marginBottom: '20px', backgroundColor: '#B8B8B8', fontFamily: 'Arial, sans-serif' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${item.posterPath}`} />
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
          <Button variant="primary" onClick={() => showModal(item)} style={{ marginTop: '10px', backgroundColor: 'white', color: 'blue', fontWeight: 'bold', width: '100%' }}>
            Add a Comment
          </Button>
        </Card.Body>
      </Card>
      {/* <ModalMovie movie={item} show={showModal} handleClose={() => setShowModal(false)} /> */}
      {/* Uncomment the line above if you're using this component */}
    </>
  );
};

export default MovieList;
