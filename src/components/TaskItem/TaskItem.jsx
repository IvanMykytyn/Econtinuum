import "./task-item.styles.scss";
import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";

const statusEnum = {
  accepted: <BsCheck2 size={24} color={"#278866"} />,
  failed: <IoClose size={24} color={"#ff5f71"} />,
  validating: <CgSandClock size={24} color={"#708090"} />,
};

const categoryEnum = {
  "Garbage sorting": "Sorting",
  "Paper waste sale": "Waste",
  "Resource saving tech": "Tech",
  "Plant a piece of flora": "Flora",
  "Clean a patch of land": "Land",
};
const TaskItem = ({ points, activity_type, status, index }) => {
  return (
    <div className="task-item">
      <div className="task-data task-id">
        <p>{index + 1}</p>
      </div>
      <div className="task-data task-points">
        <p>{points}</p>
      </div>
      <div className="task-data task-status">{statusEnum[status]}</div>
      <div className={`category ${categoryEnum[activity_type].toLowerCase()}`}>
        <p>{categoryEnum[activity_type]}</p>
      </div>
    </div>
  );
};

export default TaskItem;
