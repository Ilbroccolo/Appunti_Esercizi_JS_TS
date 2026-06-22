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
        throw new NoKillsError("Nessuna vittima presente.");
    }
    
    for (let i = 0; i < vittime.length; i++) {
        let vittimaCorrente = vittime[i];
        yield vittimaCorrente;
    }
    
    if (vittime.length === 1) {
        throw new JustOneKillError("C'era solo una vittima nell'array.");
    }
}
