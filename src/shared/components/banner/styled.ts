import styled from "styled-components";
import { FaBlog } from "react-icons/fa";


export const Container = styled.section`
width: 100%;
height: 100vh;
background: rgba(255, 255, 255, 0.534);
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem;
`;

export const Banner = styled(FaBlog)`
height: 6rem;
color: black;

`;
export const Title = styled.h1`
margin:   0 0 170px 130px;
`;