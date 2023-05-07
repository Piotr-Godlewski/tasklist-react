import styled from "styled-components";

export const ContainerButtons = styled.div`
    display: flex;
    

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
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