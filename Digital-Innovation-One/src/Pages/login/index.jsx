//Componentes
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";

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

const Login = ()=>{
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
                    <form>
                        <Input placeholder='E-mail'  leftIcon={<MdEmail />}  />
                        <Input placeholder='Senha' type='password' leftIcon={<MdLock />} />
                        <Button tittle='Entrar' variant='secundary' />
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