function handleMouseEnter (){
    this.classList.add('s-card--hovered')
    document.body.id = `${this.id}-hovered`
}

function handleMouseLeave(){
    this.classList.remove('s-card--hovered')
    document.body.id = ``
}

function addEventListernersToCards(){
    const cardElements = document.getElementsByClassName('s-card');

   for(let i = 0; i < cardElements.length; i++){
        const card =  cardElements[i]

        card.addEventListener('mouseenter', handleMouseEnter)//passar mouse acionar function handleMouseEnter
        card.addEventListener('mouseleave', handleMouseLeave)//tirar mouse, acionar function handleMouseLeave
   }
}

// Esperar um evento sobre a tela para chamar a function
document.addEventListener('DOMContentLoaded', addEventListernersToCards, false)

