import React, { Component, Fragment } from "react";

import Header from "./Header";

//style
import { Logo } from "../styles/styles";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <h1>Hello React Parcel</h1>
          <Logo src="https://tinyurl.com/parcel-react-logo" />
        </div>
      </Fragment>
    );
  }
}
