import styled from "styled-components";

export const ContainerInput = styled.section`
    height: 2rem;
    width: 15rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
`;

export const InputText = styled.input`
    font-family: monospace;
    font-weight: 700;
    height: 100%;
    width: 100%;
    border: 1px solid #FFF;
    padding: 0 1rem;
    margin: 0 .1rem;
    transition: border 0.3s ease;

    &:focus {
        border: 2px solid var(--red-color);
        outline: none;
    }

    &:active {
        color: #000;
    }
`;

export const Button = styled.button`
    display: flex;
    algin-items: flex;
    padding: .3rem .4rem;
    background: #C40005;
    border: none;
    color: #FFFFFF;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
        opacity: .6;
    }
`;