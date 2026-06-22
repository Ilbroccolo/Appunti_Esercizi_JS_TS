

/*Si scrivano in TypeScript delle classi per rappresentare matrici numeriche.
Si definisca una classe RectangularMatrix per rappresentare una matrice rettangolare. La classe deve avere:

- il costruttore che accetta una matrice di elementi da memorizzare nell'istanza di RectangularMatrix, e non piu modificabili;
- in sola lettura il numero di righe (rows) e il numero di colonne (columns);
- un metodo check() per controllare che la matrice sia completa, ovvero che tutte le righe abbiano lo stesso numero di colonne;
- un metodo sum(), che restituisce la somma di tutti gli elementi della matrice.

Si definisca poi una classe SquareMatrix per rappresentare una matrice quadrata, ovvero una matrice lo stesso numero di righe e colonne. I campi e metodi offerti da SquareMatrix sono gli stessi di RectangularMatrix. Se la matrice passata al costruttore non è quadrata, il costruttore deve lanciare un RangeError.

Si scriva a parte una funzione maxSumMatrix(matrices), che riceve un array di matrici e restituisce, tra le sole matrici non quadrate, quella con somma degli elementi massima. Se l'array non contiene matrici non quadrate, la funzione restituisce undefined.
*/

/// /// controlla se tutti gli elementi della matrice soddisfano f
function tuttiMatrice<T>(matrice: T[][], f: (val: T) => boolean): boolean {
    for (let r = 0; r < matrice.length; r++) {
        for (let c = 0; c < matrice[r].length; c++) {
            if (!f(matrice[r][c])) return false
        }
    }
    return true
}
class RectangularMatrix {
    private #matrice: number | null = [rows][columns]
    rows: number
    columns: number
    constructor(rows: number, matrice: number | null , columns:number) {
        this.#matrice = matrice[r][c]
        this.rows = rows
        this.columns = columns
    }
    get token(): string | null {
        return this.#token
    }
    set token(nuovo: string | null) {
        if (!nuovo || nuovo.length < 10) throw new Error('Token non valido')
        this.#token = nuovo
    }
}


// utilzare variabili piu  corete  e falo nelmla maniera piu seplcie possibile 