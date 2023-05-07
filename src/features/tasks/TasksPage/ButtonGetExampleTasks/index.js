import { useDispatch, useSelector } from "react-redux"
import { ContainerButtons, Button } from "../ButtonsStyled/styled"
import {
    fetchExampleTasks, selectLoadingExampleTasks
} from "../../tasksSlice"

const ButtonGetExampleTasks = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoadingExampleTasks);

    return (
        <ContainerButtons>
            <Button
                disabled={loading}
                onClick={() => dispatch(fetchExampleTasks())}
            >
                {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>
        </ContainerButtons>
    )
}

export default ButtonGetExampleTasks