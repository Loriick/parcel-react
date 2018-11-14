import React from "react";
import { render } from "react-dom";

//components
import Router from "./src/components/Router";

//reset
import './src/styles/index.css'

const root = document.querySelector("#root");
render(<Router />, root);
