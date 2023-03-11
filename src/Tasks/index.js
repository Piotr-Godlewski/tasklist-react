import { TaskList, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
  <TaskList>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={task.done && hideDoneTasks}
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

export default Tasks