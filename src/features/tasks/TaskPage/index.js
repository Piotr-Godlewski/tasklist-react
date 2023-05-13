import Section from "../../../common/Section";
import Header from "../../../common/Header/styled";
import Container from "../../../common/Container/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { TaskStatus } from "./TaskStatus";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <>
        {task ?
          <>
            <Header>Szczegóły zadania</Header>
            <Section
              title={task.content}
              body={<TaskStatus/>}
            />
          </>
          : <Header>Sorry, nie znaleziono zadania 😭, spróbuj ponownie 😉</Header>
        }
      </>
    </Container>
  );
}

export default TaskPage;