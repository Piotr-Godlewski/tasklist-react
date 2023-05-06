import { useDispatch } from "react-redux"
import { ContainerButtons, Button } from "../ButtonsStyled/styled"
import {
    fetchExampleTasks
} from "../tasksSlice"

const ButtonGetExampleTasks = () => {
    const dispatch = useDispatch();

    return (
        <ContainerButtons>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </ContainerButtons>
    )
}

export default ButtonGetExampleTasks