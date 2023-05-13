import { Link } from "react-router-dom/cjs/react-router-dom";
import styled, { css } from "styled-components";

export const TaskList = styled.ul`
    padding: 0px;
    word-break: break-word;
    list-style: none;
`;

export const Item = styled.li`
    border-bottom: 1px solid ${({theme}) => theme.color.alto};
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
    transition: filter 0.5s;
    color: ${({theme}) => theme.color.white};

    &:active{
        border: 1px solid ${({theme}) => theme.color.black};
    }

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({theme}) => theme.color.forestGreen};

        &:hover {
            filter: brightness(115%);
        }
    `}

    ${({ removeTask }) => removeTask && css`
        background-color: ${({theme}) => theme.color.crimson};

        &:hover {
            filter: brightness(125%);
        }
    `}
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: ${({theme}) => theme.color.teal};
    transition: 0.5s;

    &:hover {
        filter: brightness(150%);
    }
`;