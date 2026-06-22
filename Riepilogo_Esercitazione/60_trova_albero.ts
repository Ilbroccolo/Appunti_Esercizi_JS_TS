interface Nodo<T> {
    val: T;
    children: Nodo<T>[];
}

function trova<T>(root: Nodo<T>, controlla: (x: T) => boolean, confronta: (x: T, y: T) => number): T[] {
    let trovati: T[] = [];
    
    function esplora(nodo: Nodo<T>) {
        if (controlla(nodo.val)) {
            trovati.push(nodo.val);
        }
        
        for (let i = 0; i < nodo.children.length; i++) {
            esplora(nodo.children[i]);
        }
    }
    
    // facciamo partire l'esplorazione dalla radice
    esplora(root);
    
    trovati.sort(confronta);
    
    return trovati;
}
