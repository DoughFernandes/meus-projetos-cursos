import styled from "styled-components";


export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 30px;
    font-family:"Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    grid-area: input;
    
    input{
        padding: .5rem 1rem;
        width: 95%;
        height: 50%;
        background: #F0F9F9;
        text-align: right;
        border-radius: 1rem;
        font-size: 30px;
        font-weight: bold;
        color: rgb(124, 123, 123);
    }
`