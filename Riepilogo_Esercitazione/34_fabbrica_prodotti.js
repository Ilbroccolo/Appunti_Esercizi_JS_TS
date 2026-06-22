// classe fabbrica e gestione delle eccezioni custom

class IllegalOptionsError extends Error {
    constructor() {
        super("Le opzioni non possono modificare le proprietà del tipo di prodotto originale");
        this.name = "IllegalOptionsError";
    }
}

class Fabbrica {
    static #fabbricheCostruite = 0;
    
    #prodottoBase;
    #prodottiCreati;

    constructor(prodotto) {
        this.#prodottoBase = prodotto;
        this.#prodottiCreati = 0;
        
        Fabbrica.#fabbricheCostruite++;
    }

    get nFabbriche() {
        return Fabbrica.#fabbricheCostruite;
    }

    // proprietà di sola lettura (getter) per gli oggetti prodotti da questa specifica fabbrica
    get nProdotti() {
        return this.#prodottiCreati;
    }

    produci(opzioni = {}) {
        for (let chiave in opzioni) {
            if (chiave in this.#prodottoBase) {
                // se la chiave esiste già nel prodotto base, il suo valore deve essere lo stesso
                if (opzioni[chiave] !== this.#prodottoBase[chiave]) {
                    throw new IllegalOptionsError();
                }
            }
        }

        // se le opzioni sono valide, procediamo con la produzione
        this.#prodottiCreati++;

        let nuovoProdotto = {};
        
        for (let chiave in this.#prodottoBase) {
            nuovoProdotto[chiave] = this.#prodottoBase[chiave];
        }
        
        for (let chiave in opzioni) {
            nuovoProdotto[chiave] = opzioni[chiave];
        }

        return nuovoProdotto;
    }
}
