// funzione che sposta il primo elemento che soddisfa f in cima all'array
function moveToFront1<T>(a: T[], k: T, f: (elem: T, chiave: T) => boolean): number {
    let posizioneTrovata: number = -1;

    for (let i: number = 0; i < a.length; i++) {
        // controlliamo se l'elemento corrente soddisfa la funzione
        if (f(a[i], k) === true || f(k, a[i]) === true) {
            posizioneTrovata = i;
            break;
        }
    }

    if (posizioneTrovata !== -1) {
        let elementoDaSpostare: T = a[posizioneTrovata];
        
        // rimuoviamo l'elemento dalla sua posizione originale
        a.splice(posizioneTrovata, 1);
        
        // inseriamo l'elemento in testa (all'indice 0)
        a.unshift(elementoDaSpostare);
    }

    return posizioneTrovata;
}
