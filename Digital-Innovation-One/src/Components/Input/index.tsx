import { IInput  } from "./type";
import { InputContainer, InputText, IconContainer, ErrorText } from './Input';
import { Controller } from "react-hook-form";

// ---------------------------------------------

const Input = ({leftIcon, name, control, errorMessage, ...rest}: IInput)=>{
    return (
        <>
            <InputContainer>
                    {leftIcon ? <IconContainer>{leftIcon}</IconContainer> :   null}
                    <Controller
                        name={name}
                        control={control}
                        rules={{required: true}}
                        defaultValue=""
                        render={
                            ({field}) => 
                            <InputText
                                {...field}
                                {...rest}
                                value={field.value ?? ""}
                                />
                            }
                            
                    />
            </InputContainer>
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    );
};

export { Input };