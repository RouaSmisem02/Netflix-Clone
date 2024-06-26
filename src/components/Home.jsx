import axios from "axios";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";

function Home() {
    const [moviesData, setMoviesData] = useState([]);


    const getAllMovies = () => {

        const serURL = `https://movie-management.onrender.com/trending`;

            axios.get(serURL)

                .then(response => {
                    //console.log(response.data);
                    setMoviesData(response.data);
                })
                .catch((error) => {
                    console.log(error)
                })
    }
    useEffect(() => {
        getAllMovies();
    }, []);
    return (
        <>
            <MovieList moviesData={moviesData} isFavPage={false} />

        </>
    )
}

export default Home;