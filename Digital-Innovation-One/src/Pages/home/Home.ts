import styled from "styled-components";

export const Container =styled.main`
    height: 85vh;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const Tittle =styled.h2`
   font-weight: 700;
   font-size: 2rem;
   width: 320px;
   margin-bottom: 1rem;
   line-height: 2rem;
`;

export  const TittleHighLight =styled.span`
    color: #E41050;
`;

export const TextContent =styled.p`
    font-weight: 200;
    font-size: .8rem;
    width: 420px;
    margin-bottom: 2rem;
    line-height: 1rem;
`;