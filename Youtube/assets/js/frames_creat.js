function creatElement (iframe) {
    const sectionFrames = document.getElementById('frames_section');

    sectionFrames.innerHTML = `
    
        ${iframe.map((frame) => `
        
            <div class="conteudo__item">
            ${frame}
            <div class="conteudo__item_detail">
                <img src="../assets/img/avatar doug.png" alt="Profile">
                <ul>
                    <li>Titulo do video</li>
                    <li>2.1 mil Visualizações</li>
                </ul>
            </div>
            </div>
    
        `).join('')};
        
`};

function creatElementHome (iframe) {
    const sectionFrameID = document.getElementById('recommended')

    sectionFrameID.innerHTML = `
    
    ${iframe.map((frame) => `
        
        <li>
           ${frame}

            <div class="recommended__video__details">
                <h2>Nome do video</h2>
                <p>DGGamePlaySss</p>
                <p>4,1 mil visualizações há 1 mês</p>
            </div>
         </li>
    
    `).join('')};


`};


(async function () {
    creatElementHome(frames);
})();

(async function () {
    creatElement(frames);
})();