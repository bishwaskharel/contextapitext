import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const[movies, setMovies] = useContext(MovieContext);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChange2 = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
    setName("");
    setPrice("");
  };

  return (
    <div>
      <br></br>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            border: "none",
            backgroundColor: "Black",
            color: "white",
            borderRadius: "1rem",
            padding: "1rem",
            margin: "1rem",
          }}
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter Movie Name"
        />
        <input
          style={{
            border: "none",
            borderRadius: "1rem",
            backgroundColor: "Black",
            color: "white",
            margin: "1rem",
            padding: "1rem",
          }}
          type="number"
          value={price}
          onChange={handleChange2}
          placeholder="Enter Price"
        />
        <button
          style={{
            border: "none",
            borderRadius: "1rem",
            backgroundColor: "Blue",
            justifyContent: "center",
            color: "white",
            width: "9rem",
            margin: "1rem",
            padding: "1rem",
          }}
          type="submit"
        >
          Add Movies
        </button>
      </form>
    </div>
  );
}

export default Form;
