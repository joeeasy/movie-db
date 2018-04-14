import React, { Component } from "react";
import MovieEndPoint from "../../../../utils/EndPoints";
class MovieInfoHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id="content_hero"
        style={{
          backgroundImage:
            "url(" +
            MovieEndPoint.imageLoader(this.props.movieInfo.backdrop_path) +
            ")"
        }}
      >
        {/* <img
          src="assets/images/scroll-arrow.svg"
          alt="Scroll down"
          className="scroll"
        /> */}

        <div className="container">
          <div
            className="row blurb scrollme animateme"
            data-when="exit"
            data-from="0"
            data-to="1"
            data-opacity="0"
            data-translatey="100"
          >
            <div className="col-md-9">
              <span className="title">
                {/* {this.props.movieInfo.genres.map(item => item.name + ", ")} */}
              </span>
              <h1>{this.props.movieInfo.title}</h1>
              <p>{this.props.movieInfo.overview}</p>
              <div className="buttons">
                <span className="certificate">PG</span>
                <a
                  href="https://youtu.be/RhFMIRuHAL4"
                  data-vbtype="video"
                  className="venobox btn btn-default"
                >
                  <i className="material-icons">play_arrow</i>
                  <span>Play trailer</span>
                </a>
                <div className="star-rating">
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieInfoHeader;
