import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import App from "./App";
import About from "./About";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);
export default Router;
