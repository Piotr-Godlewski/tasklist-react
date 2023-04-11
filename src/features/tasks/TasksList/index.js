import { useSelector } from "react-redux";
import { TaskList, Item, Content, Button } from "./styled";
import { selectTasks } from "../tasksSlice";

const TasksList = ({ removeTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <TaskList>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            onClick={() => toggleTaskDone(task.id)}
            toggleDone
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            {task.content}
          </Content>
          <Button
            onClick={() => removeTask(task.id)}
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