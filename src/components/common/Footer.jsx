import React, { Component } from "react";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <h6>Get in touch</h6>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Give us feedback</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h6>About Movie star</h6>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Find us</a>
            </li>
            <li>
              <a href="#">Schedule</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h6>Legal stuff</h6>
          <ul>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Cookie policy</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h6>Connect with us</h6>
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-facebook" /> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" /> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus" /> Google +
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          2017 &copy; Movie Star /
          <a href="https://www.klevermedia.co.uk/">
            Web design by Klever media
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
