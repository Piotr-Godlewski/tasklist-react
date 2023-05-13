import styled from "styled-components";
import {NavLink} from "react-router-dom"

export const StyledNavLink = styled(NavLink)`
color: ${({theme}) => theme.color.white};
text-decoration: none;

&.active {
    font-weight: bold;
};
`

export const NavList = styled.ul`
margin-top: 0;
padding: 0;
background-color: ${({theme}) => theme.color.teal};
list-style: none;
display: flex;
justify-content: center;
;
`

export const ListItem = styled.li`
padding: 20px;
`