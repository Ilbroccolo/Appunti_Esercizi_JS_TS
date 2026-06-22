// esercizio 19 - drunken list (lista collegata "ubriaca")

class Nodo {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class DrunkenList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // inserisce l'oggetto in base alla parità della lunghezza
    push(obj) {
        if (this.length % 2 === 0) {
            let nuovoNodo = new Nodo(obj);
            nuovoNodo.next = this.head;
            this.head = nuovoNodo;
            this.length++;
        } else {
            // lunghezza dispari: inserisci in testa e in coda
            
            // 1. inseriamo in testa
            let nodoTesta = new Nodo(obj);
            nodoTesta.next = this.head;
            this.head = nodoTesta;
            
            let nodoCoda = new Nodo(obj);
            
            // scorriamo la lista per trovare l'ultimo elemento
            // che la lista non sia vuota, quindi this.head non è null
            let corr = this.head;
            while (corr.next !== null) {
                corr = corr.next;
            }
            
            corr.next = nodoCoda;
            
            // abbiamo aggiunto 2 elementi totali
            this.length += 2;
        }
    }

    // rimuove un elemento in base alla parità della lunghezza
    pop() {
        if (this.length === 0) {
            throw new ReferenceError("La lista è vuota");
        }

        if (this.length % 2 !== 0) {
            let rimosso = this.head;
            this.head = this.head.next;
            this.length--;
            
            return rimosso.val;
        } else {
            let corr = this.head;
            let prec = null;
            
            while (corr.next !== null) {
                prec = corr;
                corr = corr.next;
            }
            
            // prec punta al penultimo (diventerà il nuovo ultimo)
            if (prec !== null) {
                prec.next = null;
            } else {
                this.head = null;
            }
            
            this.length--;
            return corr.val;
        }
    }

    as_array() {
        let result = [];
        let corr = this.head;
        
        while (corr !== null) {
            result.push(corr.val);
            corr = corr.next;
        }
        
        return result;
    }
}
