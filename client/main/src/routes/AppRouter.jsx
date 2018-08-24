import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Home from "../components/pages/Home";
import NotFound from "../components/common/NotFound";
import Discover from "../components/pages/Discover";
import PopularClips from "../components/pages/PopularClips";
import SearchMovies from "../components/pages/SearchMovies";
import MovieAndTv from "../components/pages/MovieAndTv";
import MovieInfo from "../components/pages/MovieDetail/MovieInfo";
import Contact from "../components/pages/Contact";
const AppRouter = () => (
  <div className="wrapper">
    <Navbar />
      <Switch location={location}>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/Discover" exact component={Discover} />
        <Route path="/popular-clips" exact component={PopularClips} />
        <Route path="/movie&tv" exact component={MovieAndTv} />
        <Route path="/search" exact component={SearchMovies} />
        <Route path="/movie/:id" component={MovieInfo} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFound} />
      </Switch>
    <Footer />
  </div>
);

export default AppRouter;
