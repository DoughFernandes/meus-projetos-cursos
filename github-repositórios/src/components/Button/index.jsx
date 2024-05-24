import React from "react";
import ButtonContainer from "./style";

const Button = ({onclick})=>{
    return(
        <ButtonContainer >
            <button
                type='button'
                onClick={onclick}
            >Buscar
            </button>
        </ButtonContainer>
    )
}

export default Button;