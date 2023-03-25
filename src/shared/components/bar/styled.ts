import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome, HiUsers } from "react-icons/hi"

export const Menu = styled.nav`
width: 20rem;
height: 3rem;
display: flex;
`;
export const Btn = styled(Link)`
margin:1rem;
text-decoration: none;
color:inherit;
`;
export const Home = styled(HiOutlineHome)`
transform: scale(1.3);
`;
export const Users = styled(HiUsers)`
transform: scale(1.3);
`;