import Form from "./Form";

const tasks = [
  {id:1, content: "kup mleko", done: true},
  {id:2, content: "kup bułki", done: false},
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
          <div className="container__buttons"></div>
        </header>
        <ul className="tasks"></ul>
      </section>
    </main>
  );
}

export default App;
