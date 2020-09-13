import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h1>
        {movies.map((movie) => (
          <Movie movies={movie.name} price={movie.price} key={movie.id} />
        ))}
      </h1>
    </div>
  );
}

export default MovieList;
