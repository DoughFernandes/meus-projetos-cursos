import { IButton } from './types';
import { ButtonContainer } from "./Button";

// -------------------------------------------------

const Button = ({disabled, variant='primary', tittle, onclick }: IButton)=>{
    return (
        <ButtonContainer disabled={disabled} variant={variant} onClick={onclick}>
            {tittle}
        </ButtonContainer>
    );
}

export { Button };