import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    *{
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        margin: 0;
        padding: 0;
        color: #FFFFFF;
        text-decoration: none;
        list-style: none;
    }
    body{
        width: 100%;
        background: #1E192C;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

`;

export { GlobalStyles };
