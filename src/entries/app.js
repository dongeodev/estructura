import React, { Fragment } from "react";
import { render } from "react-dom";

import { HashRouter, Route, Switch } from "react-router-dom";

import "../includes/bootstrap";

import Landing from "../landing/containers/Landing";
import Header from "../header/containers/header";
import Portfolio from "../portfolio/containers/portfolio";

const App = document.getElementById("App");

render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  </HashRouter>,

  App
);
