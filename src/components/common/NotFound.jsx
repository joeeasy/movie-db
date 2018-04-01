import React from "react";

const NotFound = () => (
  <div
    id="content_hero"
    style={{
      backgroundImage: "url(" + "assets/images/hero-single-movie.jpg" + ")"
    }}
  >
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
          <span className="title">Action, Adventure, Sci-Fi</span>
          <h1>Transformers: The Last Knight</h1>
          <p>
            Humans and Transformers are at war, Optimus Prime is gone. The key
            to saving our future lies buried in the secrets of the past, in the
            hidden history of Transformers on Earth.
          </p>
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

export default NotFound;
