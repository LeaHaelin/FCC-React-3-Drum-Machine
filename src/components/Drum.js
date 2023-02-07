import React from 'react'

export const Drum = () => {
  const test = () => {
    const audio = document.getElementById("Q")
  }


  return (
    <div className='drum' id='display'>
      <button className='drum-pad' id='q' onClick={test}><audio className='clip' id='Q' src="../audiofiles/Heater-1.mp3"></audio>Q</button>
      <button className='drum-pad' id='w'><audio className='clip' id='W' src=""></audio>W</button>
      <button className='drum-pad' id='e'><audio className='clip' id='E' src=""></audio>E</button>
      <button className='drum-pad' id='a'><audio className='clip' id='A' src=""></audio>A</button>
      <button className='drum-pad' id='s'><audio className='clip' id='S' src=""></audio>S</button>
      <button className='drum-pad' id='d'><audio className='clip' id='D' src=""></audio>D</button>
      <button className='drum-pad' id='z'><audio className='clip' id='Z' src=""></audio>Z</button>
      <button className='drum-pad' id='x'><audio className='clip' id='X' src=""></audio>X</button>
      <button className='drum-pad' id='c'><audio className='clip' id='C' src=""></audio>C</button>
    </div>
  )
}

