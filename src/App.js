import React from "react";
import "./App.css";
import Form from "./Form";
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <MovieList />
        <Nav />
        <Form />
      </MovieProvider>
    </div>
  );
}

export default App;
