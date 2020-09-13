import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export function MovieProvider(props) {
  const [movies, setMovies] = useState([
    {
      name: "Bishu Kahrel",
      price: "Rs.50",
      id: 6768,
    },
    {
      name: "Hero Bishu",
      price: "Rs.50",
      id: 6788,
    },
    {
      name: "Udum Hero",
      price: "Rs.50",
      id: 668,
    },
  ]);
  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
}
