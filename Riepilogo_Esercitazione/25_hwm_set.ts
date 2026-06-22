class HWMSet<T> {
    conteggi: Map<T, number>;
    massimi: Map<T, number>;

    constructor(iniziale?: HWMSet<T> | Iterable<T>) {
        this.conteggi = new Map<T, number>();
        this.massimi = new Map<T, number>();

        if (iniziale !== undefined) {
            if (iniziale instanceof HWMSet) {
                // copio i dati direttamente dal set passato come argomento
                for (let chiave of iniziale.conteggi.keys()) {
                    let valoreConteggio = iniziale.conteggi.get(chiave);
                    if (valoreConteggio !== undefined) {
                        this.conteggi.set(chiave, valoreConteggio);
                    }
                }
                for (let chiave of iniziale.massimi.keys()) {
                    let valoreMassimo = iniziale.massimi.get(chiave);
                    if (valoreMassimo !== undefined) {
                        this.massimi.set(chiave, valoreMassimo);
                    }
                }
            } else {
                for (let elemento of iniziale) {
                    this.put(elemento);
                }
            }
        }
    }

    cnt(e: T): number {
        let valore = this.conteggi.get(e);
        if (valore !== undefined) {
            return valore;
        }
        return 0;
    }

    max(e: T): number {
        let valore = this.massimi.get(e);
        if (valore !== undefined) {
            return valore;
        }
        return 0;
    }

    // aggiunge un elemento al multi-insieme
    put(e: T): void {
        let conteggioCorrente = this.cnt(e);
        let nuovoConteggio = conteggioCorrente + 1;
        this.conteggi.set(e, nuovoConteggio);

        let massimoCorrente = this.max(e);
        if (nuovoConteggio > massimoCorrente) {
            this.massimi.set(e, nuovoConteggio);
        }
    }

    take(e: T): void {
        let conteggioCorrente = this.cnt(e);
        if (conteggioCorrente > 0) {
            this.conteggi.set(e, conteggioCorrente - 1);
        }
    }

    // generatore che ritorna l'elemento e la differenza tra massimo e occorrenze attuali
    *bydelta(): Generator<[T, number]> {
        let elementiConDelta: [T, number][] = [];
        
        for (let chiave of this.massimi.keys()) {
            let differenza = this.max(chiave) - this.cnt(chiave);
            elementiConDelta.push([chiave, differenza]);
        }

        for (let i = 0; i < elementiConDelta.length; i++) {
            for (let j = i + 1; j < elementiConDelta.length; j++) {
                if (elementiConDelta[i][1] < elementiConDelta[j][1]) {
                    let temporaneo = elementiConDelta[i];
                    elementiConDelta[i] = elementiConDelta[j];
                    elementiConDelta[j] = temporaneo;
                }
            }
        }

        for (let i = 0; i < elementiConDelta.length; i++) {
            yield elementiConDelta[i];
        }
    }
}
