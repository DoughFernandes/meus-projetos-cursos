import styled from "styled-components";

const ContainerInput = styled.section`
    width: 70%;
    height: 2rem;
    margin: 1rem 0;
    transition: .1s ease-in-out;

    input{
        width: 100%;
        height: 100%;
        border: 1px solid #FFF;
        border-radius: .5rem;
        font-size: 1.2rem;
        padding: 0 1rem;
        borde: 1px solid #FFF;
        background-color: transparent;

        &:focus{
            transform: scale(1.01);
            background: #FFF;
            color: #000;
        }
    }
`;

export default ContainerInput;