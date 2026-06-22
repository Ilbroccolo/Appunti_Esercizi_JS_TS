interface Nodo<T> {
    val: T;
    children: Nodo<T>[];
}

// funzione principale che raccoglie i valori e li ordina alla fine
function trova<T>(
    root: Nodo<T>, 
    controlla: (valore: T) => boolean, 
    confronta: (valore1: T, valore2: T) => number
): T[] {
    let valoriTrovati: T[] = [];
    
    function esploraAlbero(nodoAttuale: Nodo<T>): void {
        if (controlla(nodoAttuale.val) === true) {
            valoriTrovati.push(nodoAttuale.val);
        }
        
        for (let i = 0; i < nodoAttuale.children.length; i++) {
            esploraAlbero(nodoAttuale.children[i]);
        }
    }
    
    esploraAlbero(root);
    
    valoriTrovati.sort(confronta);
    
    return valoriTrovati;
}
