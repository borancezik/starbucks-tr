import React from "react";

const VideoContainer = () => {
  return (
    <div className="w-[40%]">
      <video width="auto" height="auto" autoPlay loop muted>
        <source
          src={process.env.PUBLIC_URL + "/videos/home-video.mp4"}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoContainer;
