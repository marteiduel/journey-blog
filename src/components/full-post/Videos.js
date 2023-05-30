import React from "react";

const Videos = ({ videos }) => {
  console.log(videos, "videos");
  return (
    <div>
      <div>id: {videos[0].id}</div>
    </div>
  );
};

export default Videos;
