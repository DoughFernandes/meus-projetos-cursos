/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from "react-router-dom";
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
import { useAuth } from "../../hooks/userAuth";

// ---------------------------------------------------------------

const Header = ()=>{
    const { user, hangleLogout }  = useAuth();
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
                    <Link to='/'>
                        <img src={Logo} alt="logo DIO" width={100} />
                    </Link>
                    {user.id ? (
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
                    {user.id ? (
                        <>
                            <UserPicture src='https://avatars.githubusercontent.com/u/152017678?v=4'/>
                           <a href="#" onClick={hangleLogout} >Sair</a>
                        </>
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