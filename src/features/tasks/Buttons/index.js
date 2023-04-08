import { ContainerButtons, Button } from "./styled"

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, setAllDone }) => (
    tasks.length > 0 && (
        <ContainerButtons>
            <Button onClick={toggleHideDoneTasks}>
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </ContainerButtons>
    )
)

export default Buttons