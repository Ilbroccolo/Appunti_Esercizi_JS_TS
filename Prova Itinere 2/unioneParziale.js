/*
 * Funzione unioneParziale(A, n)
 *
 * Restituisce l'insieme di tutti gli elementi che compaiono in almeno n insiemi
 * diversi presenti nell'array A.
 *
 * Parametri:
 * - A: array di insiemi, ciascuno dei quali realizzato come visto a lezione
 * - n: numero naturale che indica in quanti insiemi diversi un elemento deve
 *      comparire per essere incluso nel risultato
 *
 * Restituisce:
 * Un insieme contenente tutti gli elementi che compaiono in almeno n insiemi
 * diversi di A
 *
 * Esempi:
 *
 * A = [{a, b}, {b, c}, {a, c, d}]
 * unioneParziale(A, 2) → {a, b, c}
 * // a compare in 2 insiemi, b compare in 2 insiemi, c compare in 2 insiemi,
 * // d compare in 1 solo insieme
 *
 * unioneParziale(A, 1) → {a, b, c, d}
 * // tutti gli elementi compaiono in almeno 1 insieme
 *
 * unioneParziale(A, 3) → ∅
 * // nessun elemento compare in 3 o più insiemi
 *
 * Nota:
 * Si abbia cura di trattare anche i casi limite (ad esempio n = 0, A vuoto, ecc.)
 */

let A = [{ a: 1, b: 1 }, { b: 1, c: 1 }, { a: 1, c: 1, d: 1 }]



function unisciMolteplicita(A, B) { 
    let C = {}
    for (let el in A) {
        C[el] = 1
        if(el in B){
            C[el] +=1
        }
    }
    for(let el in B){
        if(!(el in C)){
            C[el] = B[el]
        }
    }
    return C
}


function unisciTutti(A){
    let C = {}
    for(let i = 0; i< A.length; i++){
        C = unisciMolteplicita(A[i], C);
    }
    return C;
}

// Esempi per sperimentare e verificare

/*
console.log("PROVA TOP")
console.log(unisciMolteplicita(A[0],{})) // --> {a:1, b:1} + {} = {a:1, b:1}
let D = unisciMolteplicita(A[0],{}) // --> {a:1, b:1}
console.log(unisciMolteplicita(A[1], D)) // --> {b:1, c:1} + {a:1, b:1} = { b: 2, c: 1, a: 1 }
let E = unisciMolteplicita(A[1], D) // --> { b: 2, c: 1, a: 1 }
console.log(unisciMolteplicita(A[2],E)) // --> {a:1, c:1, d:1} + { b: 2, c: 1, a: 1 } = { a: 2, c: 2, d: 1, b: 2 }


console.log(unisciTutti(A)); // risultato finale : { a: 2, c: 2, d: 1, b: 2 }

// */

//termine esempio
function unioneParziale(A, n) {
    //casi limite
    if (A.length < 1) {
        return "Array vuoto!"
    }
    if (n <= 0) {
        return "n non valido perchè <= 0."
    }
    if (n > A.length) {
        return "Il numero di insiemi selezionato è maggiore di quelli presenti"
    }
    let C = unisciTutti(A) // questa funzione esegue un unione "speciale" 
                              // tra gli insiemi presenti nell'array e restituisce l'insieme completo  

    let oggetto_finale = {}
    for(let el in C){
        if (C[el] >= n){
            oggetto_finale[el] = 1
        }
    }
    return oggetto_finale;
                        
}
console.log("UNIONE PARZIALE")
console.log(unioneParziale(A,3))