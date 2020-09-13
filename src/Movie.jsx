import React from "react";

function Movie(props) {
  return (
    <div>
      <h5>{props.movies}</h5>
      <h5>{props.price}</h5>
      <h5>{props.key}</h5>
      <br></br>
    </div>
  );
}

export default Movie;
