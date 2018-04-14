import React, { Component } from "react";
import MovieInfoHeader from "./MovieInfoHeader";
import MovieDescription from "./MovieDescription";
import MovieEndPoint from "../../../../utils/EndPoints";
import axios from "axios";
import Loader from "react-loader";
import { loaderOption } from "../../../../utils/helpers";

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    props.match.params.id;
  }
  state = { movie: [], loaded: false };
  // =====================
  getMovie = () => {
    console.log(this.props);
    let id = this.props.match.params.id;

    return (
      axios
        .get(MovieEndPoint.movie(id, MovieEndPoint.key))
        // .then(function(response) {
        //   this.setState(prevState => ({ movie: response.data }));
        // })
        .catch(function(error) {
          console.log(error);
        })
    );
  };
  componentDidMount() {
    let movie = this.getMovie();
    movie = movie.then(response =>
      this.setState(prevState => ({ movie: response.data, loaded: true }))
    );
  }

  render() {
    return (
      <div>
        <Loader option={loaderOption} loaded={this.state.loaded} />
        <MovieInfoHeader movieInfo={this.state.movie} />
        <MovieDescription />
      </div>
    );
  }
}

export default MovieInfo;
