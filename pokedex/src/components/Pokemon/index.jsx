import { 
    ContainerPokemons,
    ImgPokemons 
} from './PokemonImg';

import Charmander from '../../assets/img/page/charmander.png';

const Pokemon =()=>{
    return (
        <ContainerPokemons>
            <ImgPokemons src={Charmander}/>
        </ContainerPokemons>
    )
};

export default Pokemon;