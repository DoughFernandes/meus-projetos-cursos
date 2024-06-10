import styled from "styled-components";
import { IColumn } from "./type";

export const Container =styled.main`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2rem 0;
`;

export const Tittle =styled.h3`
   font-weight: 700;
   font-size: 2rem;
   width: 320px;
   margin: 0 1rem;
   line-height: 2rem;
`;

export  const TittleHighLight =styled.h3`
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
    color: #E41050;
    margin: 1rem;
`;

export const Column =styled.div<IColumn>`
    flex: ${({flex})=> flex};
`;