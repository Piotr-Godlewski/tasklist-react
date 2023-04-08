import styled from "styled-components";

export const ContainerButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    border: none;
    color: ${({theme}) => theme.color.teal};
    transition: 0.5s;
    background-color: transparent;
    padding: 10px;

    &:hover {
        filter: brightness(110%);
    }

    &:disabled {
        color: ${({theme}) => theme.color.silver};
    }
`;