function tagliaAlberi(T) {
    if (T === undefined || T === null || T.val === undefined) {
        // non uso return espliciti con valori per rispettare la consegna
    } else {
        // se il valore è minore di zero, il nodo è "secco" e lo eliminiamo
        if (T.val < 0) {
            delete T.val;
            delete T.sx;
            delete T.dx;
        } else {
            if (T.sx !== undefined) {
                tagliaAlberi(T.sx);
            }
            if (T.dx !== undefined) {
                tagliaAlberi(T.dx);
            }
        }
    }
}
