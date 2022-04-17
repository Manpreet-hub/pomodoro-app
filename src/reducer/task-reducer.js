import { TOGGLE, ADD_TASK, EDIT_TASK, REMOVE_TASK } from "./task-actions";
const taskDetailFromLocal = JSON.parse(localStorage.getItem("taskDetails"));

const initialValue = {
  showModal: false,
  taskList: taskDetailFromLocal || [],
  taskEdit: {},
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, taskEdit: {}, showModal: !state.showModal };
    case ADD_TASK:
      return state.taskEdit._id
        ? {
            ...state,
            taskList: state.taskList.map((todoList) =>
              todoList._id === action.payload._id ? action.payload : todoList
            ),
            showModal: false,
            taskEdit: {},
          }
        : {
            ...state,
            taskList: [...state.taskList, action.payload],
            showModal: false,
          };
    case REMOVE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(
          (todoList) => todoList._id !== action.payload
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        showModal: true,
        taskEdit: state.taskList.reduce(
          (acc, cur) => (cur._id === action.payload._id ? action.payload : acc),
          {}
        ),
      };
  }
};

export { taskReducer, initialValue };
