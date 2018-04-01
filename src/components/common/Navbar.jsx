// import React, { Component } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar" role="navigation">
        <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="search">
                  <Link to="#">
                    <i className="material-icons">search</i>
                  </Link>
                </div>
                <div className="tel">
                  <Link to="tel:03301234567">
                    <i className="material-icons">phone in talk</i> 07059972180
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="navbar-header">
            <Link
              to="index-2.html"
              className="logo"
              title="Craft beer landing page"
            >
              <img
                src="assets/images/logo.svg"
                alt="Craft Beer HTML Template"
              />
            </Link>
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar top-bar" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </button>
          </div>
          <div className="navbar-collapse collapse">
            <ul id="menu-primary" className="nav navbar-nav">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Discover">Discover</Link>
              </li>
              <li>
                <Link to="/popular-clips">Popular Clips</Link>
              </li>
              <li className="dropdown">
                <Link to="#">More</Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/Movies">Movies & Tv</Link>
                    <Link to="/watchlist">WatchLiist</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
