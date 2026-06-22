/* 
### Esercizio 3

Si scrivano in TypeScript delle classi per rappresentare matrici numeriche.
Si definisca una classe RectangularMatrix per rappresentare una matrice rettangolare. La classe deve avere:

* il costruttore che accetta una matrice di elementi da memorizzare nell'istanza di RectangularMatrix, e non più modificabili;
* in sola lettura il numero di righe (rows) e il numero di colonne (columns);
* un metodo check() per controllare che la matrice sia completa, ovvero che tutte le righe abbiano lo stesso numero di colonne;
* un metodo sum(), che restituisce la somma di tutti gli elementi della matrice.

Si definisca poi una classe SquareMatrix per rappresentare una matrice quadrata, ovvero una matrice con lo stesso numero di righe e colonne. I campi e metodi offerti da SquareMatrix sono gli stessi di RectangularMatrix. Se la matrice passata al costruttore non è quadrata, il costruttore deve lanciare un RangeError.

Si scriva a parte una funzione maxSumMatrix(matrices), che riceve un array di matrici e restituisce, tra le sole matrici non quadrate, quella con somma degli elementi massima. Se l'array non contiene matrici non quadrate, la funzione restituisce undefined.

Si curi di annotare il più precisamente possibile tutti i tipi.

Documentare il codice commentandolo opportunamente.


*/
//class RangeError extends Error{ ; }
let es_matrice : number[][] = 
                 [[1,2,3,4], 
                  [2,4,6,2],
                  [2,1,5,3]]


class RectangularMatrix {
    protected readonly matrix : number[][]
    
    constructor(matrice : number[][]){
        //this.matrix = matrice - lo avevo fatto io però fa la shallow copy

        // FIX FONDAMENTALE: Cloniamo la struttura riga per riga per garantire 
        // che gli elementi memorizzati non siano più modificabili dall'esterno.
        this.matrix = matrice.map(row => [...row]); // deep copy
    }

    get rows() : number {
        return this.matrix.length
    }

    get columns() : number{
        if(this.rows == 0){
            return 0
        }
        let n_colonne : number = this.matrix[0].length // prende il numero di colonne della 1°riga
        return n_colonne
        
    }
    check() : boolean{
        let n_colonne : number = this.matrix[0].length // prende il numero di colonne della 1°riga
        let check_col : boolean = true
        for(let i = 1; i<this.matrix.length; i++){
            if(this.matrix[i].length != n_colonne){
                check_col = false
            }
        }
        return check_col
    }
    sum() : number {
        let sum : number = 0
        for(let i = 0; i<this.matrix.length; i++){
            for(let el of this.matrix[i]){
                sum+= el
            }
        }
        return sum
    }
}

class SquareMatrix extends RectangularMatrix{
    constructor(matrice : number[][]){
        super(matrice)
        if(!this.check()){
             throw new RangeError("Matrice non valida")
        }        
        if(this.rows!= this.columns){
            throw new RangeError("Matrice non valida")
        }
        
    }
}

function maxSumMatrix(matrices : RectangularMatrix[]) : RectangularMatrix | undefined{
    let indice : number = 0
    let max_matrix_sum : RectangularMatrix | undefined = undefined;
    while(indice< matrices.length){ // assegna alla prima matrice rettangolare che incontra l'essere max
        if(!(matrices[indice] instanceof SquareMatrix)){
            max_matrix_sum = matrices[indice]
            break
        }
        indice++
    }
    if(max_matrix_sum == undefined){
        return max_matrix_sum
    }
    
    for(let i = indice; i<matrices.length; i++){
        if(!(matrices[i] instanceof SquareMatrix)){
            if(matrices[i].sum() > max_matrix_sum.sum()){
                max_matrix_sum = matrices[i]
            }
        }
    }
    return max_matrix_sum
    
}

// --- SCRIPT DI TEST ---

try {
    console.log("--- 1. Test di RectangularMatrix ---");
    const matRettangolare = new RectangularMatrix([
        [1, 2, 3],
        [4, 5, 6]
    ]);
    console.log(`Righe (atteso 2): ${matRettangolare.rows}`);
    console.log(`Colonne (atteso 3): ${matRettangolare.columns}`);
    console.log(`Completa? (atteso true): ${matRettangolare.check()}`);
    console.log(`Somma elementi (atteso 21): ${matRettangolare.sum()}`);

    console.log("\n--- 2. Test di SquareMatrix (Valida) ---");
    const matQuadrata = new SquareMatrix([
        [1, 2],
        [3, 4]
    ]);
    console.log(`Righe (atteso 2): ${matQuadrata.rows}`);
    console.log(`Colonne (atteso 2): ${matQuadrata.columns}`);
    console.log(`Somma elementi (atteso 10): ${matQuadrata.sum()}`);

} catch (error) {
    console.error("Errore inatteso nei primi test:", error);
}

console.log("\n--- 3. Test Controllo Errori (SquareMatrix non valida) ---");
try {
    // Questo deve lanciare un RangeError perché non è quadrata
    const erroreQuadrata = new SquareMatrix([
        [1, 2, 3],
        [4, 5, 6]
    ]);
} catch (e) {
    if (e instanceof RangeError) {
        console.log("Ottimo! Catturato RangeError previsto per matrice non quadrata.");
    } else {
        console.error("Errore: lanciato un tipo di eccezione sbagliato.");
    }
}

try {
    // Questo deve lanciare un RangeError perché è incompleta (manca un elemento nell'ultima riga)
    const erroreIncompleta = new SquareMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8]
    ]);
} catch (e) {
    if (e instanceof RangeError) {
        console.log("Ottimo! Catturato RangeError previsto per matrice incompleta.");
    } else {
        console.error("Errore: lanciato un tipo di eccezione sbagliato.");
    }
}

console.log("\n--- 4. Test di maxSumMatrix ---");

// Creiamo un po' di matrici da testare
const rettangolarePiccola = new RectangularMatrix([[1, 1], [1, 1], [1, 1]]); // Somma = 6
const rettangolareGrande = new RectangularMatrix([[10, 10], [20, 20], [30, 30]]); // Somma = 120
const quadrataGrande = new SquareMatrix([[100, 100], [100, 100]]); // Somma = 400 (Ma deve essere ignorata!)

// Caso A: Array misto (deve prendere la rettangolare con somma massima, ignorando la quadrata)
const arrayMisto = [rettangolarePiccola, quadrataGrande, rettangolareGrande];
const risultatoMisto = maxSumMatrix(arrayMisto);
console.log(`Test Array Misto (atteso somma 120): ${risultatoMisto ? risultatoMisto.sum() : "Non trovata"}`);

// Caso B: Array di sole matrici quadrate (deve restituire undefined)
const arraySoleQuadrate = [quadrataGrande, new SquareMatrix([[1, 2], [3, 4]])];
const risultatoSoloQuadrate = maxSumMatrix(arraySoleQuadrate);