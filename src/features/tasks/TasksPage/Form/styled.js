import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 15px;
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.color.teal};
    transition: 0.5s;
    color: ${({theme}) => theme.color.white};
    border: none;
    padding: 10px;
    margin: 5px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        width: 100%;
    }

    &:hover {
        filter: brightness(110%);
        transform: scale(1.10);
        transition: 0.5s;
    }

    &:active {
        border: 1px solid ${({theme}) => theme.color.black};
    }
`