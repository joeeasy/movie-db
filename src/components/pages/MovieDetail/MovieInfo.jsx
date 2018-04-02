import React, { Component } from "react";
import MovieInfoHeader from "./MovieInfoHeader";
import MovieDescription from "./MovieDescription";

class MovieInfo extends Component {
  render() {
    return (
      <div>
        <MovieInfoHeader />
        <MovieDescription />
      </div>
    );
  }
}

export default MovieInfo;
