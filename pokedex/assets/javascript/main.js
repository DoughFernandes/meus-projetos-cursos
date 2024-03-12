const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset =${offset}&limit=${limit}`; 


function convertPokemonToLi (pokemon){
    return `
        <li class="pokemon"><!-- Bulbasaur -->

        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        
        <figure class="details">

            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
                
            </ol>

            <img src="https://raw.githubusercontent.com/PokeAPi/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">

        </figure>

        </li> `
}

const pokemonList = document.getElementById('pokemonList')


// CHAMAR A API E PASSAR UMA FUNCTION

fetch(url) // return promessa de rsposta
    
    .then((response) => response.json())/*Converte o recebimento em JSON */

    .then((jsonBody) => jsonBody.results)//Pegar o resultado da list de pokemon

    .then((pokemons) => { 

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
            
            
        }

    })//a list de pokemon

    .catch((error) => {console.log(error)})//Chamar API, assim que ouver erro chamar function.