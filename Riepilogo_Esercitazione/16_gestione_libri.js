// classe base per tutti i libri
class Libro {
    constructor(titolo, autore, numPagine) {
        this.titolo = titolo;
        this.autore = autore;
        this.numPagine = numPagine;
    }
}

class Romanzo extends Libro {
    constructor(titolo, autore, numPagine, protagonista) {
        // chiamiamo il costruttore della classe padre (libro)
        super(titolo, autore, numPagine);
        this.protagonista = protagonista;
    }
}

// classe giallo che eredita da romanzo (quindi anche lui è un romanzo)
class Giallo extends Romanzo {
    constructor(titolo, autore, numPagine, protagonista, colpevole) {
        super(titolo, autore, numPagine, protagonista);
        this.colpevole = colpevole;
    }
}

// classe saggiodivulgativo che eredita da libro
class SaggioDivulgativo extends Libro {
    constructor(titolo, autore, numPagine) {
        super(titolo, autore, numPagine);
    }

    get scienziato() {
        return this.autore;
    }

    // setter per la proprietà scienziato che modifica l'autore
    set scienziato(nuovoScienziato) {
        this.autore = nuovoScienziato;
    }
}

function ilRomanzoCheVorrei(libri) {
    let romanzoPiuLungo = undefined;
    let maxPagine = -1;

    // scorriamo tutti i libri nell'array
    for (let i = 0; i < libri.length; i++) {
        let libroCorrente = libri[i];

        if (libroCorrente instanceof Romanzo) {
            
            // se troviamo un romanzo con più pagine del massimo corrente
            if (libroCorrente.numPagine > maxPagine) {
                maxPagine = libroCorrente.numPagine;
                romanzoPiuLungo = libroCorrente;
            }
        }
    }

    if (romanzoPiuLungo === undefined) {
        return undefined;
    }

    return romanzoPiuLungo.titolo;
}
