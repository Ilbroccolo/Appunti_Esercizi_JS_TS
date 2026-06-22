class BadTreeError extends Error {
    constructor(messaggio = "Impossibile aggiungere più di due figli") {
        super(messaggio);
        this.name = "BadTreeError";
    }
}

class BNodePost {
    constructor(val, label = "") {
        this.val = val;
        this.label = label;
        // inizializziamo l'array vuoto per i figli
        this.children = [];
    }

    // metodo per aggiungere figli
    add(...nodi) {
        if (this.children.length + nodi.length > 2) {
            throw new BadTreeError();
        }
        
        // altrimenti aggiungiamo tutti i nodi passati
        for (let i = 0; i < nodi.length; i++) {
            this.children.push(nodi[i]);
        }
    }

    *visit() {
        for (let i = 0; i < this.children.length; i++) {
            let figlioCorrente = this.children[i];
            // delegamo la visita ricorsiva del figlio
            yield* figlioCorrente.visit();
        }
        
        yield this.val;
    }
}
