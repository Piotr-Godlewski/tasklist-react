import "./style.css"

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, setAllDone }) => (
    tasks.length > 0 && (
        <div className="container__buttons">
            <button
                className="buttons"
                onClick={toggleHideDoneTasks}
            >
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons"
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
)

export default Buttons