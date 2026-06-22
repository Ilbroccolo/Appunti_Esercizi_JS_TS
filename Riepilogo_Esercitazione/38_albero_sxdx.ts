// funzione per navigare un albero binario a sinistra e a destra

interface NodoAlbero {
    val: string;
    sx?: NodoAlbero;
    dx?: NodoAlbero;
}

function sxdx(T: NodoAlbero): [string, string] {
    // inizializziamo le due stringhe usando il valore del nodo in cui ci troviamo ora
    let risultatoSinistra = T.val;
    let risultatoDestra = T.val;

    if (T.sx !== undefined) {
        let stringheFiglioSx = sxdx(T.sx);
        risultatoSinistra = risultatoSinistra + stringheFiglioSx[0];
    }

    if (T.dx !== undefined) {
        // scendiamo in ricorsione
        let stringheFiglioDx = sxdx(T.dx);
        // aggiungiamo alla nostra stringa destra la concatenazione destra del figlio
        risultatoDestra = risultatoDestra + stringheFiglioDx[1];
    }

    return [risultatoSinistra, risultatoDestra];
}
