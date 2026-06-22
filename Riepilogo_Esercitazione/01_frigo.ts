type ElementoRicetta = {
    ing: string;
    q: number;
};

class FaiLaSpesaError extends Error {
    mancanti: ElementoRicetta[];

    constructor(mancanti: ElementoRicetta[]) {
        super("Fai la spesa: mancano degli ingredienti!");
        this.name = "FaiLaSpesaError";
        this.mancanti = mancanti;
    }
}

class Frigo {
    // dizionario per tenere traccia delle quantità. semplice e veloce
    ingredienti: { [key: string]: number };

    constructor() {
        this.ingredienti = {};
    }

    metti(ing: string, q: number): void {
        if (this.ingredienti[ing] === undefined) {
            this.ingredienti[ing] = 0;
        }
        this.ingredienti[ing] += q;
    }

    prendi(ing: string, q: number): void;
    prendi(ricetta: ElementoRicetta[], persone: number): void;
    
    prendi(ingORicetta: string | ElementoRicetta[], qOPersone: number): void {
        let daPrendere: ElementoRicetta[] = [];

        if (typeof ingORicetta === "string") {
            // caso 1: prelevare un singolo ingrediente
            let ing = ingORicetta;
            let q = qOPersone;
            daPrendere.push({ ing: ing, q: q });

        } else {
            // caso 2: prelevare ingredienti per ricetta
            let ricetta = ingORicetta;
            let persone = qOPersone;
            
            let proporzione = persone / 4;

            for (let i = 0; i < ricetta.length; i++) {
                let elemento = ricetta[i];
                let quantitaNecessaria = elemento.q * proporzione;
                daPrendere.push({ ing: elemento.ing, q: quantitaNecessaria });
            }
        }

        let mancanti: ElementoRicetta[] = [];

        for (let i = 0; i < daPrendere.length; i++) {
            let elemento = daPrendere[i];
            let qNelFrigo = this.ingredienti[elemento.ing] || 0;

            if (qNelFrigo < elemento.q) {
                let qMancante = elemento.q - qNelFrigo;
                mancanti.push({ ing: elemento.ing, q: qMancante });
            }
        }

        // se l'array 'mancanti' non è vuoto, blocchiamo tutto e lanciamo l'errore
        if (mancanti.length > 0) {
            throw new FaiLaSpesaError(mancanti);
        }

        for (let i = 0; i < daPrendere.length; i++) {
            let elemento = daPrendere[i];
            this.ingredienti[elemento.ing] -= elemento.q;
        }
    }
}
