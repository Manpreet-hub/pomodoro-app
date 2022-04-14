import { createContext, useReducer, useContext } from "react";
import { taskReducer, initialValue } from "../reducer/task-reducer";

const TaskContext = createContext();
const useTask = () => useContext(TaskContext);

const TaskDetailsProvider = ({ children }) => {
  const [taskState, taskDispatch] = useReducer(taskReducer, initialValue);

  return (
    <TaskContext.Provider value={{ taskState, taskDispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskDetailsProvider, useTask };
