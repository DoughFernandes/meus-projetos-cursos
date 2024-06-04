import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 1rem;
    margin: 1rem;
`;

export const NameText = styled.div`
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
`;

export const Progress = styled.div`
    width: 180px;
    height: 6px;
    background: #FFF;
    border-radius: .5rem;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual})=> percentual}%;
        height: 6px;
        border-radius: .5rem;
        position: absolute;
        background: #23D07A;
    }
`;