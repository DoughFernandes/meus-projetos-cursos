import { IButton } from './types';
import { ButtonContainer } from "./Button";

// -------------------------------------------------

const Button = ({variant='primary', tittle, onclick }: IButton)=>{
    return (
        <ButtonContainer variant={variant} onClick={onclick}>
            {tittle}
        </ButtonContainer>
    );
}

export { Button };