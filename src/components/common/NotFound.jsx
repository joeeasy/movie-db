import React from "react";
import Support from "./Support";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const NotFound = ({ location }) => (
  <div>
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
          <div className="col-md-12">
            {/* <span className="title">Action, Adventure, Sci-Fi</span> */}
            <h1 className="text-center">Page Not Found</h1>
            <p className="text-center">
              The Requested Url {location.pathname} was not found
            </p>
          </div>
        </div>
      </div>
    </div>
    <Support />
  </div>
);

export default NotFound;
