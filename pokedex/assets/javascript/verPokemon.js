
function convertCardToLi(namePokemon, idPokemon, photoPokemon, typePokemon,typePokemon2 = '' ) {
    return `
            <section id="removerHtml" class= "card">
                <button onclick="delet()" class="btnCard" type="button" title="button"></button>

                <div class="top">
                    <img src="${photoPokemon}" alt="${namePokemon}">
                </div>

                <div class="detailsPokemon ${typePokemon}">
                <img src="./assets/imagem/Card-Pokebola.jpg" alt="card">
                    <div class="detailsNumber">#${idPokemon}</div>
                    <div class="detailsName">${namePokemon}</div>
                    <div class="detailsType">${typePokemon} ${typePokemon2}</div>
                </div>

            </section>
        `
}

function pegarIdDeTypes (){
    const recuperarTypesPokemon = document.querySelector('#typesDeElementsPokemon')
}

function gerarPokemonActive(namePokemon, idPokemon, photoPokemon, typePokemon,typePokemon2){
    const newHtmlPokemonActive = document.getElementById('displayCardPokemon')
    newHtmlPokemonActive.innerHTML = convertCardToLi(namePokemon, idPokemon, photoPokemon, typePokemon,typePokemon2)
}

function delet(){
    const removerHtml = document.getElementById('removerHtml')
    removerHtml.remove()
}