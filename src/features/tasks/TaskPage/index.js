import Section from "../../../common/Section";
import Header from "../../../common/Header/styled";
import Container from "../../../common/Container/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

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
              body={
                <>
                  <strong>Ukończono zadanie:</strong>
                  {task.done ? " Tak" : " Nie"}
                </>
              }
            />
          </>
          : <Header>Nie znaleziono zadania</Header>
        }
      </>
    </Container>
  );
}

export default TaskPage;