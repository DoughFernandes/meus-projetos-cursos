import { Button } from "../Button";

import { 
    ContainerInput,
    InputText
} from "./Input";

const Input = ()=>{
    return(
        <ContainerInput>
            <Button />
            <InputText title="Search"/>
        </ContainerInput>
    )
};

export { Input };