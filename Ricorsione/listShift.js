let head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } }

function listShift(head) { // rimuove il primo nodo e restituisce la nuova testa
    if (!head)
        return [null, undefined]
    return head.next
}

console.log(JSON.stringify(listShift(head), null, 2)); 


function listPrint(head) { // stampa i valori della lista
    if (head) { // è come controllare head != null
        console.log(head.val)
        listPrint(head.next)
    }
}