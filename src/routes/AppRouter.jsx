import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const AppRouter = () => (
  <div className="wrapper">
    <Navbar />
    <Header />
    <Switch />
    <Footer />
  </div>
);

export default AppRouter;
