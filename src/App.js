import React, { useState } from "react";
import { Drum } from "./components/Drum";
import "./styles/app.css";
import volumeUp from "./icons/volume-up_icon.png";
import volumeDown from "./icons/volume-down_icon.png";


function App() {
  const [volume, setVolume] = useState(1);
  return (
    <div className="App">
      <main className="drum-box" id='drum-machine'>
        <h1 className="drum-box__title">Drum Machine</h1>
        <Drum volume={volume} />
        <div className="volume-control">
          <img className="volume-control__icon down" src={volumeDown} alt="" />
          <input className="volume-control__bar" id="slider" type="range" value={volume} step="0.1" max="1" min="0" onChange={(e) => setVolume(e.target.value)} />
          <img className="volume-control__icon up" src={volumeUp} alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;
