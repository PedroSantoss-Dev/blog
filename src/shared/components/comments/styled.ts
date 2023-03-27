import styled from "styled-components";


export const Container = styled.article`
width: 90%;
display: flex;
flex-direction: column;
margin:0.9rem;
background: rgba(255, 255, 255, 0.534);
border-radius: 0.4rem;
box-shadow: #FF6600 0px 1px 3px, #FF6600 0px 1px 2px;
@media (max-width: 600px) {
   width: 22.5rem;
   height:9.5rem;
}
`;

export const Box = styled.div`
width: 90%;
display: flex;
justify-content: flex-start;
align-items: center;
margin: 1rem;
.perfil{
    width: 70%;
    display: flex;
    flex-direction: column;
}

`;
export const avatar = styled.img`
border-radius: 50%;
align-items: center;
height: 2.4rem;
width: 2.5rem;
margin-right: 0.8rem;
`;
export const Name = styled.h4`
font-size: 0.9em;
`;
export const Email = styled.h5`
font-size: 0.8em;
`;
export const  Body = styled.p`
font-size: 0.8em;
`