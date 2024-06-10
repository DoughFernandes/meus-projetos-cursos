import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    min-height: 90vh;
    gap: 1rem;
`;

export const Tittle = styled.h2`
    text-align: flex-start;
    margin-left: .1rem;
    width: 50%;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
`;

export const ContainerLogout = styled.section`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const TittleLogout = styled.h3`
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0;
    line-height: 3rem;
`;

export const SubTittle = styled.small`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1rem;
    opacity: 0.7;
    margin-bottom: 2rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.p`
    margin-top: 1rem;
    font-size: .8rem;
    line-height: 1rem;
    opacity: 0.8;
`;

export const Link = styled.a`
    color: #128701;
    cursor: pointer;
`;