/*
 * Funzione sommaRepdigit(A, b)
 *
 * Calcola la somma di tutti i numeri in un array la cui rappresentazione in una
 * data base è un repdigit (cioè è composta da una sola cifra ripetuta).
 *
 * Un repdigit è un numero la cui rappresentazione in una certa base è composta
 * da una sola cifra ripetuta. Ad esempio:
 * - 222 in base 3 (tutte le cifre sono 2)
 * - 1111 in base 2 (tutte le cifre sono 1)
 *
 * Parametri:
 * - A: array di numeri naturali da analizzare
 * - b: base numerica (deve essere b ∈ ℕ, b > 1)
 *
 * Restituisce:
 * La somma di tutti i numeri in A che sono repdigit in base b
 *
 * Esempi:
 *
 * sommaRepdigit([26, 40, 15, 13], 3) → 79
 * 26 in base 3 è 222 (repdigit), 40 in base 3 è 1111 (repdigit),
 * 15 in base 3 è 120 (non repdigit), 13 in base 3 è 111 (repdigit).
 * Somma: 26 + 40 + 13 = 79
 *
 * sommaRepdigit([7, 10, 15], 2) → 22
 * sommaRepdigit([5, 12, 18], 5) → 30
 *
 * Nota:
 * - Ogni numero di una singola cifra (0-9) è per definizione un repdigit.
 * - Non è consentito l'uso di metodi predefiniti per la conversione di base
 *   (come toString(b) o parseInt). La conversione deve essere implementata
 *   tramite l'algoritmo delle divisioni successive.
 */


//controlla se un numero in base 10 è un Repdigit nella base passata come parametro
function checkRepdigit(n, b){
    let primo_resto = n%b; // primo resto
    n = Math.floor(n/b); // primo quoziente ottenuto
    
    //console.log(n_diviso);
    
    //console.log(resto);
    if(n == 0){ // controlla se il numero è composto da 0
        return false;
    }
    
    while(n>0){
        let resto = n%b;
        if(resto!= primo_resto){
            return false;
        }
        n = Math.floor(n/b);
    }
    return true;
   
}


function sommaRepdigit(A,b){
    let somma = 0;
    for(let i = 0; i<A.length; i++){
        let cRd = checkRepdigit(A[i],b);
        if (cRd){
            somma = somma + A[i];
        }
    }
    return somma;
}

//console.log(checkRepdigit(1,10));
console.log(sommaRepdigit([7, 10, 15], 2));   

