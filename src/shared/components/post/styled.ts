import styled from "styled-components";
import {  Link } from "react-router-dom";


export const Posts = styled(Link)`
width: 18rem ;
height: 20rem ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FFF;
border-radius: 0.5rem;
margin: 1.3rem;
padding: 1rem;
text-decoration: none;
color:inherit;
&:hover{
    transform: scale(1.02);
    box-shadow: #FF6600 0px 1px 3px, #FF6600 0px 1px 2px;
}
`;

export const Title = styled.h2`
font-size: 0.9em;
margin: 0.7rem;
`;
export const Body = styled.p`
font-size: 0.8em;
overflow: hidden;
text-overflow: ellipsis; 
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical; 
`;

