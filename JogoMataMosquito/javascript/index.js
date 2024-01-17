/* OS COMENTÁRIOS NO CÓDIGO AJUDARA A ENTENDER, A IDEIA DE CRIAÇÃO DO JOGO */

let altura = 0
let largura = 0
let vidas = 1
let tempo = 30
let CriarMosquitoTempo = 1500

/* Estrutura de Nivel **********************************************/
let Nivel = window.location.search // Recupera tudo que estiver após o ponto de interrogação no href.
Nivel = Nivel.replace('?', '') // Substituir o ponto por um Vazio

if(Nivel === 'Normal'){
    CriarMosquitoTempo = 1500
}
else if(Nivel === 'Dificil'){
    CriarMosquitoTempo = 1000
}
else if(Nivel === 'Hard'){
    CriarMosquitoTempo = 750
}


/* Estrutura de Dimenssão da página **********************************************/
function ajusteDimensao(){
    altura = window.innerHeight // recuperar Dimensão atual da tela
    largura = window.innerWidth

    console.log(altura, largura)
}

ajusteDimensao()

/* Cronometro **********************************************/

let Cronometro = setInterval(function() {

    tempo -= 1

    if (tempo < 0){
        clearInterval(Cronometro) // Parar de executar função Cronometro na memoria
        clearInterval(CriarMosquito) // Parar de criar os mosquitos
        window.location.href = 'Win.html'

    } else {
        document.getElementById('Cronometro').innerHTML = tempo // add ao HTML o cronometro
    }

}, 1000);

/* Posição dos mosquitos ***********************************************************/

function posicaoAleatoria(){

    // Para remover o mosquito antes de apresentar outro.
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas >3){
            window.location.href = 'FimDeJogo.html'

        } else{
            document.getElementById('V' + vidas).src = '/imagens/coracao_vazio.png' //mudar a imagen da vida ao ser passado um determinado tempo sem clicar no mosquito

            vidas++
        }
    }


    let posicaoX = Math.floor(Math.random() * largura) -90 // math.floor = deixar valores inteiros
    let posicaoY = Math.floor(Math.random() * altura) -90 // Math.ramdom() * ALTURA = para randomizar uma posição referente a altura
    // (-90) é para o elemento 'MOSQUITO' que tem 50px não ultrapassar o BODY


    posicaoX = posicaoX < 0 ? 0 : posicaoX // Caso a posição for negativa, a posição recebera 0px
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    console.log(posicaoX, posicaoY)
    console.log(MosquitoTamanho())
    console.log(LadoAleatorio())

    /* Criar os mosquito no HTML ****************************************************/

    let mosquito = document.createElement('img') //Criar o elemento

    mosquito.onclick = function(){this.remove()} // add onclik ao elemento mosquito. quando precionado excluir.
    mosquito.id = 'mosquito' // Criar um ID 'Mosquito para depois poder removelo'
    mosquito.src = 'imagens/mosca.png' // criar um src com seu caminho no elemento
    mosquito.className = MosquitoTamanho() + ' ' + LadoAleatorio()// add estilo ao elemento com  as Funcions

    // add novos style referente ao elemento
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'


    document.body.appendChild(mosquito) // incluir o elemento no BODY da página

}

/* Tamanho do Mosquito Aleatorio ****************************************************/

function MosquitoTamanho(){

    let classe = Math.floor(Math.random() * 6) // Math.random() * 3 = Para apresentar um nuemro de 1 até 3

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

/* Lados do Mosquito Aleatorio ****************************************************/

function LadoAleatorio(){

    let classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA' 

        case 1:
            return 'ladoB' 
    }
}
