import React from "react";

const PlaybackDetails = () => {
  return (
    <div className="w-1/2 font-inconsolata">
      <div className="flex gap-3 items-center bg-base-100 text-gray-400 font-bold font-inconsolata">
        <hr className="w-14" />
        Playback Details
        <hr className="w-14" />
      </div>
      <div className="text-sm my-2">
        <h2>Video Title : </h2>
        <h2>Subtitle Type :</h2>
        <h2>HLS or DASH : </h2>
        <h2>Live or VOD : </h2>
      </div>
    </div>
  );
};

export default PlaybackDetails;
