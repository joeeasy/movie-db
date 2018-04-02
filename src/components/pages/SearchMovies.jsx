import React, { Component } from "react";
import SearchMoviesForm from "../common/SearchMoviesForm";
import CustomHeader from "../common/CustomHeader";

class SearchMovies extends Component {
  render() {
    return (
      <div>
        <CustomHeader />
        <div className="container section negative-margin">
          <div className="row">
            <div className="col-sm-12">
              <SearchMoviesForm />
              <div className="tabs movies">
                <ul>
                  <li>
                    <a href="#mon">Mon</a>
                  </li>
                  <li>
                    <a href="#tue">Tue</a>
                  </li>
                  <li>
                    <a href="#wed">Today</a>
                  </li>
                  <li>
                    <a href="#thu">Thu</a>
                  </li>
                  <li>
                    <a href="#fri">Fri</a>
                  </li>
                  <li>
                    <a href="#sat">Sat</a>
                  </li>
                  <li>
                    <a href="#sun">Sun</a>
                  </li>
                  <li className="date">
                    <span>Wednesday, 8 March</span>
                  </li>
                </ul>
                <div id="mon">
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-6.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Fantasy</span>
                      <h3 className="no-underline">End of an era</h3>
                      <p>
                        European mercenaries searching for black powder become
                        embroiled in the defense of End of an era of China
                        against a horde of monstrous creatures.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">14:45</span>
                          <span className="time">18:30</span>
                          <span className="time">20:30</span>
                          <span className="time">24:45</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 105 mins
                          <span className="certificate">15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-5.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Sci-Fi </span>
                      <h3 className="no-underline">Days of war</h3>
                      <p>
                        Steve Rogers, a rejected military soldier transforms
                        into Captain America after taking a dose of a
                        "Super-Soldier serum". But being Captain America comes
                        at a price as he attempts to take down a war monger and
                        a terrorist organization.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time">16:00</span>
                          <span className="time">18:00</span>
                          <span className="time">21:00</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 120 mins
                          <span className="certificate">PG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-8.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">The apocalypse</h3>
                      <p>
                        A working-class African-American father tries to raise
                        his family in the 1950s, while coming to terms with the
                        events of his life.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">10:00</span>
                          <span className="time past">12:45</span>
                          <span className="time">17:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 135 mins
                          <span className="certificate">18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-7.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">As she sleeps</h3>
                      <p>
                        A chronicle of the childhood, adolescence and burgeoning
                        adulthood of a young black man growing up in a rough
                        neighborhood of Miami.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time past">14:30</span>
                          <span className="time">20:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 117 mins
                          <span className="certificate">U</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tue">
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-7.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">As she sleeps</h3>
                      <p>
                        A chronicle of the childhood, adolescence and burgeoning
                        adulthood of a young black man growing up in a rough
                        neighborhood of Miami.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time past">14:30</span>
                          <span className="time">20:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 117 mins
                          <span className="certificate">U</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-5.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Sci-Fi </span>
                      <h3 className="no-underline">Days of war</h3>
                      <p>
                        Steve Rogers, a rejected military soldier transforms
                        into Captain America after taking a dose of a
                        "Super-Soldier serum". But being Captain America comes
                        at a price as he attempts to take down a war monger and
                        a terrorist organization.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time">16:00</span>
                          <span className="time">18:00</span>
                          <span className="time">21:00</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 120 mins
                          <span className="certificate">PG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-6.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Fantasy</span>
                      <h3 className="no-underline">End of an era</h3>
                      <p>
                        European mercenaries searching for black powder become
                        embroiled in the defense of End of an era of China
                        against a horde of monstrous creatures.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">14:45</span>
                          <span className="time">18:30</span>
                          <span className="time">20:30</span>
                          <span className="time">24:45</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 105 mins
                          <span className="certificate">15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-8.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">The apocalypse</h3>
                      <p>
                        A working-class African-American father tries to raise
                        his family in the 1950s, while coming to terms with the
                        events of his life.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">10:00</span>
                          <span className="time past">12:45</span>
                          <span className="time">17:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 135 mins
                          <span className="certificate">18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="wed">
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-6.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Fantasy</span>
                      <h3 className="no-underline">End of an era</h3>
                      <p>
                        European mercenaries searching for black powder become
                        embroiled in the defense of End of an era of China
                        against a horde of monstrous creatures.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">14:45</span>
                          <span className="time">18:30</span>
                          <span className="time">20:30</span>
                          <span className="time">24:45</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 105 mins
                          <span className="certificate">15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-5.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Sci-Fi </span>
                      <h3 className="no-underline">Days of war</h3>
                      <p>
                        Steve Rogers, a rejected military soldier transforms
                        into Captain America after taking a dose of a
                        "Super-Soldier serum". But being Captain America comes
                        at a price as he attempts to take down a war monger and
                        a terrorist organization.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time">16:00</span>
                          <span className="time">18:00</span>
                          <span className="time">21:00</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 120 mins
                          <span className="certificate">PG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-7.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">As she sleeps</h3>
                      <p>
                        A chronicle of the childhood, adolescence and burgeoning
                        adulthood of a young black man growing up in a rough
                        neighborhood of Miami.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time past">14:30</span>
                          <span className="time">20:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 117 mins
                          <span className="certificate">U</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-8.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">The apocalypse</h3>
                      <p>
                        A working-class African-American father tries to raise
                        his family in the 1950s, while coming to terms with the
                        events of his life.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">10:00</span>
                          <span className="time past">12:45</span>
                          <span className="time">17:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 135 mins
                          <span className="certificate">18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="thu">
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-5.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Sci-Fi </span>
                      <h3 className="no-underline">Days of war</h3>
                      <p>
                        Steve Rogers, a rejected military soldier transforms
                        into Captain America after taking a dose of a
                        "Super-Soldier serum". But being Captain America comes
                        at a price as he attempts to take down a war monger and
                        a terrorist organization.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time">16:00</span>
                          <span className="time">18:00</span>
                          <span className="time">21:00</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 120 mins
                          <span className="certificate">PG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-7.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">As she sleeps</h3>
                      <p>
                        A chronicle of the childhood, adolescence and burgeoning
                        adulthood of a young black man growing up in a rough
                        neighborhood of Miami.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time past">14:30</span>
                          <span className="time">20:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 117 mins
                          <span className="certificate">U</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-6.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Fantasy</span>
                      <h3 className="no-underline">End of an era</h3>
                      <p>
                        European mercenaries searching for black powder become
                        embroiled in the defense of End of an era of China
                        against a horde of monstrous creatures.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">14:45</span>
                          <span className="time">18:30</span>
                          <span className="time">20:30</span>
                          <span className="time">24:45</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 105 mins
                          <span className="certificate">15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-8.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">The apocalypse</h3>
                      <p>
                        A working-class African-American father tries to raise
                        his family in the 1950s, while coming to terms with the
                        events of his life.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">10:00</span>
                          <span className="time past">12:45</span>
                          <span className="time">17:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 135 mins
                          <span className="certificate">18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="fri">
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-5.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Sci-Fi </span>
                      <h3 className="no-underline">Days of war</h3>
                      <p>
                        Steve Rogers, a rejected military soldier transforms
                        into Captain America after taking a dose of a
                        "Super-Soldier serum". But being Captain America comes
                        at a price as he attempts to take down a war monger and
                        a terrorist organization.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time">16:00</span>
                          <span className="time">18:00</span>
                          <span className="time">21:00</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 120 mins
                          <span className="certificate">PG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-6.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Fantasy</span>
                      <h3 className="no-underline">End of an era</h3>
                      <p>
                        European mercenaries searching for black powder become
                        embroiled in the defense of End of an era of China
                        against a horde of monstrous creatures.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">14:45</span>
                          <span className="time">18:30</span>
                          <span className="time">20:30</span>
                          <span className="time">24:45</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 105 mins
                          <span className="certificate">15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-7.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">As she sleeps</h3>
                      <p>
                        A chronicle of the childhood, adolescence and burgeoning
                        adulthood of a young black man growing up in a rough
                        neighborhood of Miami.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time past">14:30</span>
                          <span className="time">20:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 117 mins
                          <span className="certificate">U</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-8.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">The apocalypse</h3>
                      <p>
                        A working-class African-American father tries to raise
                        his family in the 1950s, while coming to terms with the
                        events of his life.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">10:00</span>
                          <span className="time past">12:45</span>
                          <span className="time">17:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 135 mins
                          <span className="certificate">18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="sat">
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-6.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Fantasy</span>
                      <h3 className="no-underline">End of an era</h3>
                      <p>
                        European mercenaries searching for black powder become
                        embroiled in the defense of End of an era of China
                        against a horde of monstrous creatures.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">14:45</span>
                          <span className="time">18:30</span>
                          <span className="time">20:30</span>
                          <span className="time">24:45</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 105 mins
                          <span className="certificate">15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-7.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">As she sleeps</h3>
                      <p>
                        A chronicle of the childhood, adolescence and burgeoning
                        adulthood of a young black man growing up in a rough
                        neighborhood of Miami.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time past">14:30</span>
                          <span className="time">20:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 117 mins
                          <span className="certificate">U</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-5.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Sci-Fi </span>
                      <h3 className="no-underline">Days of war</h3>
                      <p>
                        Steve Rogers, a rejected military soldier transforms
                        into Captain America after taking a dose of a
                        "Super-Soldier serum". But being Captain America comes
                        at a price as he attempts to take down a war monger and
                        a terrorist organization.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time">16:00</span>
                          <span className="time">18:00</span>
                          <span className="time">21:00</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 120 mins
                          <span className="certificate">PG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-8.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">The apocalypse</h3>
                      <p>
                        A working-class African-American father tries to raise
                        his family in the 1950s, while coming to terms with the
                        events of his life.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">10:00</span>
                          <span className="time past">12:45</span>
                          <span className="time">17:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 135 mins
                          <span className="certificate">18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="sun">
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-5.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Sci-Fi </span>
                      <h3 className="no-underline">Days of war</h3>
                      <p>
                        Steve Rogers, a rejected military soldier transforms
                        into Captain America after taking a dose of a
                        "Super-Soldier serum". But being Captain America comes
                        at a price as he attempts to take down a war monger and
                        a terrorist organization.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time">16:00</span>
                          <span className="time">18:00</span>
                          <span className="time">21:00</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 120 mins
                          <span className="certificate">PG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-6.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Action, Adventure, Fantasy</span>
                      <h3 className="no-underline">End of an era</h3>
                      <p>
                        European mercenaries searching for black powder become
                        embroiled in the defense of End of an era of China
                        against a horde of monstrous creatures.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">14:45</span>
                          <span className="time">18:30</span>
                          <span className="time">20:30</span>
                          <span className="time">24:45</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 105 mins
                          <span className="certificate">15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-7.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">As she sleeps</h3>
                      <p>
                        A chronicle of the childhood, adolescence and burgeoning
                        adulthood of a young black man growing up in a rough
                        neighborhood of Miami.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">11:00</span>
                          <span className="time past">14:30</span>
                          <span className="time">20:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 117 mins
                          <span className="certificate">U</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row movie-tabs">
                    <div className="col-md-2 col-sm-3">
                      <a href="single-movie.html">
                        <img src="images/movie-8.jpg" alt="Movie title" />
                      </a>
                    </div>
                    <div className="col-md-10 col-sm-9">
                      <span className="title">Drama</span>
                      <h3 className="no-underline">The apocalypse</h3>
                      <p>
                        A working-class African-American father tries to raise
                        his family in the 1950s, while coming to terms with the
                        events of his life.
                      </p>
                      <p>
                        <a href="news-single.html" className="arrow-button">
                          Full synopsis
                        </a>
                      </p>
                      <div className="row">
                        <div className="col-md-8 col-sm-9">
                          <hr className="space-10" />
                          <span className="viewing-times">
                            <i className="material-icons">access_time</i>
                            Viewing times
                          </span>
                          <span className="time past">10:00</span>
                          <span className="time past">12:45</span>
                          <span className="time">17:00</span>
                          <span className="time">21:15</span>
                        </div>
                        <div className="col-md-4 col-sm-3 running-time">
                          <hr className="space-10" /> 135 mins
                          <span className="certificate">18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchMovies;
