import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  body {
    color: #FFF;
  }

  :root{
    --red-color: #C40005;
  }
`;
 
export default GlobalStyle;