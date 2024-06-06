import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 270px;
    height: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

export const IconContainer = styled.div`
    margin: .5rem;
`;

export const InputText =styled.input`
    padding: 0 1rem;
    width: 100%;
    background: #transparent;
    border-radius: .5rem;
    height: 30px;
    color: #000000;
`;

export const ErrorText =styled.p`
   font-size: .8rem;
   font-weight: 700;
   margin: 1rem;
   color: #c4000f;
   border: 1px solid #FFFFFF;
   background: #FE96AB;
   opacity: 0.8;
   padding: .5rem;
   border-radius: .5rem;
`;
