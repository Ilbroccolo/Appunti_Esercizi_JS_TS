// classe base per tutte le imbarcazioni
class Imbarcazione {
    constructor(nome) {
        this.nome = nome;
    }
}

class Nave extends Imbarcazione {
    constructor(nome, porto) {
        super(nome);
        this.porto = porto;
    }
}

// barca estende imbarcazione aggiungendo la lunghezza
class Barca extends Imbarcazione {
    constructor(nome, lunghezza) {
        super(nome);
        this.lunghezza = lunghezza;
    }

    get metri() {
        return this.lunghezza;
    }

    set metri(nuovaLunghezza) {
        this.lunghezza = nuovaLunghezza;
    }
}

// motoscafo è un tipo speciale di barca, con numero motori
class Motoscafo extends Barca {
    constructor(nome, lunghezza, numeroMotori) {
        super(nome, lunghezza);
        this.numeroMotori = numeroMotori;
    }
}

function trovaBarca(barche) {
    let barcaPiuLunga = undefined;

    // scorriamo tutte le imbarcazioni nell'array
    for (let i = 0; i < barche.length; i++) {
        let imbarcazioneCorrente = barche[i];

        if (imbarcazioneCorrente instanceof Barca) {
            
            if (barcaPiuLunga === undefined) {
                barcaPiuLunga = imbarcazioneCorrente;
            } 
            // uso il > e non >= per mantenere la prima incontrata a parità di lunghezza
            else if (imbarcazioneCorrente.lunghezza > barcaPiuLunga.lunghezza) {
                barcaPiuLunga = imbarcazioneCorrente;
            }
        }
    }

    if (barcaPiuLunga !== undefined) {
        return barcaPiuLunga.nome;
    }
    
    return undefined;
}
