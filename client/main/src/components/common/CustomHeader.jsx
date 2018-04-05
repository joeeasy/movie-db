import React from "react";

const CustomHeader = () => (
  <div
    id="content_hero"
    style={{
      backgroundImage: "url(" + "assets/images/hero-whats-on.jpg" + ")"
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
          <span className="title">Take a look at</span>
          <h1>What's on this week</h1>
        </div>
      </div>
    </div>
  </div>
);

export default CustomHeader;
