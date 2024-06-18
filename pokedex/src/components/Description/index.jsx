import { 
    ContainerDescription,
    Column,
    Title,
    Details,
    SubTittle
} from './Details';

import PokemonTypes from '../PokemonTypes';
import Pokemon from "../Pokemon";
import usePokemon from "../../hook/usePokemon";

// -----------------------------

const DescriptionContainer = ()=>{
    const { data } = usePokemon();
    console.log(data);

    return(
        <ContainerDescription>
            <Column>
                <Title>Charlizard</Title>
                <Details>
                    <SubTittle>Description</SubTittle>
                    Charizard is a Pokémon that has the ability to fly. It can fly through the air without using its wings. It has the ability to make a high-pitched sound when it flies.
                </Details>
                <PokemonTypes />
            </Column>
            <Column className="hide-on-small">
                <Pokemon />
            </Column>
        </ContainerDescription>
    )
};

export default DescriptionContainer;