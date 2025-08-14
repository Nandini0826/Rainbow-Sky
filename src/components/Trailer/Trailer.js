import React from "react";
import assets from "../../assets/assets";
import Title from "../Title/Title";
import "./Trailer.css";

const Trailer = () => {
  return (
    <div className="Trailer" id="Trailer">
      <Title title="Coming Soon" />
      <div className="Block">
      <video
        className="trailer_video"
        controls   // shows the play/pause + timeline
        autoPlay   // starts playing when loaded
        playsInline // helps on mobile devices
      >
        <source src={assets.trailer} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </div>
    </div>
  );
};

export default Trailer;
