// definiamo il tipo per il nodo dell'albero
interface Node {
    val: number;
    sotto: number;
    sx?: Node;
    dx?: Node;
}

function contaSotto(T?: Node): number {
    if (T === undefined) {
        return 0;
    }

    let nodiSinistra = 0;
    if (T.sx !== undefined) {
        nodiSinistra = contaSotto(T.sx);
    }

    let nodiDestra = 0;
    if (T.dx !== undefined) {
        nodiDestra = contaSotto(T.dx);
    }

    // il totale dei nodi per questo sotto-albero è la somma dei figli + 1 (il nodo stesso)
    let totaleNodi = nodiSinistra + nodiDestra + 1;
    
    // aggiorniamo la proprietà 'sotto' del nodo
    T.sotto = totaleNodi;

    // ritorna il conteggio per poterlo usare nelle chiamate ricorsive
    return totaleNodi;
}
