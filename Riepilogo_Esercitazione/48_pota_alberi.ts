type NodoAlbero = {
    val?: number;
    sx?: NodoAlbero;
    dx?: NodoAlbero;
};

// funzione che rimuove i sottoalberi con valore negativo alla radice
function PotaAlberiT(T: NodoAlbero | undefined): void {
    // caso base: se il nodo non esiste, fermiamo la ricorsione
    if (T === undefined) {
        return;
    }

    if (T.val !== undefined && T.val < 0) {
        delete T.val;
        delete T.sx;
        delete T.dx;
        return;
    }

    if (T.sx !== undefined) {
        if (T.sx.val !== undefined && T.sx.val < 0) {
            delete T.sx;
        } else {
            PotaAlberiT(T.sx);
        }
    }

    // controlliamo il figlio destro
    if (T.dx !== undefined) {
        if (T.dx.val !== undefined && T.dx.val < 0) {
            delete T.dx;
        } else {
            // procediamo ricorsivamente
            PotaAlberiT(T.dx);
        }
    }
}
