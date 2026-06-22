// esercizio 56

function filter(list, p) {
    let risultato = [];
    
    if (list === null || list === undefined) {
        return risultato;
    }
    
    if (p(list.val)) {
        risultato.push(list.val);
    }
    
    let elementiRestanti = filter(list.next, p);
    
    for (let i = 0; i < elementiRestanti.length; i++) {
        risultato.push(elementiRestanti[i]);
    }
    
    return risultato;
}

function sortedFilter(list, p) {
    let arrayPunti = filter(list, p);
    
    arrayPunti.sort(function(a, b) {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    
    return arrayPunti;
}
