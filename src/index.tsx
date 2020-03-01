import './style.css';

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Main } from "./components/Main";

const state = {

};

ReactDOM.render(
    <Main state={state}/>,
    document.getElementById("app")
);