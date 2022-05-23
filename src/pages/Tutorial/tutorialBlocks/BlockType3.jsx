import React from "react";

import MoreVideo from "./MoreVideo";
import Rank from "./Rank";

const BlockType3 = ({
  id,
  description,
  title,
  count_of_stars,
  reverse,
  moreLink,
  videoLink,
}) => {
  return (
    <div id={id} className="tutorial-block block-type-3">
      <div className="description-title">
        <h3>{title}</h3>
        <p className="description">{description}</p>
      </div>
      <div className="description-additional-info">
        <MoreVideo
          reverse={reverse}
          moreLink={moreLink}
          videoLink={videoLink}
        />
        <Rank count={count_of_stars} />
      </div>
    </div>
  );
};

export default BlockType3;
