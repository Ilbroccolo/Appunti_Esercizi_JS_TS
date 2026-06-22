class NoKillsError extends Error {
    constructor(messaggio) {
        super(messaggio);
        this.name = "NoKillsError";
    }
}

class JustOneKillError extends Error {
    constructor(messaggio) {
        super(messaggio);
        this.name = "JustOneKillError";
    }
}

function* serialKiller(vittime) {
    if (vittime.length === 0) {
        throw new NoKillsError("Nessuna vittima presente nell'array");
    }
    
    if (vittime.length === 1) {
        yield vittime[0];
        throw new JustOneKillError("Solo una vittima presente");
    }
    
    // se ci sono più vittime, scorriamo l'array con un ciclo
    for (let i = 0; i < vittime.length; i++) {
        let vittimaCorrente = vittime[i];
        yield vittimaCorrente;
    }
}

