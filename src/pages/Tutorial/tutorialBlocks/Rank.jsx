import React from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rank = ({ count }) => {
  return (
    <div className="rank-box">
      <h5>Rank</h5>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => {
          if (star <= count) {
            return <AiFillStar size={30} color="#F7BA46" key={star}/>;
          } else {
            return <AiOutlineStar size={30} key={star}/>;
          }
        })}
      </div>
    </div>
  );
};

export default Rank;
