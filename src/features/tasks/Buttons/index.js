import { useSelector, useDispatch } from "react-redux"
import { ContainerButtons, Button } from "./styled"
import { toggleHideDone, setAllDone, selectHideDone, selectAllTasksDone, selectAreTasksEmpty } from "../tasksSlice"

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const allTasksDone = useSelector(selectAllTasksDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();

    return (
        !areTasksEmpty && (
            <ContainerButtons>
                <Button onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={() => dispatch(setAllDone())}
                    disabled={allTasksDone}
                >
                    Ukończ wszystkie
                </Button>
            </ContainerButtons>
        )
    )
}

export default Buttons