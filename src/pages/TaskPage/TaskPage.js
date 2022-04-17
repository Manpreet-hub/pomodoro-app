import "./task-page.css";
import { Modal, TaskList } from "../../components/";
import { useState } from "react";
import { useTask } from "../../context/task-context";

const TaskPage = ({ task }) => {
  const { taskState, taskDispatch } = useTask();
  const { showModal } = taskState;

  return (
    <div className="task-main">
      <h1 className="task-title dark-theme">Welcome back , Manpreet !</h1>
      <div className="task-content dark-theme">
        You have {taskState.taskList.length} tasks for today.All the best !!
      </div>

      <div className="task-wrapper">
        <div className="task-container">
          <h2>To Do List</h2>
          <div className="icon">
            <i
              className="fa-solid fa-circle-plus"
              onClick={() => taskDispatch({ type: "TOGGLE" })}
            ></i>
          </div>
        </div>
        <TaskList />
        <div className="task-container">{showModal && <Modal />}</div>
      </div>
    </div>
  );
};

export { TaskPage };
