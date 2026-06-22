/*
Si scriva una funzione ricorsiva visitaFunzioni(tree, v) che, 
ricevuti un albero binario i cui nodi contengono funzioni e un valore, 
applichi in sequenza le funzioni memorizzate nei nodi dell'albero secondo la visita
in post-ordine al valore, restituendo il risultato finale.

Le funzioni nei nodi utilizzano il valore 
 quando il parametro ricevuto non è definito.



Esempi:

albero:     (x => x + 2)
           /              \
    (x => x * 3)      (x => x - 1)

visitaFunzioni(albero, 5) → 16
- Applica 
 a 5 = 15

- Applica 
 a 15 = 14

- Applica 
 a 14 = 16



visitaFunzioni(albero, 10) → 59
visitaFunzioni(null, 5) → 5


Come prassi, commentate opportunamente la funzione.
*/
let albero = {val: x=> x+2, sx: {val: x=> x*3}, dx: {val: x=> x-1}}
let val = 5
val = albero.sx.val(5)
console.log(val)
val = albero.dx.val(val)
console.log(val)
val = albero.val(val)
console.log(val)

function visitaFunzioni(tree, v) {
    if(!v){
        v  = 0
    }
    if (!tree) {
        return v;
    }

    let valoreDopoSinistra = visitaFunzioni(tree.sx, v);

    let valoreDopoDestra = visitaFunzioni(tree.dx, valoreDopoSinistra);

    let valoreFinale = tree.val(valoreDopoDestra);

    return valoreFinale;
}

console.log(visitaFunzioni(albero,5))