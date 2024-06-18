import { Container, Search } from './Header';
import { Input } from '../Input';
import { Button } from '../Button';

import Pokebola from '../../assets/gif/pokebola.gif';
import { PiMagnifyingGlassBold } from "react-icons/pi";

import usePokemon from '../../hook/usePokemon';

// -------------------------------------------------------

const Header = () => {

    const { pokemonName, handleChange, getPokemonId } = usePokemon();
    
    return (
        <Container>
            <Search>
                <Input
                    value={pokemonName}
                    onChange={handleChange}
                    placeholder="Enter Pokémon name"
                />
                <Button
                    type='submit'
                    title={<PiMagnifyingGlassBold />}
                    onClick={getPokemonId}
                />
            </Search>
            <img height={30} src={Pokebola} alt="pokebola" />
        </Container>
    );
};

export default Header;
