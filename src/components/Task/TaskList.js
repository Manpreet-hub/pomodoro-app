import { useTask } from "../../context/task-context";
import { Link } from "react-router-dom";

const TaskList = () => {
  const { taskState, taskDispatch } = useTask();

  return (
    <>
      {taskState.taskList.map((task) => {
        return (
          <div className="task-container">
            <Link to="/timer" state={{ task }}>
              <h2>{task.title}</h2>
            </Link>
            <div className="icon">
              <i
                class="fa-regular fa-pen-to-square"
                onClick={() =>
                  taskDispatch({ type: "EDIT_TASK", payload: task })
                }
              ></i>
              <i
                class="fa-regular fa-trash-can"
                onClick={() =>
                  taskDispatch({ type: "REMOVE_TASK", payload: task._id })
                }
              ></i>
            </div>
          </div>
        );
      })}
    </>
  );
};

export { TaskList };
