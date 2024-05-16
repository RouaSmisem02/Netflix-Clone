import React from 'react';
import MovieList from './MovieList';

const FavList = () => {
    return (
        <div>
            <h2>Favorite Movies</h2>
            <MovieList isFavPage={true} />
        </div>
    );
}

export default FavList;
