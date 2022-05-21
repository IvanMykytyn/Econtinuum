import React from "react";

import MoreVideo from "./MoreVideo";
import Rank from "./Rank";
import ImportantBox from "./ImportantBox";

const BlockType1 = ({
  id,
  img,
  description,
  title,
  count_of_stars,
  reverse,
  importantText,
  moreLink,
  videoLink,
}) => {
  return (
    <div id={id} className="tutorial-block block-type-1">
      <div className="description-side">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <MoreVideo
          reverse={reverse}
          moreLink={moreLink}
          videoLink={videoLink}
        />
        <Rank count={count_of_stars} />
      </div>
      <div className="icon-side">
        <div className="blur"></div>
        <img src={img} alt="bg-img" />
        <ImportantBox importantText={importantText} />
      </div>
    </div>
  );
};

export default BlockType1;
