import React from "react";

const LogDetails = ({ streamUrl }) => {
  return (
    <div>
      <div>
        <h2 className="text-md">Streaming URL:</h2>
        <p>{streamUrl}</p>
      </div>
    </div>
  );
};

export default LogDetails;
