f = (x) => x**2; // lambda expression

function listMap(head, f){ // applica f a tutti i valori della lista
    if(!head){ // se head è vuota : (contiene null)
        return null
    }
    return { val: f(head.val), next: listMap(head.next,f) }
}

//console.log(f(2));

let head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } }
console.log(listMap(head,f));
console.log(JSON.stringify(listMap(head, f), null, 2)); 

/* Node ad un certo punto collassa, ecco come fare:
console.log(JSON.stringify(listMap(head, f), null, 2));
                                                        */