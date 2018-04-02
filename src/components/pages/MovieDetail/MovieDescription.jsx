import React, { Component } from "react";

class MovieDescription extends Component {
  render() {
    return (
      <div className="container section single-movie">
        <div className="row">
          <div className="col-sm-7">
            <h2>Synopsis</h2>
            <div className="row">
              <div className="col-sm-5">
                <img
                  src="assets/images/movie-16.jpg"
                  alt="Transformers: The Last Knight"
                  className="poster"
                />
                <div className="share">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest" />
                  </a>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </div>
              </div>
              <div className="col-sm-7">
                <h3 className="no-underline">The plot</h3>
                <p>
                  Humans and Transformers are at war, Optimus Prime is gone. The
                  key to saving our future lies buried in the secrets of the
                  past, in the hidden history of Transformers on Earth.
                </p>
                <p>
                  Optimus Prime finds his home planet, Cybertron, now a dead
                  planet, in which he comes to find he was responsible for
                  killing. He finds a way to bring the planet back to life, but
                  in order to do so, he needs to find an artifact, which is on
                  Earth.
                </p>
                <ul className="movie-info">
                  <li>
                    <i>Director</i> Michael Bay
                  </li>
                  <li>
                    <i>Starring</i> Mark Wahlberg, Anthony Hopkins
                  </li>
                  <li>
                    <i>Release date</i> 23 June 2017
                  </li>
                  <li>
                    <i>Running time</i> 114 mins
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-sm-push-1">
            <h2>Viewing times</h2>
            <ul className="show-times">
              <li>
                <i>Monday</i>
                <span className="time past">13:00</span>
                <span className="time">16:00</span>
                <span className="time">19:30</span>
                <span className="time">22:00</span>
              </li>
              <li>
                <i>Tuesday</i>
                <span className="time past">13:00</span>
                <span className="time">15:30</span>
                <span className="time">19:30</span>
                <span className="time">22:00</span>
              </li>
              <li className="today">
                <i>Today</i>
                <span className="time past">12:00</span>
                <span className="time">16:00</span>
                <span className="time">19:30</span>
                <span className="time">22:00</span>
              </li>
              <li>
                <i>Thursday</i>
                <span className="time past">13:00</span>
                <span className="time">16:00</span>
                <span className="time">20:15</span>
                <span className="time">22:00</span>
              </li>
              <li>
                <i>Friday</i>
                <span className="time past">13:00</span>
                <span className="time">14:45</span>
                <span className="time">19:30</span>
                <span className="time">22:00</span>
              </li>
              <li>
                <i>Saturday</i>
                <span className="time past">14:15</span>
                <span className="time">16:00</span>
                <span className="time">19:30</span>
                <span className="time">22:00</span>
              </li>
              <li>
                <i>Sunday</i>
                <span className="time past">13:00</span>
                <span className="time">16:00</span>
                <span className="time">19:30</span>
                <span className="time">22:20</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieDescription;
