function moveToEnd1<T>(a: T[], k: T, f: (p: T, q: T) => boolean): number {
    let indiceTrovato: number = -1;

    // scorriamo l'array per trovare il primo elemento che soddisfa f
    for (let i: number = 0; i < a.length; i++) {
        let elementoCorrente = a[i];
        
        // controlliamo se la condizione è soddisfatta
        if (f(elementoCorrente, k) || f(k, elementoCorrente)) {
            indiceTrovato = i;
            break;
        }
    }

    if (indiceTrovato !== -1) {
        let elementoDaSpostare = a[indiceTrovato];
        
        a.splice(indiceTrovato, 1);
        
        a.push(elementoDaSpostare);
    }

    return indiceTrovato;
}
