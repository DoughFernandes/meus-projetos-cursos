import { PiMagnifyingGlassBold } from "react-icons/pi";

import { 
    ContainerInput,
    InputText,
    Button
} from "./Input";

const Input = ()=>{
    return(
        <ContainerInput>
            <Button>
                <PiMagnifyingGlassBold />
            </Button>
            <InputText />
        </ContainerInput>
    )
};

export { Input };