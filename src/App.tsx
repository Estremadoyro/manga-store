import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./screens/Home";
import { ShonenJump } from "./screens/ShonenJump";
import { Calendar } from "./screens/Calendar";
import { News } from "./screens/News";
import { Discounts } from "./screens/Discounts";
import { Login } from "./screens/Login";

import { NavBar } from "./components/NavBar";

const App = () => {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <Route path="/home" component={Home} exact />
        <Route path="/shonenjump" component={ShonenJump} exact />
        <Route path="/noticias" component={News} exact />
        <Route path="/calendario" component={Calendar} exact />
        <Route path="/ofertas" component={Discounts} exact />
        <Route path="/login" component={Login} exact />
      </Router>
    </Fragment>
  );
};

export default App;
