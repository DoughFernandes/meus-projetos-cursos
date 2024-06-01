import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: .5rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: Column;
    align-items: center;
`;

export const Wrapper = styled.header`

    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #151515;
`;

export const BuscarInputContainer = styled.div`
    width: 10rem;
    height: 2rem;
    background: #2D2D37;
    border-radius: .5rem;
    padding: .1rem .2rem;
    margin: 0 .5rem;
`;

export const Menu = styled.a`
    font-style: normal;
    font-size: 1rem;
    line-height: 25px;
    margin-right: 1rem;
`;

export const MenuRight = styled.a`
    font-style: normal;
    font-size: .8rem;
    line-height: 25px;
    margin-right: 1rem;
`;

export const UserPicture = styled.img`
    width: 32px;
    bored-radius: 32px;
    border: 2px solid #FFFFFF;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    flex: 1;
    border: none;
    color: #FFFFFF;
    border-radius: 8px;
`;