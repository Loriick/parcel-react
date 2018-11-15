import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import App from "./App";
import About from "./About";
import NotFound from "./NotFound";

//style
import { GlobalStyle } from "../styles/styles";

const Router = () => (
  <Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
  </Fragment>
);
export default Router;
