import "./style.css";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li key={task.id}
        className={`list ${task.done && hideDoneTasks ? " list--hidden" : ""}`}>
        <button
          onClick={() => toggleTaskDone(task.id)}
          className="list__button list__button--done"
        >
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`list__item${task.done ? " list__item--done" : ""}`}>
          {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className="list__button list__button--remove"
        >
          🗑
        </button>
      </li>
    ))}
  </ul >
)

export default Tasks