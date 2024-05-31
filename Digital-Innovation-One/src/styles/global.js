import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

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

`