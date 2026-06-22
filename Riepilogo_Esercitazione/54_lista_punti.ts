// esercizio 54
// definizione del tipo point come coppia di numeri
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
    
    // chiamata ricorsiva per analizzare il resto della lista
    let elementiSuccessivi = filter(list.next, p);
    
    // aggiungiamo i risultati della parte successiva al nostro array
    for (let i = 0; i < elementiSuccessivi.length; i++) {
        risultato.push(elementiSuccessivi[i]);
    }
    
    return risultato;
}

function sortedFilter(list: List | null, p: (x: Point) => boolean): Point[] {
    let puntiFiltrati = filter(list, p);
    
    puntiFiltrati.sort(function(a: Point, b: Point): number {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    
    return puntiFiltrati;
}
