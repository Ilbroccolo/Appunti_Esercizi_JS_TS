/*
isSorted
Scrivere una funzione isSorted(a) con a un array di numeri. La funzione 
restituisce true se l'array è ordinato in senso strettamente crescente, false
altrimenti. Risolverlo senza usare cicli (comandi for, while, do/while). Provare a 
risolverlo con .reduce().
Esempi:
isSorted([-21,-2,0,4,6,210]) -> true
isSorted([2,6,8,8,9,21]) -> false
isSorted([2,6,8,9,10,-42]) -> false
*/

function isSorted(a) {
    return a.reduce((acc, el, i) => {
        if (i === 0) return true;          // il primo è sempre "ok"
        return acc && (a[i - 1] < el);     // precedente < attuale ?
    }, true);
}


console.log(isSorted([2,6,8,8,9,21]))

