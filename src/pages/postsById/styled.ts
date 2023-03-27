import styled from "styled-components";


export const Container = styled.section`
width:100%;
height: 100%;
display: flex;
@media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
}
`;
export const Posts = styled.article`
width:60%;
display: flex;
flex-direction: column;
background: rgba(255, 255, 255, 0.534);
@media (max-width: 850px) {
    width:100%;
    height:17rem;
    margin-bottom: 1.5rem
}

`;
export const Comments = styled.article`
width:40%;
display: flex;
flex-direction: column;
@media (max-width: 600px) {
    width:100%;
}
@media (max-width: 850px) {
    width:85%;
}

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