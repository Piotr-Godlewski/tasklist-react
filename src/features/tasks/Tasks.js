import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";

function Tasks() {

  const {
    removeTask,
    setAllDone,
  } = useTasks();

  return (
    <Container>
      <Header>Lista zadań</Header>

      <Section
        title="Dodaj nowe zadanie"
        body={<Form/>}
      />

      <Section
        title="Lista zadań"
        body={
          <TasksList
            removeTask={removeTask}
          />}

        extraHeaderContent={
          <Buttons
           setAllDone={setAllDone}
          />}
      />
    </Container>

  );
}

export default Tasks;
