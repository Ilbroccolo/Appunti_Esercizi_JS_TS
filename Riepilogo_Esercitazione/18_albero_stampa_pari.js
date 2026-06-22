function stampaC(T) {
    let risultati = [];

    function visitaInOrdine(nodoCorrente) {
        if (nodoCorrente === null || nodoCorrente === undefined) {
            return;
        }

        visitaInOrdine(nodoCorrente.sx);

        // 2. analizziamo il nodo corrente
        let haFiglioPari = false;
        
        if (nodoCorrente.sx !== null && nodoCorrente.sx !== undefined) {
            if (nodoCorrente.sx.val % 2 === 0) {
                haFiglioPari = true;
            }
        }
        
        if (nodoCorrente.dx !== null && nodoCorrente.dx !== undefined) {
            if (nodoCorrente.dx.val % 2 === 0) {
                haFiglioPari = true;
            }
        }

        if (haFiglioPari === true) {
            risultati.push(nodoCorrente.val);
        }

        // 3. visitiamo il sotto-albero destro
        visitaInOrdine(nodoCorrente.dx);
    }

    visitaInOrdine(T);

    return risultati;
}
