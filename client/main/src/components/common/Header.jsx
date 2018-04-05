import React, { Component } from "react";
import MovieEndPoints from "../../../utils/EndPoints";
import CarouselItems from "./CarouselItem";

// ============================

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props.results);
  }
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
            {/* <li data-target="#hero" data-slide-to="0" className="active" />
            <li data-target="#hero" data-slide-to="1" />
            <li data-target="#hero" data-slide-to="2" /> */}
            {this.props.results.map((element, index) => (
              <li key={element.id} data-target="#hero" data-slide-to={index} />
            ))}
          </ol>
        </div>

        <div className="carousel-inner">
          {this.props.results.map((movieItem, index) => (
            <CarouselItems
              index={index}
              key={movieItem.id}
              movieItem={movieItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Header;
