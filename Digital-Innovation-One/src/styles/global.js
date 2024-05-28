import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    *{
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        margin:  0;
        padding: 0;
        color: #FFFFFF;
        text-decoretion: none;
        list-style: none;
    }
    body{
        background: #1E192C;
    }
`