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

    set metri(nuovaLunghezza) {
        this.lunghezza = nuovaLunghezza;
    }
}

class Motoscafo extends Barca {
    constructor(nome, lunghezza, numeroMotori) {
        super(nome, lunghezza);
        this.numeroMotori = numeroMotori;
    }
}

function trovaBarca(imbarcazioni) {
    let barcaPiuCorta = undefined;
    
    for (let i = 0; i < imbarcazioni.length; i++) {
        let imbarcazioneCorrente = imbarcazioni[i];
        
        if (imbarcazioneCorrente instanceof Barca) {
            
            // se è la prima barca che incontriamo, o se è più corta della minima attuale
            if (barcaPiuCorta === undefined || imbarcazioneCorrente.metri < barcaPiuCorta.metri) {
                barcaPiuCorta = imbarcazioneCorrente;
            }
        }
    }
    
    // ritorna undefined se non ci sono barche, altrimenti ritorna il nome
    if (barcaPiuCorta === undefined) {
        return undefined;
    } else {
        return barcaPiuCorta.nome;
    }
}
