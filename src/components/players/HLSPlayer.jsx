import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const HLSPlayer = ({ streamUrl }) => {
  const videoRef = useRef(null);

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
    <div className="w-1/2 relative">
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        autoPlay
        muted={true}
        controls
        className={`rounded-xl cursor-pointer `}
      />
    </div>
  );
};

export default HLSPlayer;
