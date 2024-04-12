const btn = document.getElementById("button-mobile");
const menu = document.getElementById("collapse-mobile");

window.addEventListener('resize', function() {
    const displayWidth = window.innerWidth;
    
    if (displayWidth > 768) {
        menu.style.display = 'none';
    }
});

btn.addEventListener("click", function () {

    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});
