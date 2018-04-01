import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import  AppRouter  from "./routes/AppRouter";
import "normalize.css/normalize.css";
import "../public/assets/css/slick.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/style.css";

const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
