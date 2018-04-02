import React from "react";
import { Route, Switch, Router } from "react-router-dom";
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
    <Switch>
      <Route path="/1/:id" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/Discover" exact component={Discover} />
      <Route path="/popular-clips" exact component={PopularClips} />
      <Route path="/movie&tv" exact component={MovieAndTv} />
      <Route path="/search" exact component={SearchMovies} />
      <Route path="/movie" component={MovieInfo} exact />
      <Route path="/contact" exact component={Contact} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default AppRouter;
