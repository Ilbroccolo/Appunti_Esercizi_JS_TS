// 1. Eccezione
class ScamAttemptError extends Error {
    constructor() {
        super("Tentativo di truffa!");
        this.name = "ScamAttemptError";
    }
}

// 2. Classe Base Valuta
abstract class Valuta<V = number> {
    protected _val: V;
    constructor(val: V) {
        this._val = val;
    }
    get val(): V {
        return this._val;
    }
    abstract confronta(v: Valuta<any>): number;
}
/*
// 3. Sottoclassi Valuta (Sistemate con super() e logiche di confronto)
class Dollaro extends Valuta {
    constructor(val: number) { super(val); }

    confronta(q: Valuta): number {
        if (q instanceof Dollaro) return this.val - q.val;
        if (q instanceof Euro) return 0.8 * this.val - q.val;
        throw new ScamAttemptError();
    }
}

class Euro extends Valuta {
    constructor(val: number) { super(val); }

    confronta(q: Valuta): number {
        if (q instanceof Euro) return this.val - q.val;
        if (q instanceof Dollaro) return this.val - 0.8 * q.val;
        throw new ScamAttemptError();
    }
}

class Fagiolo extends Valuta {
    constructor(val: number) { super(val); }

    confronta(q: Valuta): number {
        if (q instanceof Fagiolo) return this.val - q.val;
        throw new ScamAttemptError();
    }
}
*/
// 4. Classe Tivan corretta (mappa l'output estraendo solo l'oggetto T)
class Tivan<T, P extends Valuta> {
    valori: { oggetto: T; prezzo: P }[];

    constructor() {
        this.valori = [];
    }

    add(o: T, p: P): void {
        this.valori.push({ oggetto: o, prezzo: p });
    } 

    // MODIFICATO: Restituisce un array di T (cioè del tipo dell'oggetto, es. string)
    offerte(q: Valuta): T[] {
        let array: T[] = [];

        try {
            for (let el of this.valori) {
                if (el.prezzo.confronta(q) <= 0) {
                    array.push(el.oggetto); // Prendiamo solo .oggetto, non tutto il record!
                }
            }
        } catch (error) {
            if (error instanceof ScamAttemptError) {
                return [];
            }
            throw error; 
        }

        return array;
    }
}
