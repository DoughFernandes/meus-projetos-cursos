const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecord = 151
const limit = 10
let offset = 0

function convertPokemonToLi(pokemon) {
    return `
    <li onclick="gerarPokemonActive('${pokemon.name}', ${pokemon.number}, '${pokemon.photo}',${pokemon.types.map((type) => `'${type}'`).join(',')})" 
    
    class="pokemon ${pokemon.type}">
    
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
            
        <figure class="details">

            <ol class="types" id ="typesDeElementsPokemon" >
                ${pokemon.types.map((type) => `<li class="type ${type}" >${type} </li>`).join('')}</ol>

            <img src='${pokemon.photo}' alt="${pokemon.name}">

        </figure>
    </li>
    `
}

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecord) {
        const newLimit = maxRecord - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
    
})
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML = newHtml
    })
}

loadPokemonItens(offset, limit)