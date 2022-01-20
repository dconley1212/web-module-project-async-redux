import React from "react";
import "./App.css";
import Dogs from "./components/Dogs";

function App() {
  return (
    <div className="App">
      <h1>Dogs:</h1>
      <h2>The most loyal and needy friend you'll ever have.</h2>
      <div>
        <Dogs />
      </div>
    </div>
  );
}

export default App;
