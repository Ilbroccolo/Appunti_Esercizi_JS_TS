type SLLNode = {
    val: any;
    next: SLLNode | null;
};

function sllLen(n: SLLNode | null): number {
    let lunghezza: number = 0;
    let nodoCorrente: SLLNode | null = n;

    while (nodoCorrente !== null) {
        lunghezza++;
        nodoCorrente = nodoCorrente.next;
    }

    return lunghezza;
}
