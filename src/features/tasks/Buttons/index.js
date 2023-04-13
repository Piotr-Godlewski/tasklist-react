import { useSelector, useDispatch } from "react-redux"
import { ContainerButtons, Button } from "./styled"
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice"

const Buttons = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <ContainerButtons>
                <Button onClick={ () => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={ () => dispatch(setAllDone())}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </ContainerButtons>
        )
    )
}

export default Buttons