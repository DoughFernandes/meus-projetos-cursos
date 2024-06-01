import React from 'react';
import { ButtonContainer } from "./Button";

const Button = ({variant='primary', tittle, onclick, type})=>{
    return (
        <ButtonContainer type={type} variant={variant} onClick={onclick}>
            {tittle}
        </ButtonContainer>
    );
}

export { Button };