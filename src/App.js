import React from "react";
import { Drum } from "./components/Drum";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <main className="drum-box" id='drum-machine'>
        <h4 className="sound-title">drum sound name</h4>
        <Drum />
      </main>
    </div>
  );
}

export default App;
