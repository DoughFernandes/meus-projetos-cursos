import React from 'react';
import { ButtonContainer } from "./Button";

const Button = ({variant='primary', tittle})=>{
    return (
        <ButtonContainer variant={variant} >
            {tittle}
        </ButtonContainer>
    );
}

export { Button };