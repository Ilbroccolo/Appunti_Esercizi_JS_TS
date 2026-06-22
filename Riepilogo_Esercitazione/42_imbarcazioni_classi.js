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

class Barca extends Imbarcazione {
    constructor(nome, lunghezza) {
        super(nome);
        this.lunghezza = lunghezza;
    }

    get metri() {
        return this.lunghezza;
    }

    set metri(valore) {
        this.lunghezza = valore;
    }
}

class Motoscafo extends Barca {
    constructor(nome, lunghezza, numeroMotori) {
        super(nome, lunghezza);
        this.numeroMotori = numeroMotori;
    }
}

function trovaBarca(barche) {
    let barcaPiuLunga = undefined;
    let lunghezzaMassima = -1;

    // scorriamo l'array di imbarcazioni
    for (let i = 0; i < barche.length; i++) {
        let imbarcazioneCorrente = barche[i];

        if (imbarcazioneCorrente instanceof Barca) {
            // strettamente maggiore di quella massima vista finora
            if (barcaPiuLunga === undefined || imbarcazioneCorrente.metri > lunghezzaMassima) {
                barcaPiuLunga = imbarcazioneCorrente;
                lunghezzaMassima = imbarcazioneCorrente.metri;
            }
        }
    }

    if (barcaPiuLunga !== undefined) {
        return barcaPiuLunga.nome;
    } else {
        return undefined;
    }
}
