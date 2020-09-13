import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h1>Total Movies Are: {movies.length}</h1>
    </div>
  );
}

export default Nav;
