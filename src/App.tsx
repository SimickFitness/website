import React from "react";
import loading from "./Spinner-1.3s-317px.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loading} className="App-logo" alt="logo" />
        <p>
          Our webpage is currently under development...
          <br />
          Please check back at a later date in time!
          <br />- The Developers
        </p>
      </header>
    </div>
  );
}

export default App;
