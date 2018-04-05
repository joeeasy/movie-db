import React, { Component } from "react";
import DiscoverItems from "../common/DiscoverItems";
import Navbar from "../common/Navbar";
import Header from "../common/Header";
import CustomHeader from "../common/CustomHeader";

class PopularClips extends Component {
  render() {
    return (
      <div>
        <CustomHeader />
        <div className="section">
          <DiscoverItems />
        </div>
      </div>
    );
  }
}
export default PopularClips;
