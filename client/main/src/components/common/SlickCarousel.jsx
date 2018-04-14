import React, { Component } from "react";

export class SlickCarousel extends Component {
  render() {
    return (
      <div className="container section">
        <div className="row">
          <div className="col-sm-12">
            <h2>New in</h2>
            <div className="slick-carousel discover" id="newIn">
              <div className="movie-slide">
                <div className="movie-poster">
                  <aside>
                    <div>
                      <a
                        href="https://youtu.be/d96cjJhvlMA"
                        data-vbtype="video"
                        className="venobox play"
                      >
                        <i className="material-icons">play_arrow</i>
                      </a>
                      <a href="single-movie.html" className="read-more">
                        read more
                      </a>
                      <span className="date">Released: 7 Mar, 2017</span>
                    </div>
                  </aside>
                  <a href="#">
                    <img src="assets/images/movie-1.jpg" alt="Movie title" />
                  </a>
                </div>
                <h4 className="no-underline">The last post</h4>
                <div className="star-rating">
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                </div>
              </div>
              <div className="movie-slide">
                <div className="movie-poster">
                  <aside>
                    <div>
                      <a
                        href="https://youtu.be/d96cjJhvlMA"
                        data-vbtype="video"
                        className="venobox play"
                      >
                        <i className="material-icons">play_arrow</i>
                      </a>
                      <a href="single-movie.html" className="read-more">
                        read more
                      </a>
                      <span className="date">Released: 7 Mar, 2017</span>
                    </div>
                  </aside>
                  <a href="#">
                    <img src="assets/images/movie-2.jpg" alt="Movie title" />
                  </a>
                </div>
                <h4 className="no-underline">Dark and lonely</h4>
                <div className="star-rating">
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons grey">star_rate</i>
                </div>
              </div>
              <div className="movie-slide">
                <div className="movie-poster">
                  <aside>
                    <div>
                      <a
                        href="https://youtu.be/d96cjJhvlMA"
                        data-vbtype="video"
                        className="venobox play"
                      >
                        <i className="material-icons">play_arrow</i>
                      </a>
                      <a href="single-movie.html" className="read-more">
                        read more
                      </a>
                      <span className="date">Released: 7 Mar, 2017</span>
                    </div>
                  </aside>
                  <a href="#">
                    <img src="assets/images/movie-3.jpg" alt="Movie title" />
                  </a>
                </div>
                <h4 className="no-underline">Venture</h4>
                <div className="star-rating">
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                </div>
              </div>
              <div className="movie-slide">
                <div className="movie-poster">
                  <aside>
                    <div>
                      <a
                        href="https://youtu.be/d96cjJhvlMA"
                        data-vbtype="video"
                        className="venobox play"
                      >
                        <i className="material-icons">play_arrow</i>
                      </a>
                      <a href="single-movie.html" className="read-more">
                        read more
                      </a>
                      <span className="date">Released: 7 Mar, 2017</span>
                    </div>
                  </aside>
                  <a href="#">
                    <img src="assets/images/movie-4.jpg" alt="Movie title" />
                  </a>
                </div>
                <h4 className="no-underline">Hush</h4>
                <div className="star-rating">
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons grey">star_rate</i>
                  <i className="material-icons grey">star_rate</i>
                </div>
              </div>
              <div className="movie-slide">
                <div className="movie-poster">
                  <aside>
                    <div>
                      <a
                        href="https://youtu.be/d96cjJhvlMA"
                        data-vbtype="video"
                        className="venobox play"
                      >
                        <i className="material-icons">play_arrow</i>
                      </a>
                      <a href="single-movie.html" className="read-more">
                        read more
                      </a>
                      <span className="date">Released: 7 Mar, 2017</span>
                    </div>
                  </aside>
                  <a href="#">
                    <img src="assets/images/movie-3.jpg" alt="Movie title" />
                  </a>
                </div>
                <h4 className="no-underline">Venture</h4>
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

export default SlickCarousel;
