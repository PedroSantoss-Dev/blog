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
  background: url('https://i.pinimg.com/originals/26/92/9f/26929f59519142df6502d1cfb27c28d6.gif');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
  background-attachment: fixed;
}
`;