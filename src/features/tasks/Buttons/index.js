import { useSelector, useDispatch } from "react-redux"
import { ContainerButtons, Button } from "./styled"
import { selectTasks, toggleHideDone } from "../tasksSlice"

const Buttons = ({ setAllDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <ContainerButtons>
                <Button onClick={ () => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
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
}

export default Buttons