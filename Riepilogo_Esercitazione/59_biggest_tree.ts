// interfaccia per il nodo di un albero k-ario
interface TNode<T> {
    val: T;
    children: TNode<T>[];
}

function biggest<T>(root: TNode<T> | undefined, bigger: (x: T, y: T) => boolean): T | undefined {
    if (root === undefined) {
        return undefined;
    }
    
    let maggioreCorrente: T = root.val;
    
    for (let i = 0; i < root.children.length; i++) {
        let nodoFiglio = root.children[i];
        
        // troviamo il massimo all'interno del sotto-albero del figlio corrente
        let maggioreDelFiglio = biggest(nodoFiglio, bigger);
        
        // se c'è un massimo nel sotto-albero, lo confrontiamo con il maggiore corrente
        if (maggioreDelFiglio !== undefined) {
            if (bigger(maggioreDelFiglio, maggioreCorrente)) {
                maggioreCorrente = maggioreDelFiglio;
            }
        }
    }
    
    return maggioreCorrente;
}
