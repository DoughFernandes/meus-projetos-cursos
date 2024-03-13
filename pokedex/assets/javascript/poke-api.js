const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new pokemonModel()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const {type} = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemons) => {
    return fetch(pokemons.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset =${offset}&limit=${limit}`;

    return fetch(url) // Buscar List pokemons
        .then((response) => response.json()) /*Converte o response em JSON */
        .then((jsonBody) => jsonBody.results) //Results em jsonBody
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))//Busca de details e converter em JSON.
        .then((detailRequest) => Promise.all(detailRequest))//Esperar a requisição terminar ppor completa.
        .then((pokemonsDetails) => pokemonsDetails)
}
