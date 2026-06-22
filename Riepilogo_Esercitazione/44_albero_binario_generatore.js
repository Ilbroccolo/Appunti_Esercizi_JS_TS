class BadTreeError extends Error {
    constructor(message) {
        super(message);
        this.name = "BadTreeError";
    }
}

class BNode {
    
    constructor(val, label = "") {
        this.val = val;
        this.label = label;
        this.children = [];
    }

    
    add(...nodes) {
        let numeroFigliFuturo = this.children.length + nodes.length;
        
        // se si tenta di avere più di due figli, lanciamo un errore custom
        if (numeroFigliFuturo > 2) {
            throw new BadTreeError("Impossibile aggiungere, si supererebbero i 2 figli (albero binario).");
        } else {
            for (let i = 0; i < nodes.length; i++) {
                this.children.push(nodes[i]);
            }
        }
    }

    
    *visit() {
        yield this.val;

        for (let i = 0; i < this.children.length; i++) {
            let nodoFiglio = this.children[i];
            
            for (let valore of nodoFiglio.visit()) {
                yield valore;
            }
        }
    }
}
