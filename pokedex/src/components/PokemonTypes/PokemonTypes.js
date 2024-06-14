import styled from "styled-components";

export const ContainerTypes = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 1rem;
`;

export const Tittle = styled.h2`
    letter-spacing: .2rem;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
`;

export const TitleTypes = styled.ul`
    font-weight: 300;
    letter-spacing: .2rem;
    font-size: 1.2rem;
    color: var(--blue-light-color);
`;

export const TitleEvolution = styled.ul`
    display: flex;
    gap: 2rem;
`;

export const Types = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2rem;
    border-radius: 1rem;
    background-color: var( --grey-light-color);
    padding-left: 2rem;
    color: #000;
    margin: 1rem;

    &::before {
        content: '';
        position: absolute;
        left: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: var(--red-color);
    }
`;

export const ImgPokemons = styled.img`
    width: 5rem;
    height: 5rem;
`;