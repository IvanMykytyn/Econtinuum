import React from "react";

const MoreVideo = ({ reverse, moreLink, videoLink }) => {
  return (
    <div className="more-video-buttons">
      <a href={moreLink} className={reverse ? "link-standard" : "link-reverse"}>
        More
      </a>
      <a
        href={videoLink}
        className={reverse ? "link-reverse" : "link-standard"}
      >
        Video
      </a>
    </div>
  );
};

export default MoreVideo;
