import styled from "styled-components";

export default styled.input`
    border: 1px solid ${({theme}) => theme.color.alto};
    padding: 10px;
    flex-grow: 1;
    margin: 5px;
`;