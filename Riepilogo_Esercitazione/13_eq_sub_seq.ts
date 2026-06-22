function eqSubSeq<P, Q>(A: P[], B: Q[], p: (x: P, y: Q) => boolean): number | undefined {
    if (B.length > A.length) {
        throw new RangeError("L'array B è più lungo dell'array A");
    }

    let limiteRicerca = A.length - B.length;
    
    for (let i = 0; i <= limiteRicerca; i++) {
        let trovato = true;

        for (let j = 0; j < B.length; j++) {
            let elementoA = A[i + j];
            let elementoB = B[j];
            
            // applichiamo il predicato per verificare l'equivalenza
            if (p(elementoA, elementoB) === false) {
                trovato = false;
                break;
            }
        }

        // se tutti gli elementi di b hanno trovato un corrispondente, ritorna l'indice
        if (trovato === true) {
            return i;
        }
    }

    return undefined;
}
