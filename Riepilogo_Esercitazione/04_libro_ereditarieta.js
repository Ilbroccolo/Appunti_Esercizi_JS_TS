class Libro {
    constructor(titolo, autore, numPagine) {
        this.titolo = titolo;
        this.autore = autore;
        this.numPagine = numPagine;
    }
}

class Romanzo extends Libro {
    constructor(titolo, autore, numPagine, protagonista) {
        super(titolo, autore, numPagine);
        this.protagonista = protagonista;
    }
}

class Giallo extends Romanzo {
    constructor(titolo, autore, numPagine, protagonista, colpevole) {
        super(titolo, autore, numPagine, protagonista);
        this.colpevole = colpevole;
    }
}

class SaggioDivulgativo extends Libro {
    constructor(titolo, autore, numPagine) {
        super(titolo, autore, numPagine);
    }

    get scienziato() {
        return this.autore;
    }

    set scienziato(nuovoScienziato) {
        this.autore = nuovoScienziato;
    }
}

function ilRomanzoCheVorrei(libri) {
    let romanzoPiuCorto = undefined;
    
    for (let i = 0; i < libri.length; i++) {
        let libroCorrente = libri[i];
        
        if (libroCorrente instanceof Romanzo) {
            
            if (romanzoPiuCorto === undefined || libroCorrente.numPagine < romanzoPiuCorto.numPagine) {
                romanzoPiuCorto = libroCorrente;
            }
        }
    }
    
    // se non abbiamo trovato alcun romanzo, ritorna undefined
    if (romanzoPiuCorto === undefined) {
        return undefined;
    } else {
        return romanzoPiuCorto.titolo;
    }
}
