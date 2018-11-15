import React from "react";

//header
import Header from "./Header";

//style
import { Err404 } from "../styles/styles";

const NotFound = () => {
  return (
    <Err404>
      <Header />
      <h3>
        404 Error !!!
        <br />
        <span>Nothing Here</span>
        <br />
        <span className="bye">👋🏾</span>
      </h3>
    </Err404>
  );
};
export default NotFound;
