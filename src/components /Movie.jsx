import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Movie = ({ item, showModal }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${item.posterPath}`} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        {showDescription ? (
          <div>
            <Card.Text>{item.overview}</Card.Text>
            <Button variant="link" onClick={toggleDescription}>View Less</Button>
          </div>
        ) : (
          <div>
            <Card.Text>{item.overview.substring(0, 100)}...</Card.Text>
            <Button variant="link" onClick={toggleDescription}>View More</Button>
          </div>
        )}
        <Button variant="primary" onClick={() => showModal(item)} style={{ marginTop: '10px' }}>
          Add to Favorites
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Movie;
