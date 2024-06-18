import styled from "styled-components";

export const Container = styled.header`
    height: 3rem;
    width: 100%;
    min-width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #EFEFEF;
    z-index: 1;

    img {
        border-left: 3px solid #C40005;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;