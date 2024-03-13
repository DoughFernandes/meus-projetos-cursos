function convertPokemonToLi (pokemon){
    return `
        <li class="pokemon ${pokemon.type}">

        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        
        <figure class="details">

            <ol class="types ">
                ${pokemon.types.map((type) => `<li class="type ${type}"> ${type} </li>`).join('')}    
            </ol>

            <img src='${pokemon.photo}' alt="${pokemon.name}">

        </figure>

        </li> `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
    //Pegando list de Pokemon convertendo em list HTML e join sem "SEPARADOR"

})