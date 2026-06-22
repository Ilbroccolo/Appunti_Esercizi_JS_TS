interface TNode<T> {
    val: T;
    children: TNode<T>[];
}

function biggest<T>(root: TNode<T> | undefined, bigger: (a: T, b: T) => boolean): T | undefined {
    if (root === undefined) {
        return undefined;
    }
    
    let massimoCorrente: T = root.val;
    
    // esploriamo tutti i figli per cercare un valore più grande
    for (let i = 0; i < root.children.length; i++) {
        let nodoFiglio = root.children[i];
        
        // cerchiamo ricorsivamente il valore più grande nel sotto-albero
        let massimoFiglio = biggest(nodoFiglio, bigger);
        
        // se il figlio non è undefined e il suo valore è maggiore di quello corrente
        if (massimoFiglio !== undefined) {
            if (bigger(massimoFiglio, massimoCorrente)) {
                massimoCorrente = massimoFiglio;
            }
        }
    }
    
    return massimoCorrente;
}
