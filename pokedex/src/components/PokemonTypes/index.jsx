import Charmander from '../../assets/img/page/charmander.png';

import { 
    ContainerTypes,
    TitleTypes,
    Tittle,
    Types,
    ImgPokemons,
    TitleEvolution
} from './PokemonTypes'

const PokemonTypes = ()=>{
    return(
        <ContainerTypes>
            <Tittle>Elements</Tittle>
            <TitleTypes>
                <Types>Fire</Types>
                <Types>Fire</Types>
                <Types>Fire</Types>
            </TitleTypes>
            <Tittle>Evolution</Tittle>
            <TitleEvolution>
                <ImgPokemons src={Charmander} />
                <ImgPokemons src={Charmander} />
                <ImgPokemons src={Charmander} />
            </TitleEvolution>
        </ContainerTypes>
    )
};

export default PokemonTypes;