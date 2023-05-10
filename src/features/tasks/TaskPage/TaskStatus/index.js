import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../../tasksSlice";
import { StyledTaskStatus } from "./styled";

export const TaskStatus = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <StyledTaskStatus>
            <>
                <strong>Ukończono zadanie:</strong>
                {task.done ? " Tak" : " Nie"}
            </>
        </StyledTaskStatus>
    )

}