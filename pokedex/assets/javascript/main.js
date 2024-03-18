const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const goToback = document.getElementById('goToBack')
const maxRecord = 649
const limit = 10
let offset = 0

/* -------------------------------------------------------------------------------------------------  */

function convertPokemonToLi(pokemon) {
    return `
    <li onclick="gerarPokemonActive('${pokemon.name}', ${pokemon.number}, '${pokemon.photo}', types =[ ${pokemon.types.map((type) => `'${type}'`).join(',')}])" 
    
    class="pokemon ${pokemon.type}">
    
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
            
        <figure class="details">

            <img src='${pokemon.photo}' alt="${pokemon.name}">

            <ol class="types" id ="typesDeElementsPokemon" >
                ${pokemon.types.map((type) => `<li class="type ${type}" >${type} </li>`).join('')}</ol>

        </figure>
    </li>
    `
}

/* -------------------------------------------------------------------------------------------------  */

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML = newHtml
    })
}

loadPokemonItens(offset, limit)

/* -------------------------------------------------------------------------------------------------  */
loadMoreButton.addEventListener('click', () => { 
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecord) {
        loadPokemonItens(offset, limit)

    } else {
        offset += limit
        loadPokemonItens(offset, limit)
    }
})

/* ---------------------------------------  */
goToback.addEventListener('click', () => {

    if (offset > 0) {
        const newLimitMini = offset - limit
        loadPokemonItens(newLimitMini, limit)
        offset -= limit

    } else{
        loadPokemonItens(offset, limit)
    }
} )

/* -------------------------------------------------------------------------------------------------  */
