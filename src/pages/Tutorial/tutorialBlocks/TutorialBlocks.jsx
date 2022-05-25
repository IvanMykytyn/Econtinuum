import React from "react";

import "./tutorialBlocks.styles.scss";

import BlockType1 from "./BlockType1";
import BlockType2 from "./BlockType2";
import BlockType3 from "./BlockType3";

import { GarbageIcon, ParkIcon, TelegramsIcon } from "../images";

const TutorialBlocks = () => {
  return (
    <div className="tutorial-blocks">
      <BlockType1
        id="garbage-sorting"
        img={GarbageIcon}
        title="Garbage sorting"
        description="Waste sorting is collected through curbside collection schemes or automatically separated in recovery facilities"
        importantText="Only 9% of all the garbage are sorted"
        count_of_stars={3}
        reverse={true}
        moreLink="/"
        videoLink="/"
      />
      <BlockType2
        id="paper-waste"
        img={TelegramsIcon}
        title="Paper waste sale"
        description="Paper is sold to the cardboard industries, where the waste is processed to create new products"
        importantText=" 14% of deforestation is done to produce paper"
        count_of_stars={4}
        reverse={false}
        moreLink="/"
        videoLink="/"
      />
      <BlockType3
        id="plant-flora"
        title="Plant some flora"
        description="We are youth on a mission: bring back a trillion trees! No matter where you are, it's never been easier to plant trees"
        count_of_stars={3}
        reverse={false}
        moreLink="/"
        videoLink="/"
      />
      <BlockType2
        id="clean-land"
        img={ParkIcon}
        title="Clean a patch of land"
        description="Grounds require cleaning and other necessary maintenance works for it to sustain as time passes by"
        importantText="75% of Earth's land areas are degraded"
        count_of_stars={5}
        reverse={false}
        moreLink="/"
        videoLink="/"
      />
      <BlockType3
        id="saving-tech"
        title="Saving tech"
        description="Some of the technologies  can help you reduce your energy consumption by as much as 80%"
        count_of_stars={2}
        reverse={false}
        moreLink="/"
        videoLink="/"
      />
    </div>
  );
};

export default TutorialBlocks;
