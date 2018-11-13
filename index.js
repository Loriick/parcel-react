import React from "react";
import { render } from "react-dom";

//components
import App from "./src/components/App";

//reset
import './src/styles/index.css'

const root = document.querySelector("#root");
render(<App />, root);
