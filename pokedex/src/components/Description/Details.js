import styled from "styled-components";
import Fundo from '../../assets/img/page/fundo.png';


export const ContainerDescription = styled.section`
    height: 90vh;
    width: 95%;
    min-width: 400px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: space-around;
    align-items: center;
    color: var(--black-color);
    background-image: url(${Fundo});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom right;
    border-radius: 1rem;
    margin: 0 auto;
    -webkit-box-shadow: 0px 0px 48px 33px rgba(53,56,55,0.5);
    -moz-box-shadow: 0px 0px 48px 33px rgba(53,56,55,0.5);
    box-shadow: 10px 100px 48px 33px rgba(53,56,55,0.5);
`;

export const Column = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-left: 5rem;
    gap: 1rem;

    &.hide-on-small {
        @media (max-width: 900px) {
            display: none;
        }
    }

    @media (max-width: 420px) {
        margin-left: 3rem;
    }
`;

export const SubTittle = styled.h2`
    color: var(--red-color);
    font-size: 1rem;
    font-weight: 500;
`;

export const Title = styled.h1`
    font-weight: 300;
    font-size: 3rem;
    font-size: 2rem;
    letter-spacing: .5rem;
`;

export const Details = styled.section`
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: .2rem;
`;