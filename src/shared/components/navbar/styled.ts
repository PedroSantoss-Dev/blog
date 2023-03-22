import styled from "styled-components";
import { FaBloggerB } from "react-icons/fa";

export const Header = styled.header`
 width:100% ;
 height:4rem ;
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color:#EAECEF;
`;
export const Nav = styled.nav`
width:80% ;
height:100% ;
display: flex;
justify-content: flex-end;
align-items: center;
margin-right: 0.9rem; 
`;
export const Logo = styled(FaBloggerB)`
height: 4rem;
color: black;
margin-left: 1rem;

`;
export const Btn = styled.div`
width:5rem ;
height:2rem ;
display: flex;
justify-content: center;
align-item: center;
margin-left: 1rem;
`;