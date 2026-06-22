
function listSplice(head, start, deleteCount){ // rimuove deleteCount nodi a partire da start
    if(!head){
        return null
    }
    if (start > 0){ // devo scorrere ancora
        return {val : head.val, next : listSplice(head.next, start-1, deleteCount)} // copio il nodo corrente
    }
    if(deleteCount > 0) { // devo ancora cancellare
        return listSplice(head.next, 0, deleteCount-1) // salto il nodo corrente
    }
    return head // ho finito di cancellare, restituisco il resto della lista

}



let head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } }

console.log(JSON.stringify(listSplice(head, 1, 4), null, 2)); 

