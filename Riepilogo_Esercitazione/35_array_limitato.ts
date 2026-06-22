// esercizio 35

// definizione dell'eccezione personalizzata per gli indici invalidi
class OutOfBoundsError extends Error {
    index: number;
    bounds: [number, number];

    constructor(index: number, start: number, end: number) {
        super("Indice fuori dai limiti consentiti");
        this.name = "OutOfBoundsError";
        this.index = index;
        this.bounds = [start, end];
    }
}

class BArray<T> {
    inizio: number;
    fine: number;
    elementi: T[];

    constructor(a: number, b: number, init: T) {
        // se l'intervallo [a,b) è vuoto o malformato, l'eccezione deve essere lanciata
        if (a >= b) {
            throw new OutOfBoundsError(0, a, b); 
        }

        this.inizio = a;
        this.fine = b;
        this.elementi = [];
        
        let capacita = b - a;
        for (let i = 0; i < capacita; i++) {
            this.elementi.push(init);
        }
    }

    get length(): number {
        return this.fine - this.inizio;
    }

    verificaIndice(i: number): void {
        if (i < this.inizio || i >= this.fine) {
            throw new OutOfBoundsError(i, this.inizio, this.fine);
        }
    }

    get(i: number): T {
        this.verificaIndice(i);
        let indiceReale = i - this.inizio;
        return this.elementi[indiceReale];
    }

    set(i: number, v: T): void {
        this.verificaIndice(i);
        let indiceReale = i - this.inizio;
        this.elementi[indiceReale] = v;
    }
}
