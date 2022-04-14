import "./modal.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useTask } from "../../context/task-context";

const Modal = () => {
  const { taskState, taskDispatch } = useTask();
  const { showModal } = taskState;

  const taskInitialState = {
    _id: uuid(),
    title: "",
    description: "",
    time: "",
  };

  const [taskDetails, setTaskDetails] = useState(
    taskState.taskEdit._id ? taskState.taskEdit : taskInitialState
  );

  const addTask = () => {
    taskDetails.title && taskDetails.description
      ? taskDispatch({ type: "ADD_TASK", payload: taskDetails })
      : alert("Task title and description are required");
  };

  return (
    <>
      {showModal && (
        <div className="modal-wrapper">
          <div className="modal-box">
            <input
              className="input input-fields"
              type="text"
              value={taskDetails.title}
              placeholder="Add Task Title"
              onChange={(e) =>
                setTaskDetails((prevData) => ({
                  ...prevData,
                  title: e.target.value,
                }))
              }
            />
            <textarea
              className="input input-fields"
              placeholder="Add Task Description"
              cols="20"
              rows="8"
              value={taskDetails.description}
              onChange={(e) =>
                setTaskDetails((prevData) => ({
                  ...prevData,
                  description: e.target.value,
                }))
              }
            ></textarea>
            <input
              className="input input-fields"
              type="number"
              placeholder="Add Time in Mintues"
              value={taskDetails.time}
              onChange={(e) =>
                setTaskDetails((prevData) => ({
                  ...prevData,
                  time: e.target.value,
                }))
              }
            />
            <div className="btns">
              <button
                className="btn-default btn-primary-solid"
                onClick={() => taskDispatch({ type: "TOGGLE" })}
              >
                Close
              </button>
              <button className="btn-default btn-primary" onClick={addTask}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };

// <>
// {showTask && (
//   <div className="modal-wrapper">
//     <div className="modal-box">
//       <input
//         className="input input-fields"
//         type="text"
//         value={taskDetails.title}
//         placeholder="Add Task Title"
//         onChange={(e) =>
//           setTaskDetails((prevData) => ({
//             ...prevData,
//             title: e.target.value,
//           }))
//         }
//       />
//       <textarea
//         className="input input-fields"
//         placeholder="Add Task Description"
//         cols="20"
//         rows="8"
//         value={taskDetails.description}
//         onChange={(e) =>
//           setTaskDetails((prevData) => ({
//             ...prevData,
//             description: e.target.value,
//           }))
//         }
//       ></textarea>
//       <input
//         className="input input-fields"
//         type="number"
//         placeholder="Add Time in Mintues"
//         value={taskDetails.time}
//         onChange={(e) =>
//           setTaskDetails((prevData) => ({
//             ...prevData,
//             time: e.target.value,
//           }))
//         }
//       />
//       <div className="btns">
//         <button
//           className="btn-default btn-primary-solid"
//           onClick={closeTask}
//         >
//           Close
//         </button>
//         <button className="btn-default btn-primary" onClick={addTask}>
//           Add
//         </button>
//       </div>
//     </div>
//   </div>
// )}
// </>
