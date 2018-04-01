import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Home from "../components/pages/Home";

const AppRouter = () => (
  <div className="wrapper">
    <Navbar />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </div>
);

export default AppRouter;
