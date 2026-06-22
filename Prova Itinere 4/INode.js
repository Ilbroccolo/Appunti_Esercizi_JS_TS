class INode {
    a;
    b;
    left = null;
    right = null;

    //Costruttore: riceve  array di due elementi [a, b]
    constructor(intervallo) {
            this.a = intervallo[0];
            this.b = intervallo[1];
       
    }

    
    
    add(n) {
        let current = this; // prende la testa dell'albero
        
        while (true) {
            // Determina se andare a sinistra o destra
            // True se n è "minore" di current
            const goLeft = n.a < current.a || (n.a === current.a && n.b < current.b);

            if (goLeft) {
                if (!current.left) {
                    current.left = n;
                    return; // Inserimento completato
                }
                current = current.left; // Scendo a sinistra
            } else {
                if (!current.right) {
                    current.right = n;
                    return; // Inserimento completato
                }
                current = current.right; // Scendo a destra
            }
        }
    }

    
    findValue(x) { //trova il valore  x ricorsivamente nell'albero
    if (x >= this.a && x <= this.b) {
        return this;
    }

    if (this.left) {
        const res = this.left.findValue(x);
        if (res) return res;
    }

    if (this.right && x >= this.a) {
        return this.right.findValue(x);
    }

    return null;
}

    
    get maxd() { // massima profondità albero
        let prof_destra = 0;
        let prof_sinistra = 0;

        if (this.right) prof_destra = this.right.maxd;
        if (this.left) prof_sinistra = this.left.maxd;

        return Math.max(prof_destra, prof_sinistra) + 1;
    }

    
    get mind() { // minima profondità albero
        // Caso base: se è una foglia
        if (!this.left && !this.right) return 1;

        
        if (!this.left) return this.right.mind + 1;
        if (!this.right) return this.left.mind + 1;
        return Math.min(this.left.mind, this.right.mind) + 1;
    }
}

class YetAnotherAlbero {
    root = null;
    size = 0;

    constructor() {}

    addInterval([a, b]) {
        let nodo = new INode([a, b]);

        if (!this.root) {
            this.root = nodo;
        } else {
            // Chiamiamo il metodo add sulla radice
            this.root.add(nodo);
        }
        
        this.size++;
    }
}
