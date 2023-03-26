import styled from "styled-components";


export const Nav = styled.nav`
width: 25rem;
display: flex;
justify-content: center;
align-items: center;
background: rgba(255, 255, 255, 0.534);
margin: 2.5rem;
border-radius : 0.3rem ;
`;
export const Posts = styled.article`
width: 27rem;
height: 5.5rem;
background: rgba(255, 255, 255, 0.534);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-decoration: none;
color:inherit;
border-radius : 0.5rem ;
box-shadow: #FF6600 0px 1px 3px, #FF6600 0px 1px 2px;
margin: 1.5rem;
padding: 0.9rem;
`;
export const Container = styled.article`
width: 20rem;
height: 16rem;
display: flex;
background: rgba(255, 255, 255, 0.534);
flex-direction: column;
justify-content: center;
align-items: center;
text-decoration: none;
color:inherit;
border-radius : 0.5rem ;
margin: 1.5rem;
`;
export const Title = styled.h4`
font-size: 0.8em;
margin:0.9rem;
`;
export const Body = styled.p`
font-size: 0.8em;
margin:0.4rem;

`;
export const Text = styled.p`
font-size: 0.6em;
`;
export const Btn = styled.button`
height:3rem;
border: none;
margin:0.6rem;
background-color: transparent;
border-bottom: solid 1px #FF6600  ${(props)=>props.disabled?null:'none'};
color: #FF6600  ${(props)=>props.disabled?null:'none'};
`;