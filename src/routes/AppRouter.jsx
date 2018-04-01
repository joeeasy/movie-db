import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Home from "../components/pages/Home";
import NotFound from "../components/common/NotFound";

const AppRouter = () => (
  <div className="wrapper">
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default AppRouter;
