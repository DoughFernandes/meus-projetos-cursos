//Componentes
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";

import { api } from '../../services/api';
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


// ----------------------------------------------------------------------

const schema = yup.object({
    email: yup.string().email('E-mail não e válido').required('Campo obrigatorio'),
    password: yup.string().min(6, 'No minimo 6 digitos').required('campo obrigatorio'),
}).required();

const Login = ()=>{
    const navigate = useNavigate();

    const { control, handleSubmit, formState: {errors, isValid} }= useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange', 
    });

    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1){
                navigate('/feed');
            }else{
                alert('E-mail ou senha incorretos');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro, tente novamente');
        }
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
                            // onclick={handleClickSignIn}
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