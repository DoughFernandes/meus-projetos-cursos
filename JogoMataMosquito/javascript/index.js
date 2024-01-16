/* OS COMENTÁRIOS NO CÓDIGO AJUDARA A ENTENDER, A IDEIA DE CRIAÇÃO DO JOGO */

/* Estrutura de Dimenssão da página **********************************************/
let altura = 0
let largura = 0

function ajusteDimensao(){
    altura = window.innerHeight // recuperar Dimensão atual da tela
    largura = window.innerWidth

    console.log(altura, largura)
}

ajusteDimensao()

/* Posição dos mosquitos ***********************************************************/

function posicaoAleatoria(){

    let posicaoX = Math.floor(Math.random() * largura) -90 // math.floor = deixar valores inteiros
    let posicaoY = Math.floor(Math.random() * altura) -90 // Math.ramdom() * ALTURA = para randomizar uma posição referente a altura
    // (-90) é para o elemento 'MOSQUITO' que tem 50px não ultrapassar o BODY


    posicaoX = posicaoX < 0 ? 0 : posicaoX // Caso a posição for negativa, a posição recebera 0px
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    console.log(posicaoX, posicaoY)
    console.log(MosquitoTamanho())

    /* Criar os mosquito no HTML ****************************************************/

    let mosquito = document.createElement('img') //Criar o elemento

    mosquito.src = 'imagens/mosca.png' // criar um src com seu caminho no elemento
    mosquito.className = MosquitoTamanho() // add estilo ao elemento com Funcion MosquitoTamanho

    // add novos style referente ao elemento
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute' 

    document.body.appendChild(mosquito) // incluir o elemento no BODY da página
}

 /* Tamanho do Mosquito Aleatorio ****************************************************/

function MosquitoTamanho(){

    let classe = Math.floor(Math.random() * 5) // Math.random() * 3 = Para apresentar um nuemro de 1 até 3

    switch(classe){
        case 0:
            return 'mosquito1' 

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'

        case 3:
            return 'mosquito4'

        case 4:
            return 'mosquito5'

        case 5:
            return 'mosquito6'

        // A Classe aplicada será referente ao número aleatoriamente entre 1 e 5. 
    }
}