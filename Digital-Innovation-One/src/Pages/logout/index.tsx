import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";

import { MdEmail, MdLock, MdPerson  } from 'react-icons/md'

import { 
    Container,
    Tittle,
    TittleLogout,
    ContainerLogout,
    SubTittle,
    Form,
    Text,
    Link
    
} from './Logout';

// ----------------------------------------------------------------------

const schema = yup.object({
    name: yup.string().required('É obrigatorio adicionar um nome'),
    email: yup.string().email('E-mail não e válido').required('Campo obrigatorio'),
    password: yup.string().min(6, 'No minimo 6 digitos').required('campo obrigatorio'),
}).required();

const Logout = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: {errors} }= useForm({
        resolver: yupResolver(schema),
        mode: 'onChange', 
    });

    const handleClickLogout = ()=>{
        navigate('/logout');
    }; 
   
    return (
        <>
            <Header />
            <Container>
                <Tittle>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas desejadas.
                </Tittle>
                <ContainerLogout>
                    <TittleLogout>Comece agora mesmo.</TittleLogout>
                    <SubTittle>Crie sua conta e make the charge.</SubTittle>
                    <Form >
                        <Input
                            errorMessage={errors.name?.message}
                            name="name"
                            control={control}
                            placeholder='Digite seu nome' 
                            leftIcon={<MdPerson />}
                        />
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
                            placeholder='password' 
                            type='password' 
                            leftIcon={<MdLock />}
                        />
                        <Button
                            type='submit' 
                            tittle='Criar minha conta grátis' 
                            variant='secundary'
                            onclick={handleClickLogout}
                        />
                    </Form>
                    <Text>
                        Ao clicar "criar minha conta grátis", declaro que aceito as Politicas de privacidade eos Termos de Uso da Digital Innovationk One
                    </Text>
                    <Text>Já tenho conta: <Link>Fazer login</Link></Text>
                </ContainerLogout>
            </Container>
        </>
    );
};

export { Logout };