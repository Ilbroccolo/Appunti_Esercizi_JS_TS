type Point = [number, number];

interface List {
    val: Point;
    next: List | null;
}

function filter(l: List | null, p: (pt: Point) => boolean): Point[] {
    if (l === null) {
        return [];
    }
    
    let restoDellaLista = filter(l.next, p);
    
    if (p(l.val)) {
        let risultato: Point[] = [l.val];
        for (let i = 0; i < restoDellaLista.length; i++) {
            risultato.push(restoDellaLista[i]);
        }
        return risultato;
    } else {
        // altrimenti ritorniamo solo il resto
        return restoDellaLista;
    }
}

function sortedFilter(l: List | null, p: (pt: Point) => boolean): Point[] {
    let puntiFiltrati = filter(l, p);
    
    // ordiniamo l'array ottenuto
    puntiFiltrati.sort(function(a: Point, b: Point) {
        // confrontiamo prima le coordinate x
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            if (a[1] < b[1]) {
                return -1;
            } else if (a[1] > b[1]) {
                return 1;
            } else {
                return 0;
            }
        }
    });
    
    return puntiFiltrati;
}
