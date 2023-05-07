import { useDispatch, useSelector } from "react-redux";
import { TaskList, Item, Content, Button } from "./styled";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <TaskList>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
            toggleDone
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/tasks/${task.id}`}>{task.content}</Link>
          </Content>
          <Button
            onClick={() => dispatch(removeTask(task.id))}
            removeTask
          >
            🗑
          </Button>
        </Item>
      ))}
    </TaskList>
  )
}

export default TasksList