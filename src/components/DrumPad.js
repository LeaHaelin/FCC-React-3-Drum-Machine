import React, { useEffect } from 'react'

export const DrumPad = ({ audio }) => {
    const play = (key) => {
        const sound = document.getElementById(key);
        sound.currentTime = 0;
        sound.play()
    }
    return (
        <div>
            <button className='drum-pad' id={audio.key} onClick={() => play(audio.key)} ><audio className='clip' id={audio.key} src={audio.url}></audio>{audio.key}</button>
        </div >
    )
}
