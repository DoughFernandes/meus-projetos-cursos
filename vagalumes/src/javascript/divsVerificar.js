function addDivs() {
    let divsHtml = document.getElementsByTagName('div');
    
    if (divsHtml.length >= 30) {
        divsHtml[0].parentNode.removeChild(divsHtml[0]);
    }
    else{FirefliesPosicao();}
}

