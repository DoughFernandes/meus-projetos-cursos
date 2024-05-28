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
    Row
} from "./Header";

const Header = ()=>{
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} alt="logo DIO" width={100} />
                    <BuscarInputContainer>
                        <Input placeholder='Buscar'/>
                    </BuscarInputContainer>
                    <Menu>Ao vivo</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button tittle='Entrar' />
                    <Button tittle='Cadastrar' />
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };