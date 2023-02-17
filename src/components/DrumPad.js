import { useEffect } from "react";

export const DrumPad = ({ audio, setSoundTitle, volume }) => {
    useEffect(() => {
        document.addEventListener("keydown", keyPressHandler);
        return () => {
            document.removeEventListener("keydown", keyPressHandler);
        }
    })

    const keyPressHandler = (e) => {
        if (e.keyCode === audio.keyCode) {
            const audioTag = document.getElementById(audio.key);
            audioTag.currentTime = 0;
            audioTag.play(e);
            audioTag.volume = volume;
            setSoundTitle(audio.id);
        }
    }
    const playHandler = () => {
        const audioTag = document.getElementById(audio.key);
        audioTag.currentTime = 0;
        audioTag.volume = volume;
        audioTag.play();
        setSoundTitle(audio.id);
    }

    return (
        <div>
            <button id={"pad-" + audio.key} className="drum-pad" onClick={() => playHandler()} ><audio id={audio.key} className="clip" src={audio.url}></audio>{audio.key}</button>
        </div >
    )
}
