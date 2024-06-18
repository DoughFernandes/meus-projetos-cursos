import Api from "../service/Api";

export const GetPokemonId = async (name) => {
    try {
        const response = await Api.get(`/pokemon/${name}`);
        console.log(response.data);
        
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
};

export default GetPokemonId;