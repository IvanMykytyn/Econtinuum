import React from "react";
import "./taskHistory.styles.scss";

import { BsCheck2 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";

const statusEnum = {
  success: <BsCheck2 size={20} color={"#6EB29A"} />,
  failed: <IoClose size={20} color={"#ff5f71"} />,
  validating: <CgSandClock size={20} color={"#708090"} />,
};

const tasks = [
  {
    id: 1,
    points: 6,
    status: statusEnum.success,
    category: "Flora",
  },
  {
    id: 2,
    points: 10,
    status: statusEnum.failed,
    category: "Land",
  },
  {
    id: 3,
    points: 12,
    status: statusEnum.success,
    category: "Flora",
  },
  {
    id: 4,
    points: 8,
    status: statusEnum.validating,
    category: "Sorting",
  },
  {
    id: 5,
    points: 16,
    status: statusEnum.validating,
    category: "Tech",
  },
];

const TaskHistory = () => {
  return (
    <div className="task-history">
      <h1>Task history</h1>
      <div className="task-table">
        <div className="table-header">
          <p>ID</p>
          <p>Points</p>
          <p>Status</p>
          <p>Category</p>
        </div>
        {tasks.map((task) => {
          return (
            <div className="task-item">
              <div className="task-data task-id">
                <p>{task.id}</p>
              </div>
              <div className="task-data task-points">
                <p>{task.points}</p>
              </div>
              <div className="task-data">{task.status}</div>
              <div className={"category " + task.category.toLowerCase()}>
                <p>{task.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskHistory;
