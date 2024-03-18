
function convertCardToLi(namePokemon, idPokemon, photoPokemon, typePokemon, typeBgn) {

    return `
            <section id="removerHtml" class= "card">
                <button onclick="delet()" class="btnCard" type="button" title="button"></button>

                <div class="top">
                    <img src="${photoPokemon}" alt="${namePokemon}">
                </div>

                <div class="detailsPokemon ${typeBgn}">
                <img src="./assets/imagem/Card-Pokebola.jpg" alt="card">
                    <div class="detailsNumber">#${idPokemon}</div>
                    <div class="detailsName">${namePokemon}</div>
                    ${typePokemon.map((type) => `<div class="detailsType ${type} " >${type} </div>`).join('')}
                </div>

            </section>
        `
}
function gerarPokemonActive(namePokemon, idPokemon, photoPokemon, typePokemon){
    namePokemon = namePokemon;
    idPokemon = idPokemon;
    photoPokemon = photoPokemon;
    typePokemon = typePokemon;
    typeBgn = typePokemon[0]

    console.log(typePokemon)

    const newHtmlPokemonActive = document.getElementById('displayCardPokemon')
    const convertPhoto = convertImg(photoPokemon)

    newHtmlPokemonActive.innerHTML = convertCardToLi(namePokemon, idPokemon, convertPhoto, typePokemon, typeBgn)
}

function delet(){
    const removerHtml = document.getElementById('removerHtml')
    removerHtml.remove()
}