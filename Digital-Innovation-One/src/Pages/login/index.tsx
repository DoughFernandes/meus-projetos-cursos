//Componentes
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";

import { IFormData } from "./type";

import { MdEmail, MdLock } from 'react-icons/md'
import {
    TittleLogin,
    EsqueciText,
    CriarTexte,
    SubTittle,
    Container,
    Wrapper,
    Column,
    Tittle,
    Row
} from './Login'
import { useAuth } from "../../hooks/userAuth";


// ----------------------------------------------------------------------

const schema = yup.object({
    email: yup.string().email('E-mail não e válido').required('Campo obrigatorio'),
    password: yup.string().min(6, 'No minimo 6 digitos').required('campo obrigatorio'),
}).required();

const Login = ()=>{
    const { hangleLogin } = useAuth();

    const { control, handleSubmit, formState: {errors, isValid} } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        reValidateMode: 'onChange'
    });

    const onSubmit = async (formData: IFormData) => {
        hangleLogin(formData);
    };
    

    return(
        <>
            <Header />
            <Container>
                <Column>
                    <Tittle>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rapido nas empresas mais desejadas.
                    </Tittle>
        
                    <Button tittle='Comecar agora' variant='secundary'></Button>
                </Column>
                <Column>
                   <Wrapper>
                    <TittleLogin>Faça seu cadastro</TittleLogin>
                    <SubTittle>Faça se login e make the changer._</SubTittle>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            errorMessage={errors.email?.message}
                            name="email"
                            control={control}
                            placeholder='E-mail' 
                            leftIcon={<MdEmail />}
                        />
                        <Input
                            errorMessage={errors.password?.message}
                            name="password" 
                            control={control} 
                            placeholder='Senha' 
                            type='password' 
                            leftIcon={<MdLock />}
                        />
                        <Button 
                            type='submit' 
                            tittle='Entrar' 
                            variant='secundary'
                            disabled={!isValid}
                        />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarTexte>Criar uma conta</CriarTexte>
                    </Row>
                   </Wrapper>
                </Column>
            </Container>
        </>
    )
};

export { Login };