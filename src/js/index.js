//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//import your own components
import Home from "./component/home.jsx";

setInterval(render, 1000);
let counter = 0;
//render your react application
function render() {
  counter++;
  ReactDOM.render(<Home seconds={counter} />, document.querySelector("#app"));
}
