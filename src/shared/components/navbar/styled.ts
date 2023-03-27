import styled from "styled-components";
import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = styled.header`
 width:100% ;
 height:4rem ;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color:#EAECEF;
`;
export const Nav = styled(Link)`
text-decoration: none;
color:inherit;
`;
export const Logo = styled(FaBlog)`
height: 6rem;
color: black;
margin-left: 1rem;

`;
