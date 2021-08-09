import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./screens/Home";
import { ShonenJump } from "./screens/ShonenJump";
import { Calendar } from "./screens/Calendar";
import { News } from "./screens/News";
import { Discounts } from "./screens/Discounts";
import { Login } from "./screens/Login";

import { Navigation } from "./components/Navigation";

import "./styles/Main.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/shonenjump" component={ShonenJump} exact />
          <Route path="/noticias" component={News} exact />
          <Route path="/calendario" component={Calendar} exact />
          <Route path="/ofertas" component={Discounts} exact />
          <Route path="/login" component={Login} exact />
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
