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
      <Header>Szczegóły zadania</Header>
      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={
          <>
            {task ?
              <>
                <strong>Ukończono zadanie:</strong> {task.done ? "Tak" : "Nie"}
              </>
              : ""}
          </>
        }
      />
    </Container>
  );
}

export default TaskPage;