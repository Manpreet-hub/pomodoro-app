import "./task-page.css";

const TaskPage = () => {
  return (
    <div className="task-main">
      <h1 className="task-title">Welcome back , Manpreet !</h1>
      <div className="task-content">
        You have 4 tasks for today.All the best !!
      </div>

      <div className="task-wrapper">
        <div className="task-container">
          <h2>To Do List</h2>
          <div className="icon">
            <i className="fa-solid fa-circle-plus"></i>
          </div>
        </div>
        <div className="task-container">
          <h2>Task 1</h2>
          <div className="icon">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TaskPage };
