import React, { useState } from "react";
import { Drum } from "./components/Drum";
import "./styles/app.css";

function App() {
  const [volume, setVolume] = useState(1);
  return (
    <div className="App">
      <main className="drum-box" id='drum-machine'>
        <Drum volume={volume} />
        <div className="volume-control">
          <input className="volume-control__bar" type="range" value={volume} step="0.1" max="1" min="0" onChange={(e) => setVolume(e.target.value)} />
        </div>
      </main>
    </div>
  );
}

export default App;
