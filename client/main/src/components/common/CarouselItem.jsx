import React from "react";
import MovieEndpoint from "../../../utils/EndPoints";
import { Link } from "react-router-dom";

const CarouselItems = props => {
  console.log(props.index + 1);
  return (
    <div
      className={props.index === 0 ? "item active" : "item"}
      style={{
        backgroundImage:
          "url(" + MovieEndpoint.imageLoader(props.movieItem.poster_path) + ")"
      }}
    >
      <div className="container">
        <div
          className="row blurb scrollme animateme"
          data-when="exit"
          data-from="0"
          data-to={props.index + 1}
          data-opacity="0"
          data-translatey="100"
        >
          <div className="col-md-9">
            <span className="title">Action, Adventure, Fantasy</span>
            <h1>{props.movieItem.title}</h1>
            <p>{props.movieItem.overview}</p>
            <div className="buttons">
              <span className="certificate">PG</span>
              <Link
                to={"movie/" + props.movieItem.id}
                className="btn btn-default"
              >
                <i className="material-icons">play_arrow</i>
                <span>Play trailer</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItems;
