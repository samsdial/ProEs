import { useRef, useState } from "react";
import Audio from "../assets/mi.mp3";

function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} src={Audio} />

      <div className="audio-controls">
        <div>
          <button
            className={`btn-play mx-auto ${
              !isPlaying ? "btn-ico-play" : "btn-ico-stop"
            }`}
            onClick={togglePlay}
          >
            <span></span>
          </button>
        </div>
        <div>
          <input
            type="range"
            value={currentTime}
            max={duration || 1}
            onChange={handleProgressChange}
            className="audio-progress"
          />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
