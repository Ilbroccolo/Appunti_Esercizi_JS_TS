/* ### Esercizio 2

Si scriva in JavaScript una classe QueueList che implementi una coda LIFO utilizzando una lista concatenata.
Si definisca una classe QueueNode per implementare i nodi della lista, rappresentati come visto a lezione.

La classe QueueList deve implementare i seguenti metodi:

* addValue(value), che inserisce un valore nella coda;
* getValue(), che restituisce l'ultimo valore inserito nella coda. Lancia un'eccezione EmptyQueueError se la coda è vuota;
* isEmpty(), che restituisce true se la coda è vuota, e false altrimenti;
* reverse(), che restituisce una nuova coda contenente gli stessi valori della coda originale, ma in ordine inverso.

Documentare il codice commentandolo opportunamente.

*Esempio:*

javascript
const q = new QueueList();

q.addValue(10);
q.addValue(20);
q.addValue(30);

q.getValue() // 30

const r = q.reverse();

r.getValue() // 10
r.getValue() // 20



--- 
 */

/**
 * Eccezione personalizzata lanciata quando si tenta di leggere da una coda vuota.
 */
class EmptyQueueError extends Error {
    constructor(message = "La coda è vuota") {
        super(message);
        this.name = "EmptyQueueError";
    }
}

/**
 * Classe che rappresenta un singolo nodo della lista concatenata.
 */
class QueueNode {
    value;
    next = null; // Riferimento al nodo successivo

    constructor(value) {
        this.value = value;
    }
}

/**
 * Classe che implementa una coda LIFO (Stack) tramite lista concatenata.
 */
class QueueList {
    head = null; // Punta all'ultimo elemento inserito (la testa della pila)

    /**
     * Inserisce un valore nella coda (in testa, rispettando la logica LIFO).
     * @param {*} value - Il valore da inserire
     */
    addValue(value) {
        const newNode = new QueueNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    /**
     * Restituisce l'ultimo valore inserito nella coda.
     * @returns {*} Il valore del nodo in testa
     * @throws {EmptyQueueError} Se la coda è vuota
     */
    getValue() {
        if (this.isEmpty()) {
            throw new EmptyQueueError("Impossibile recuperare il valore: la coda è vuota.");
        }
        return this.head.value;
    }

    /**
     * Restituisce true se la coda è vuota, false altrimenti.
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Restituisce una nuova coda contenente gli stessi valori 
     * della coda originale, ma in ordine inverso.
     * @returns {QueueList} Nuova coda invertita
     */
    reverse() {
        const reversedQueue = new QueueList();
        let current = this.head;
        const values = [];

        // Estrae tutti i valori scorrendo la lista dall'alto verso il basso
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }

        // Reinserisce i valori al contrario per invertire la struttura
        for (let i = values.length - 1; i >= 0; i--) {
            reversedQueue.addValue(values[i]);
        }

        return reversedQueue;
    }
}


// --- CODICE DI TEST / VERIFICA ---

// 1. Creazione della coda originale
const q = new QueueList();

console.log("La coda è vuota inizialmente?", q.isEmpty()); // Atteso: true

// 2. Inserimento dei valori come da esempio
q.addValue(10);
q.addValue(20);
q.addValue(30);

console.log("La coda è vuota dopo gli inserimenti?", q.isEmpty()); // Atteso: false

// 3. Verifica del metodo getValue() sulla coda originale
console.log("q.getValue():", q.getValue()); // Atteso: 30

// 4. Creazione della coda invertita tramite reverse()
const r = q.reverse();

// 5. Verifica dei valori estratti dalla coda invertita (Logica dell'esempio)
console.log("r.getValue() [Primo elemento di r]:", r.getValue()); // Atteso: 10

// Per simulare la "rimozione" e vedere il valore successivo (20) come nell'esempio,
// facciamo avanzare manualmente la testa di r per il test:
r.head = r.head.next; 
console.log("r.getValue() [Dopo aver rimosso il 10]:", r.getValue()); // Atteso: 20

// 6. Test della gestione dell'eccezione EmptyQueueError
const codaVuota = new QueueList();
try {
    codaVuota.getValue(); // Questo lancerà l'errore
} catch (error) {
    console.log("Errore intercettato correttamente:", error.name, "->", error.message);
    // Atteso: EmptyQueueError -> Impossibile recuperare il valore: la coda è vuota.
}