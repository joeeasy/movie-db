import React, { Component } from "react";

export class Carousel extends Component {
  constructor(props) {}
  render() {
    return (
      <div class="container section">
        <div class="row">
          <div class="col-sm-12">
            <h2>New in</h2>
            <div class="slick-carousel" id="newIn">
              <div class="movie-slide">
                <div class="movie-poster">
                  <aside>
                    <div>
                      <Link
                        href="https://youtu.be/d96cjJhvlMA"
                        data-vbtype="video"
                        class="venobox play"
                      >
                        <i class="material-icons">play_arrow</i>
                      </Link>
                      <Link href="single-movie.html" class="read-more">
                        read more
                      </Link>
                      <span class="date">Released: 7 Mar, 2017</span>
                    </div>
                  </aside>
                  <Link href="#">
                    <img src="images/movie-1.jpg" alt="Movie title" />
                  </Link>
                </div>
                <h4 class="no-underline">The last post</h4>
                <div class="star-rating">
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                </div>
              </div>
              <div class="movie-slide">
                <div class="movie-poster">
                  <aside>
                    <div>
                      <Link
                        href="https://youtu.be/d96cjJhvlMA"
                        data-vbtype="video"
                        class="venobox play"
                      >
                        <i class="material-icons">play_arrow</i>
                      </Link>
                      <Link href="single-movie.html" class="read-more">
                        read more
                      </Link>
                      <span class="date">Released: 7 Mar, 2017</span>
                    </div>
                  </aside>
                  <Link href="#">
                    <img src="images/movie-2.jpg" alt="Movie title" />
                  </Link>
                </div>
                <h4 class="no-underline">Dark and lonely</h4>
                <div class="star-rating">
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons grey">star_rate</i>
                </div>
              </div>
              <div class="movie-slide">
                <div class="movie-poster">
                  <aside>
                    <div>
                      <Link
                        href="https://youtu.be/d96cjJhvlMA"
                        data-vbtype="video"
                        class="venobox play"
                      >
                        <i class="material-icons">play_arrow</i>
                      </Link>
                      <Link href="single-movie.html" class="read-more">
                        read more
                      </Link>
                      <span class="date">Released: 7 Mar, 2017</span>
                    </div>
                  </aside>
                  <Link href="#">
                    <img src="images/movie-3.jpg" alt="Movie title" />
                  </Link>
                </div>
                <h4 class="no-underline">Venture</h4>
                <div class="star-rating">
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                </div>
              </div>
              <div class="movie-slide">
                <div class="movie-poster">
                  <aside>
                    <div>
                      <Link
                        href="https://youtu.be/d96cjJhvlMA"
                        data-vbtype="video"
                        class="venobox play"
                      >
                        <i class="material-icons">play_arrow</i>
                      </Link>
                      <Link href="single-movie.html" class="read-more">
                        read more
                      </Link>
                      <span class="date">Released: 7 Mar, 2017</span>
                    </div>
                  </aside>
                  <Link href="#">
                    <img src="images/movie-4.jpg" alt="Movie title" />
                  </Link>
                </div>
                <h4 class="no-underline">Hush</h4>
                <div class="star-rating">
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons grey">star_rate</i>
                  <i class="material-icons grey">star_rate</i>
                </div>
              </div>
              <div class="movie-slide">
                <div class="movie-poster">
                  <aside>
                    <div>
                      <Link
                        href="https://youtu.be/d96cjJhvlMA"
                        data-vbtype="video"
                        class="venobox play"
                      >
                        <i class="material-icons">play_arrow</i>
                      </Link>
                      <Link href="single-movie.html" class="read-more">
                        read more
                      </Link>
                      <span class="date">Released: 7 Mar, 2017</span>
                    </div>
                  </aside>
                  <Link href="#">
                    <img src="images/movie-3.jpg" alt="Movie title" />
                  </Link>
                </div>
                <h4 class="no-underline">Venture</h4>
                <div class="star-rating">
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                  <i class="material-icons">star_rate</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
