import { useState } from 'react';
import { Api } from '../service/Api';

const usePokemon = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [data, setData] = useState(null);

    const handleChange = (event) => {
        setPokemonName(event.target.value);
    };

    const getPokemonId = async () => {
        try {
            const response = await Api.get(`/pokemon/${pokemonName}`);
            setData(response.data);
            console.log(response.data);

        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    };

    return {
        pokemonName,
        handleChange,
        getPokemonId,
        data,
    };
};

export default usePokemon;
