type Point = [number, number];

interface List {
    val: Point;
    next: List | null;
}

function filter(list: List | null, p: (x: Point) => boolean): Point[] {
    let risultato: Point[] = [];
    
    if (list === null) {
        return risultato;
    }
    
    if (p(list.val)) {
        risultato.push(list.val);
    }
    
    let risultatoSuccessivo = filter(list.next, p);

    // unione dei risultati
    for (let i = 0; i < risultatoSuccessivo.length; i++) {
        risultato.push(risultatoSuccessivo[i]);
    }
    
    return risultato;
}

function sortedFilter(list: List | null, p: (x: Point) => boolean): Point[] {
    let punti = filter(list, p);
    
    // ordiniamo l'array
    punti.sort(function(puntoA: Point, puntoB: Point): number {
        // ordinamento per coordinata x crescente
        if (puntoA[0] !== puntoB[0]) {
            return puntoA[0] - puntoB[0];
        }
        return puntoA[1] - puntoB[1];
    });
    
    return punti;
}
