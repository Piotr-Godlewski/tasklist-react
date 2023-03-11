import styled, { css } from "styled-components";

export const TaskList = styled.ul`
    padding: 0px;
    word-break: break-word;
    list-style: none;
`;

export const Item = styled.li`
    border-bottom: 1px solid #ddd;
    margin: 15px;
    padding: 10px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    transition: background 0.5s;
    color: white;

    &:active{
        border: 1px solid #000;
    }

    ${({ toggleDone }) => toggleDone && css`
        background-color: green;

        &:hover {
            background-color: hsl(120, 100%, 35%);
        }
    `}

    ${({ removeTask }) => removeTask && css`
        background-color: hsl(348, 83%, 40%);

        &:hover {
            background-color: hsl(348, 83%, 55%);
        }
    `}
`;