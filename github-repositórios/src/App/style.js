import styled from "styled-components";

const Container = styled.section`
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    ul{
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 1rem 0;
    }
    footer{
        height: 3rem;
    }
`;

export default Container; 