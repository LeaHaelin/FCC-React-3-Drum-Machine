import { useEffect } from "react";

export const DrumPad = ({ audio }) => {
    useEffect(() => {
        document.addEventListener("keydown", keyPressHandler);
        return () => {
            document.removeEventListener("keydown", keyPressHandler)
        }
    }, [])
    const keyPressHandler = (e) => {
        if (e.keyCode === audio.keyCode) {
            const audioSound = document.getElementById(audio.key);
            audioSound.currentTime = 0;
            audioSound.play(e);
        }
    }

    const playHandler = () => {
        const audioTag = document.getElementById(audio.key);
        audioTag.currentTime = 0;
        audioTag.play();
    }

    return (
        <div>
            <button id={"pad-" + audio.key} className="drum-pad" onClick={() => playHandler()} onKeyDown={() => keyPressHandler()}><audio id={audio.key} className="clip" src={audio.url}></audio>{audio.key}</button>
        </div >
    )
}
