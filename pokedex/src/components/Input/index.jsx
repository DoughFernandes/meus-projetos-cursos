import { 
    ContainerInput,
    InputText
} from "./Input";

const Input = ({value, onChange})=>{
    return(
        <ContainerInput>
            <InputText
                title="Search"
                value={value}
                onChange={onChange}
                placeholder="Charmander"
            />
        </ContainerInput>
    )
};

export { Input };