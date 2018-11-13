import React, { Component, Fragment } from "react";

//style
import { AppCss } from "../styles/appCss";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <AppCss>
          <h1>Hello React Parcel</h1>
        </AppCss>
      </Fragment>
    );
  }
}
