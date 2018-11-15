import React, { Component } from "react";

//components
import Header from "./Header";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Header />
        <h1>About page</h1>
      </div>
    );
  }
}
