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
        description="hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd "
        importantText="Some important information"
        count_of_stars={3}
        reverse={true}
        moreLink="/"
        videoLink="/"
      />
      <BlockType2
        id="paper-waste"
        img={TelegramsIcon}
        title="Paper waste sale"
        description="rehewrh ehewrh ehewrh ehewrh ehewrh ehewrh ehewrh ehewrh ehewrh ehewrh ehewrh ehewrh"
        importantText="Some important information"
        count_of_stars={4}
        reverse={false}
        moreLink="/"
        videoLink="/"
      />
      <BlockType3
        id="plant-flora"
        title="Plant some flora"
        description="hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd "
        count_of_stars={3}
        reverse={false}
        moreLink="/"
        videoLink="/"
      />
      <BlockType2
        id="clean-land"
        img={ParkIcon}
        title="Clean a patch of land"
        description="egwgw wgrew  egwgw wgrew egwgw wgrew egwgw wgrew egwgw wgrew egwgw wgrew "
        importantText="Some important information"
        count_of_stars={5}
        reverse={false}
        moreLink="/"
        videoLink="/"
      />
      <BlockType3
        id="saving-tech"
        title="Saving tech"
        description="hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd hsdhsd "
        count_of_stars={2}
        reverse={false}
        moreLink="/"
        videoLink="/"
      />
    </div>
  );
};

export default TutorialBlocks;
