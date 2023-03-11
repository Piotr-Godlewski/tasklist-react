import styled from "styled-components";

export const Container = styled.section`
    background-color: #fff;
    margin: 5px 15px;
    padding: 10px;
`;

export const Header = styled.header`
    border-bottom: 1px solid #ddd;
    padding: 15px;
    margin: 5px;
    display: grid;
    grid-template-columns: 1fr auto;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;