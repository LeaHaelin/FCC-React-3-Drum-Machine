

export const DrumPad = ({ audio }) => {

    const playHandler = () => {
        const audioTag = document.getElementById(audio.key);
        audioTag.currentTime = 0;
        audioTag.play();
    }

    return (
        <div>
            <button id={"pad-" + audio.key} className="drum-pad" onClick={() => playHandler()}><audio id={audio.key} className="clip" src={audio.url}></audio>{audio.key}</button>
        </div >
    )
}
