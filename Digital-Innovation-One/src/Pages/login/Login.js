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
`;

export const Tittle =styled.h2`
   width: 80%;
   font-weight: 700;
   font-size: 2rem;
   margin:1rem;
   line-height: 2rem;
`;

export const TittleLogin =styled.p`
   font-weight: 700;
   font-size: 2rem;
   margin-bottom: 1rem;
   line-height: 2rem;
`;

export const SubTittle =styled.p`
   font-weight: 400;
   font-size: 1rem;
   margin-bottom: 1.5rem;
   line-height: 1rem;
`;

export const EsqueciText =styled.p`
   font-weight: normal;
   font-size: .8rem;
   line-height: 1rem;

   color: #E5E044;
`;

export const CriarTexte =styled.p`
   font-weight: normal;
   font-size: .8rem;
   line-height: 1rem;

   color: #E405D3;
`;

export const Wrapper =styled.div`
    max-width: 300px;
`;

export const Column = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
    flex: 1;
    margin: 2rem;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;
