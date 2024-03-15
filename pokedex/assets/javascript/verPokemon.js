
function convertCardToLi(namePokemon, idPokemon, photoPokemon, typePokemon,typePokemon2 = '' ) {
    console.log(namePokemon, idPokemon, photoPokemon, typePokemon,typePokemon2)
    return `
            <section id="removerHtml" class= "card">
                <button onclick="delet()" class="btnCard" type="button" title="button"></button>

                <div class="top">
                    <img src="${photoPokemon}" alt="${namePokemon}">
                </div>

                <div class="detailsPokemon ${typePokemon}">
                    <div class="detailsNumber">#${idPokemon}</div>
                    <div class="detailsName">${namePokemon}</div>
                    <div class="detailsType">${typePokemon} ${typePokemon2}</div>
                </div>

            </section>
        `
}

function pegarIdDeTypes (){
    const recuperarTypesPokemon = document.querySelector('#typesDeElementsPokemon')
    
    console.log(recuperarTypesPokemon)
}

function gerarPokemonActive(namePokemon, idPokemon, photoPokemon, typePokemon,typePokemon2){
    const newHtmlPokemonActive = document.getElementById('displayCardPokemon')
    newHtmlPokemonActive.innerHTML = convertCardToLi(namePokemon, idPokemon, photoPokemon, typePokemon,typePokemon2)
}

function delet(){
    const removerHtml = document.getElementById('removerHtml')
    removerHtml.remove()
}