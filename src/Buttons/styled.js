import styled from "styled-components";

export const ContainerButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    border: none;
    color: teal;
    transition: 0.5s;
    background-color: transparent;
    padding: 10px;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #ccc;
    }
`;