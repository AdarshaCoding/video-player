import React from "react";
import HLSPlayer from "./players/HLSPlayer";
import { hlsUrl } from "../utils/constants";

const Body = () => {
  return (
    <div className="container mx-auto my-6">
      <HLSPlayer streamUrl={hlsUrl} />
    </div>
  );
};

export default Body;
