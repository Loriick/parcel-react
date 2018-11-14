import React, { Component, Fragment } from "react";

import Header from "./Header";

//style
import { AppCss } from "../styles/appCss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AppCss>
          <h1>Hello React Parcel</h1>
        </AppCss>
      </div>
    );
  }
}
