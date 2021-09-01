import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./component/TodoContainer/TodoContainer";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

//const reactElement = <p>Hallo aus index.js!</p>; // intern: React.createElement('h1',...)

// Rendert unsere Components/React-Elemente im DOM
// hier wird es an das HTML Element #root hinzugefügt
// (siehe public -> index.html -> <body>)
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root") // Füge TodoContainer im DOM zum div mit ID "root" hinzu
);
