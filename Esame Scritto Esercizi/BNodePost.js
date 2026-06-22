class BadTreeError extends Error {
    constructor(message) {
        super(message);
        this.name = "BadTreeError";
    }
}

class BNodePost {
    constructor(v, l = "") {
        this.val = v;
        this.label = l;
        this.children = []; // Inizializzato correttamente per ogni istanza
    }

    add(...nodi) {
        // Controlla che il totale (figli attuali + nuovi nodi) non superi 2
        if (this.children.length + nodi.length > 2) {
            throw new BadTreeError("Un albero binario non può avere più di due figli in totale.");
        }
        
        for (let nodo of nodi) {
            this.children.push(nodo);
        }
    }

    // Generatore per la visita in Post-Order (Sinistra -> Destra -> Radice)
    *visit() {
        for (let child of this.children) {
            // Verifica che il figlio sia un nodo visitabile prima di chiamare yield*
            if (child && typeof child.visit === 'function') {
                yield* child.visit();
            } else {
                yield child; // Se fosse un valore piatto, fa il yield diretto
            }
        }
        yield this.val; // Rilascia il valore del nodo corrente alla fine
    }
}