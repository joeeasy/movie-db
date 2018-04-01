import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        id="hero"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <img
          src="assets/images/scroll-arrow.svg"
          alt="Scroll down"
          className="scroll"
        />

        <div className="container">
          <ol className="carousel-indicators">
            <li data-target="#hero" data-slide-to="0" className="active" />
            <li data-target="#hero" data-slide-to="1" />
            <li data-target="#hero" data-slide-to="2" />
          </ol>
        </div>

        <div className="carousel-inner">
          <div
            className="item active"
            style={{
              backgroundImage: "url(" + "assets/images/hero-1.jpg" + ")"
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
                  <span className="title">Action, Adventure, Fantasy</span>
                  <h1>End of the World: Part II</h1>
                  <p>
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamus parum.
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: "url(" + "assets/images/hero-2.jpg" + ")"
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
                  <span className="title">Action, Adventure, Fantasy</span>
                  <h1>End of the World: Part II</h1>
                  <p>
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamu.
                  </p>
                  <div className="buttons">
                    <span className="certificate">15</span>
                    <a
                      href="https://youtu.be/RhFMIRuHAL4"
                      data-vbtype="video"
                      className="venobox btn btn-default"
                    >
                      <i className="material-icons">play_arrow</i>
                      <span>Play trailer</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: "url(" + "assets/images/hero-3.jpg" + ")"
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
                  <span className="title">Action, Adventure, Fantasy</span>
                  <h1>End of the World: Part II</h1>
                  <p>
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamus parum.
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

export default Header;
