import React from 'react';

import Logo from '../../Assets/Img/Logo_dio.png'

import { Button } from '../Button';
import { 
    BuscarInputContainer,
    // UserPicture,
    Container,
    MenuRight,
    Wrapper,
    // Column,
    Input,
    Menu,
    Row,
    UserPicture
} from "./Header";

const Header = ({autentic})=>{
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
                            <Button tittle='Entrar' />
                            <Button tittle='Cadastrar' />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };