import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 15px;
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    padding: 10px;
    flex-grow: 1;
    margin: 5px;
`;

export const Button = styled.button`
    background-color: teal;
    transition: 0.5s;
    color: white;
    border: none;
    padding: 10px;
    margin: 5px;

    @media (max-width: 767px) {
        width: 100%;
    }

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.10);
        transition: 0.5s;
    }

    &:active {
        border: 1px solid #000;
    }
`