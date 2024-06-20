const btn = document.getElementById("button-mobile");
const menu = document.getElementById("collapse-mobile");

window.addEventListener('resize', function() {
    const displayWidth = window.innerWidth;
    const cards = document.getElementById("cards")
    
    if (displayWidth > 568) {
        menu.style.display = 'none';
        cards.classList.remove("cards");
        cards.classList.add("cards_desktop");

    }else{
        cards.classList.remove("cards_desktop");
        cards.classList.add("cards");
    }
});

btn.addEventListener("click", function () {

    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});
