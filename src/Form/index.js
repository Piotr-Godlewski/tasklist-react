import { useRef, useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (trimmedNewTaskContent === "") {
            return
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    const inputRef = useRef(null);

    const inputFocus = () => {
        inputRef.current.focus();
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                autoFocus
                ref={inputRef}
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <button
                onClick={inputFocus}
                className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form