function addRecommended () {
    const recommended = document.getElementById('recommended');
    
    for (let i = 0; i < 8; i++) {
    
        recommended.innerHTML += `
            <li>
                <iframe src="https://www.youtube-nocookie.com/embed/_R6F4TCt8d0?si=cdnQw6ZxpUQRdC01&amp; title="YouTube video player"></iframe>
    
                <div class="recommended__video__details">
                    <h2>Nome do video</h2>
                    <p>DGGamePlaySss</p>
                    <p>4,1 mil visualizações há 1 mês</p>
                </div>
            </li>
        `
    }
}

(async function () {
    addRecommended();
})();