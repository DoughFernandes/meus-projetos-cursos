/* EFEITO DE CARDS-CAROUSEL -------------------------------------------------------------------------------- */

function selectCarouselItem(selectedButtonElement){

    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    // Procurar dentro de uma string por (RotateY com números e (DEG)).  <--console.log(rotateY)-->

    const rotateYDeg = 120 *(Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    //Vai pegar o array criado com (rotateY) e inserir novo número de rotação com (rotateYDEg). <--console.log(newTransform)-->

    carousel.style.transform = newTransform;
    
    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectedButtonElement.classList.add('s-controller__button--active');
    
}