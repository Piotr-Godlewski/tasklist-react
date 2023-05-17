import { useDispatch, useSelector } from "react-redux";
import { TaskList, Item, Content, Button, StyledLink } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery, selectSearchStatus } from "../../tasksSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TasksList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const searchStatus = useSelector(selectSearchStatus);
  const dispatch = useDispatch();

  return (
    <TaskList>
      {(searchStatus && tasks.length === 0) ?
        "brak zadania, którego szukasz 🧐" :
        tasks.map(task => (
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
              <StyledLink to={`/tasks/${task.id}`}>{task.content}</StyledLink>
            </Content>
            <Button
              onClick={() => dispatch(removeTask(task.id))}
              removeTask
            >
              🗑
            </Button>
          </Item>
        ))
      }
    </TaskList>
  )
}

export default TasksList