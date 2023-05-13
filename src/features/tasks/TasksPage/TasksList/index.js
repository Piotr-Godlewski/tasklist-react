import { useDispatch, useSelector } from "react-redux";
import { TaskList, Item, Content, Button } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { useLocation, Link } from "react-router-dom/cjs/react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TasksList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, query));
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