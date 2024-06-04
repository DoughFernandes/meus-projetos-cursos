import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 1rem;
    padding: .5rem 0;
    min-width: 150px;
    width: 100%;

    ${({variant}) => 
        variant !== 'primary' && css `
            min-width: 167px;
            height: 2.5rem;
            background: #E41050;

            &:hover{
                opacity: 0.6;
                cursor: pointer;
            }

            &::after{
                content: '';
                border: 1px solid #E41050;
                top: -5px;
                left: -6px;
                width: calc(100% + 10px);
                height: calc(100% + 10px);
                border-radius: 1rem;
            }
    `}

`;