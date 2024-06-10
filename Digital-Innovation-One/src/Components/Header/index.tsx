import { useNavigate } from "react-router-dom";
import { IHeader } from './types';
import Logo from '../../Assets/Img/Logo_dio.png'
import { Button } from '../Button';
import { 
    BuscarInputContainer,
    Container,
    MenuRight,
    Wrapper,
    Input,
    Menu,
    Row,
    UserPicture
} from "./Header";

// ---------------------------------------------------------------

const Header = ({autentic}: IHeader)=>{
    const navigate = useNavigate();

    const handleClickSignIn = ()=>{
        navigate('/login');
    };
    const handleClickSignUp = ()=>{
        navigate('/logout');
    };
    
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} alt="logo DIO" width={100} />
                    {autentic ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder='Buscar'/>
                            </BuscarInputContainer>
                            <Menu>Ao vivo</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autentic ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/152017678?v=4'/>
                    ) : (
                        <>
                            <MenuRight href='#'>Home</MenuRight>
                            <Button onclick={handleClickSignIn} tittle='Entrar' />
                            <Button onclick={handleClickSignUp} tittle='Cadastrar' />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };