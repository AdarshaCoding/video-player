import React from "react";
import HLSPlayer from "./players/HLSPlayer";
import { hlsUrl } from "../utils/constants";
import PlaybackDetails from "./PlaybackDetails";
import LogDetails from "./LogDetails";

const Body = () => {
  return (
    <div className="container mx-auto my-6 font-inconsolata">
      <div className="flex flex-col gap-x-20 md:flex-row">
        <HLSPlayer streamUrl={hlsUrl} />
        <PlaybackDetails />
      </div>

      <h2 className="text-2xl mt-5 mb-2">Logs</h2>
      <div className="h-96 border-y">
        <LogDetails streamUrl={hlsUrl} />
      </div>
    </div>
  );
};

export default Body;
