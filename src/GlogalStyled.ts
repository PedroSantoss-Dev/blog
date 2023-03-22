import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  outline: none; 
}
body{
  width:100vw;
  height:100%;
}
`;