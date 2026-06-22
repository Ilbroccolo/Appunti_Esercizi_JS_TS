class Jar {
    // campo privato per memorizzare le associazioni senza renderle accessibili all'esterno
    #associazioni;

    constructor() {
        this.#associazioni = [];
    }

    // metodo che cancella tutte le associazioni registrate
    reset() {
        this.#associazioni = [];
    }

    add(m, v) {
        let nuovaAssociazione = {
            modello: m,
            valore: v
        };
        this.#associazioni.push(nuovaAssociazione);
    }

    read(s) {
        let risultato = {};

        for (let i = 0; i < this.#associazioni.length; i++) {
            let associazioneCorrente = this.#associazioni[i];
            
            if (associazioneCorrente.modello.test(s) === true) {
                let val = associazioneCorrente.valore;
                risultato[val] = 1;
            }
        }

        return risultato;
    }
}
