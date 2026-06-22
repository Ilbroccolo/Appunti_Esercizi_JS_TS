/*Si scrivano due funzioni generiche enqueue e dequeue per la gestione di code con priorità.
 In particolare:
-enqueue(e, queue) inserisce un elemento e (di tipo generico T) in un array queue (di tipo T[])
 ordinato per priorità crescente, dove la priorità è indicata in un campo priority presente in ogni elemento dell'array.
-dequeue(queue) restituisce (e rimuove) l'elemento in coda all'array,
 ovvero quello con priorità maggiore, oppure undefined (se non ci sono elementi).

 La soluzione deve essere scritta in TypeScript, definendo opportunamente i tipi,
e non usando any o unknown.
*/

interface priority {
    priority : number
}

function enqueue<T extends priority>(e: T, queue: T[]): T[] {
    let i : number = 0
    let inserito : boolean = false
    while(i<queue.length){
        if(e.priority<=queue[i].priority){
            queue.splice(i, 0, e) // inserisce all' i-esimo posto senza cancellare niente(0) l'elemento : e 
            inserito = true
            break
        }
        i++
    }
    if(!inserito){
        queue.push(e)    
    }

    return queue;   
}

function dequeue <T>(queue : T[]) : T | undefined {
    return queue.pop()
}