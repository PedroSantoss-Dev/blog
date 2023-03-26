import styled from "styled-components";


export const Container = styled.section`
width:100%;
height: 100%;
display: flex;
`;
export const Posts = styled.article`
width:60%;
display: flex;
flex-direction: column;
background: rgba(255, 255, 255, 0.534);

`;
export const Comments = styled.article`
width:40%;
display: flex;
flex-direction: column;
`;
export const Title = styled.h1`
font-size: 1.1em;
margin: 2rem;
`;
export const Body = styled.p`
width: 70%;
margin-left: 2rem;
font-size: 0.9em;
`;