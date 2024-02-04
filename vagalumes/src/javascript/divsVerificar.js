function addDivs() {
    let divsHtml = document.getElementsByTagName('div');
    
    if (divsHtml.length >= 10) {
        divsHtml[0].parentNode.removeChild(divsHtml[0]);
    }
    else{FirefliesPosicao();}
}

