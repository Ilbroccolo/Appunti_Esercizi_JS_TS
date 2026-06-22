/*Si scriva in JavaScript una classe QueueList che implementi una coda LIFO utilizzando una lista concatenata.
Si definisca una classe QueueNode per implementare i nodi della lista, rappresentati come visto a lezione.

La classe QueueList deve implementare i seguenti metodi:

- addValue(value), che inserisce un valore nella coda;
- getValue(), che restituisce l'ultimo valore inserito nella coda. Lancia un'eccezione EmptyQueueError se la coda è vuota;
- isEmpty(), che restituisce true se la coda è vuota, e false altrimenti;
- reverse(), che restituisce una nuova coda contenente gli stessi valori della coda originale, ma in ordine inverso**/

// creo l'errore 
class EmptyQueueError extends Error {
    constructor(messaggio) {
        super(messaggio);
        this.name = "EmptyQueueError";
    }
}


class QueueList(){

    constructor(testa){
        this.testa = testa
        
    }

    addvalue(value){

        

        
    }
    isEmpty(testa) {
        let corr = testa
        if(corr == null){
            return false
        }
    }

    reverse(testa) {
        let prev = null
        let corr = testa
        while (corr !== null) {
            let succ = corr.next
            corr.next = prev
            prev = corr
            corr = succ
        }
        return prev
    }

}

// inverte lista concatenata in-place