import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header/styled";
import Container from "../../../common/Container/styled";
import ButtonGetExampleTasks from "./ButtonGetExampleTasks";
import Search from "./Search";

const TasksPage = () => {
  return (
    <Container>
      <Header>Lista zadań</Header>

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<ButtonGetExampleTasks />}
      />

      <Section
        title="Wyszukiwarka zadań"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;