import React from "react";
import { Link } from "react-router-dom";
import SlickCarousel from "../common/SlickCarousel";
import DiscoverItems from "../common/DiscoverItems";
import DiscoverMovies from "./DiscoverMovies";
import DiscoverTv from "./DiscoverTv";
import Support from "../common/Support";
import CustomHeader from "../common/CustomHeader";

const Discover = props => (
  <div>
    <CustomHeader />
    <div className="container section news">
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12">
              <div className="tabs">
                <ul>
                  <li className="ui-state-active">
                    <Link to={"#one"}>In Movie</Link>
                  </li>
                  <li>
                    <Link to={"#two"}>TV Series</Link>
                  </li>
                </ul>
                <div id="one">
                  1
                  <DiscoverMovies />
                </div>
                <div id="two">
                  2
                  <DiscoverTv />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Support />
  </div>
);

export default Discover;
