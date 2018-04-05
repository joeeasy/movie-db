import React, { Component } from "react";
import Movie from "./MovieAndTv/Movie";
import Tv from "./MovieAndTv/Tv";
import CustomHeader from "../common/CustomHeader";

class MoviesAndTv extends Component {
  render() {
    return (
      <div>
        <CustomHeader />
        <Movie />
        <Tv />
      </div>
    );
  }
}
export default MoviesAndTv;
