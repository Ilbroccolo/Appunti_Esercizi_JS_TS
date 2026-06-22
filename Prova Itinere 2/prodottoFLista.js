/*
 * Funzione ricorsiva prodottoFLista(head, f)
 *
 * Calcola il prodotto dei valori dei nodi di una lista concatenata per i quali
 * un predicato f vale true.
 *
 * Parametri:
 * - head: testa della lista concatenata (implementata come visto a lezione)
 * - f: predicato sui nodi della lista. È una funzione che prende in input un
 *      nodo della lista e restituisce un valore booleano
 *
 * Restituisce:
 * Il prodotto dei valori dei nodi per i quali f(node) è true.
 * Restituisce 1 se nessuno dei valori dei nodi soddisfa il predicato f.
 *
 * Esempi:
 *
 * head = [5 → 4 → 12 → null]
 * prodottoFLista(head, (node) => (node.val % 2 == 0)) → 48
 * // f(4) = true, f(12) = true, quindi il prodotto è 4 * 12 = 48
 *
 * head = [3 → 7 → 9 → null]
 * prodottoFLista(head, (node) => (node.val > 5)) → 63
 * // f(7) = true, f(9) = true, quindi il prodotto è 7 * 9 = 63
 *
 * Nota:
 * Se la lista contiene un nodo il cui campo val non è un numero intero, la
 * funzione deve interrompersi e restituire il prodotto calcolato fino a quel
 * punto (escluso).
 *
 */

let head = {val: 2, next:{val: 2.2, next:{val: 4,next: null}}}; // lista concatenata

function f(n){ // funzione da applicare ad ogni nodo della lista
    if(n%2 == 0){
        return true
    }
    return false
}

function prodottoFLista(head, f){
    if(!head){ // caso base
        return 1;
    }
    if(!checkint(head.val)){
        return 1;
    }
    if(f(head.val)){
        return  head.val * prodottoFLista(head.next, f)
    }
        return 1*prodottoFLista(head.next,f) 
}

console.log(prodottoFLista(head, f));

//controlla se n è intero oppure no
function checkint(n){
    if((n%1 >0) && (n%1 <1)){
        return false; // not int
    }
    return true; // int
}
/* Esempi
let n = 12.43;
console.log(10%1);
console.log(typeof(n))
console.log(checkint(10.1))
*/