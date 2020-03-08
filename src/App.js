import React from "react";
import logo from "./logo.svg";
import Solution from "./Components/Solution";
import Score from "./Components/Score";
import Letters from "./Components/Letters";
import "./App.css";

function App() {
  return <div className="App">
    <Solution/>
    <Score/>
    <Letters/>
  </div>;
}

export default App;
