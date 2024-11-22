import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

const HLSPlayer = ({ streamUrl }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0); // Progress of video
  const [isControlsVisible, setControlsVisible] = useState(false);

  const togglePlayPause = () => {
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  // Handle mute toggle
  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    const duration = videoRef.current.duration;
    videoRef.current.currentTime = (newProgress / 100) * duration;
    setProgress(newProgress);
  };

  // Update current time
  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  // Handle progress bar drag
  const handleProgressBarChange = (event) => {
    const value = event.target.value;
    videoRef.current.currentTime = value;
    setCurrentTime(value);
  };

  // Update duration when video metadata is loaded
  const handleMetadataLoaded = () => {
    setDuration(videoRef.current.duration);
  };

  // Handle volume change
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  // Helper function to format time in mm:ss format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  // Handle mouse enter on the video or controls
  const handleMouseEnter = () => {
    setControlsVisible(true);
  };

  // Handle mouse leave on the video or controls
  const handleMouseLeave = () => {
    setControlsVisible(false);
  };

  useEffect(() => {
    // Check if HLS.js is supported by the browser
    if (Hls.isSupported()) {
      const hls = new Hls();

      // Load the HLS stream URL
      hls.loadSource(streamUrl);
      hls.attachMedia(videoRef.current); // Attach the media to the video element

      // Listen to HLS.js events
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("Manifest loaded, starting playback...");
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.tyep) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error("Network error");
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error("Media error");
              break;
            case Hls.ErrorTypes.OTHER_ERROR:
              console.error("Other error");
              break;
            default:
              console.error("Unknown error");
          }
        }
      });

      // Cleanup HLS.js instance on component unmount
      return () => {
        hls.destroy();
      };
    } else {
      console.error("HLS.js is not supported in this browser");
    }
  }, [streamUrl]);

  return (
    <div className="w-1/2 mx-auto relative">
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        autoPlay
        muted={isMuted}
        // controls
        className={`rounded-xl cursor-pointer `}
        onClick={togglePlayPause}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleMetadataLoaded}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`absolute bottom-0 left-0 w-full  items-center px-4 py-2 bg-gray-800 bg-opacity-50 transition-all duration-300 ${
          isControlsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mx-2">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="w-full h-[2px] bg-gray-400 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, red ${progress}%, #e0e0e0 ${progress}%)`,
            }}
          />
        </div>
        <div className="my-1 px-3 flex gap-2 items-center">
          <button className="text-zinc-300 text-lg" onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <div className="flex items-center gap-3">
            <div
              className="cursor-pointer text-2xl text-zinc-300"
              onClick={toggleMute}
            >
              {isMuted ? <MdVolumeOff /> : <MdVolumeUp />}
            </div>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer transition-all"
            />

            <span className="text-white text-[10px]">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HLSPlayer;
