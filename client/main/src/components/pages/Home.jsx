import React, { Component } from "react";
import Header from "../common/Header";
import SlickCarousel from "../common/SlickCarousel";
import Support from "../common/Support";
import axios from "axios";
import MovieEndPoints from "../../../utils/EndPoints";
import Loader from "react-loader";
import { delay, loaderOption } from "../../../utils/helpers";
// =============

// console.log(delay(true, 1000));
let movies = [];
//=========
// ======================
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { nowPlaying: [], loaded: false };
    // this.componentDidMount = this.componentDidMount.bind(this);
  }
  // ======
  

  //------------Adding life cycle methods

  componentDidMount() {
    const getNowPlaying = nowPlaying => {
      return axios
        .get(nowPlaying)
        .then(function(response) {
          return (movies = response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    movies = getNowPlaying(MovieEndPoints.nowPlaying);
    movies = movies.then(response =>
      this.setState(prevState => ({
        nowPlaying: response.results,
        loaded: true
      }))
    );
  }
  // setState((prevState, props) => ({ nowShowing: response.data })
  render() {
    return (
      <div>
        <Header results={this.state.nowPlaying} />
        <SlickCarousel discover="Discover" />
        <SlickCarousel />
        <SlickCarousel />
        <Loader
          loaded={this.state.loaded}
          options={loaderOption}
          className="spinner"
        />
        <Support />
      </div>
    );
  }
}
export default Home;
