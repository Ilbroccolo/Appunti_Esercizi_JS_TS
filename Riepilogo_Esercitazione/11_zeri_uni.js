class NonIntegerError extends Error {
    constructor(messaggio = "Il numero non è intero") {
        super(messaggio);
        this.name = "NonIntegerError";
    }
}

class OutOfRangeError extends Error {
    constructor(messaggio = "Il numero è fuori dal range 0-255") {
        super(messaggio);
        this.name = "OutOfRangeError";
    }
}

function zeriuni(n) {
    if (typeof n !== "number" || !Number.isInteger(n)) {
        throw new NonIntegerError();
    }

    if (n < 0 || n > 255) {
        throw new OutOfRangeError();
    }

    let risultato = [];
    let numeroCorrente = n;

    for (let i = 7; i >= 0; i--) {
        let divisore = Math.pow(2, i);
        
        let bitCorrente = Math.floor(numeroCorrente / divisore);
        risultato.push(bitCorrente);
        
        numeroCorrente = numeroCorrente % divisore;
    }

    return risultato;
}
