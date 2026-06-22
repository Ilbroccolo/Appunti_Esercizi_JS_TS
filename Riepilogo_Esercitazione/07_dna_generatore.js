const bases = {
    "A": true,
    "C": true,
    "G": true,
    "T": true
};

class UnknownBaseError extends Error {
    constructor(messaggio) {
        super(messaggio);
        this.name = "UnknownBaseError";
    }
}

function* unfold(dna) {
    for (let i = 0; i < dna.length; i++) {
        let base = dna[i];
        
        if (!(base in bases)) {
            throw new UnknownBaseError("Base sconosciuta: " + base);
        }
        
        yield base;
    }
}
