import React from "react";
import ContainerInput from "./style";

const Input = ({value, onChange})=>{
    return(
        <ContainerInput>
            <input
                type="text"
                placeholder="Usuario / NomeRepositorio"
                value={value}
                onChange={onChange}
            />
        </ContainerInput>
    );
};

export default Input;