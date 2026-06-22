/*sumEvenValues(root) e height(root), dove root è un albero binario (eventualmente nullo) rappresentato come visto a lezione.

- La funzione sumEvenValues deve restituire la somma di tutti i valori pari contenuti nell'albero.
- La funzione height deve restituire l'altezza dell'albero (le foglie hanno altezza 1).*/




// calcola altezza albero
height(root)  {
    if (!nodo) return -1
    return 1 + Math.max(altezza(nodo.sx), altezza(nodo.dx))
}


// conta il numero di foglie dell'albero
function contaFoglie(nodo) {
    // caso base l'abero è vuoto 
    if (!nodo) return 0

    if (!nodo.sx && !nodo.dx ) return 1
    return contaFoglie(nodo.sx) + contaFoglie(nodo.dx)
}

// modifica i valori delle sole foglie con f
// visita in ampiezza BFS con coda
function bfs(radice) {
    if (!radice) return
    let coda = [radice]
    let contatore = 0
    while (coda.length > 0) {
        let nodo = coda.shift()
        console.log(nodo.val)
        if (nodo.sx %2 == 0) contatore++
        if (nodo.dx %2 == 0) contatore ++
    }
}