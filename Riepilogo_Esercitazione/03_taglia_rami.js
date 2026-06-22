function tagliaSottoalberi(nodo) {
    if (!nodo) {
        return 0;
    }
    
    if (!nodo.figli) {
        return nodo.val;
    }
    
    let somma = nodo.val;
    let i = 0;
    
    while (i < nodo.figli.length) {
        let sommaFiglio = tagliaSottoalberi(nodo.figli[i]);
        
        if (sommaFiglio < 0) {
            nodo.figli.splice(i, 1);
        } else {
            somma += sommaFiglio;
            i++;
        }
    }
    
    if (nodo.figli.length === 0) {
        delete nodo.figli;
    }
    
    return somma;
}
