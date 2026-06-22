// funzione ricorsiva che filtra i punti della lista
function filter(l, p) {
    let risultati = [];
    
    // caso base: se la lista è finita, ritorniamo l'array vuoto
    if (l === null || l === undefined) {
        return risultati;
    }
    
    // se il valore del nodo corrente soddisfa il predicato, lo teniamo
    if (p(l.val) === true) {
        risultati.push(l.val);
    }
    
    // chiamata ricorsiva sul resto della lista
    let risultatiSuccessivi = filter(l.next, p);
    
    for (let i = 0; i < risultatiSuccessivi.length; i++) {
        risultati.push(risultatiSuccessivi[i]);
    }
    
    return risultati;
}

// funzione che calcola lo stesso array e lo ordina per coordinate crescenti
function sortedFilter(list, p) {
    let puntiFiltrati = filter(list, p);
    
    // ordiniamo l'array usando la funzione sort di javascript
    puntiFiltrati.sort(function(puntoA, puntoB) {
        let xA = puntoA[0];
        let yA = puntoA[1];
        let xB = puntoB[0];
        let yB = puntoB[1];
        
        // prima valutiamo la coordinata x
        if (xA !== xB) {
            return xA - xB;
        } else {
            // a parità di x, valutiamo la coordinata y
            return yA - yB;
        }
    });
    
    return puntiFiltrati;
}
