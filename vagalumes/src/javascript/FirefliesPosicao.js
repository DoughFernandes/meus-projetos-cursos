ajusteDimensao();
addEstilo();

function FirefliesPosicao(){
    let posicaoX = Math.floor(Math.random() * largura)
    let posicaoY = Math.floor(Math.random() * altura)
    
    let vagalumesDiv = document.createElement('div')

    vagalumesDiv.className = 'Fireflies ' + addEstilo()
    vagalumesDiv.style.top = posicaoY + 'px'
    vagalumesDiv.style.left = posicaoX + 'px'
    vagalumesDiv.style.position = 'absolute'

    document.body.appendChild(vagalumesDiv)
}
FirefliesPosicao()