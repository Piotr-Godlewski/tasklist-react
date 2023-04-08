import styled from "styled-components";

export const Container = styled.section`
    background-color: ${({theme}) => theme.color.white};
    margin: 5px 15px;
    padding: 10px;
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({theme}) => theme.color.alto};
    padding: 15px;
    margin: 5px;
    display: grid;
    grid-template-columns: 1fr auto;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;