function cm(V, k, righe, colonne) {
    let rigaTrovata = -1;
    let colonnaTrovata = -1;

    // perché la x sforerebbe dalla matrice
    for (let r = 1; r < righe - 1; r++) {
        for (let c = 1; c < colonne - 1; c++) {
            
            // ricaviamo gli elementi della croce accedendo all'array monodimensionale v
            let centro = V[r * colonne + c];
            let altoSinistra = V[(r - 1) * colonne + (c - 1)];
            let altoDestra = V[(r - 1) * colonne + (c + 1)];
            let bassoSinistra = V[(r + 1) * colonne + (c - 1)];
            let bassoDestra = V[(r + 1) * colonne + (c + 1)];

            let sommaX = centro + altoSinistra + altoDestra + bassoSinistra + bassoDestra;

            if (sommaX === k && rigaTrovata === -1) {
                rigaTrovata = r;
                colonnaTrovata = c;
            }
        }
    }

    // se non abbiamo trovato nulla restituirà [-1, -1] come previsto da mirino
    return [rigaTrovata, colonnaTrovata];
}
