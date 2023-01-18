import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  { id: 1, content: "kup mleko", done: false },
  { id: 2, content: "kup bułki", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main>
      <h1 className="header"> Lista zadań </h1>

      <section className="container">
        <h2 className="container__header">Dodaj nowe zadanie</h2>
        <Form />
      </section>

      <section className="container">
        <header className="container__header">
          <h2 className="container__header--removeMargin">Lista zadań</h2>
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </header>
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </section>
    </main>
  );
}

export default App;
