import { Container } from './Header';
import { Input } from '../Input';
import Pokebola from '../../assets/gif/pokebola.gif'

const Header = ()=>{
    return (
        <Container>
            <Input />
            <img height={30} src={Pokebola} alt="pokebola" />
        </Container>
    );
};

export default Header;