import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-style: normal;
    list-style: none;
    text-decoration: none;
  }

  body {
    height: 100vh;
    color: #FFF;
  }

  :root{
    --red-color: #C40005;
    --black-color: #000;
    --blue-light-color: #15C2CC;
    --grey-light-color: #DDDDDD;
  }
`;
 
export default GlobalStyle;