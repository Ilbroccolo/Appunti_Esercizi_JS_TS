interface NodoAlbero {
    val: number;
    conta: number;
    sx?: NodoAlbero;
    dx?: NodoAlbero;
}

function contaAlbero(T: NodoAlbero | undefined): number {
    if (T === undefined) {
        return 0;
    }

    let nodiSinistra = contaAlbero(T.sx);
    let nodiDestra = contaAlbero(T.dx);

    T.conta = nodiDestra;

    // ritorna il totale dei nodi di questo sottoalbero
    // noi stessi (1) + i nodi a sinistra + i nodi a destra
    return 1 + nodiSinistra + nodiDestra;
}
