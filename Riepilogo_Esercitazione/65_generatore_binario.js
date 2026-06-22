class UnsuitableNumberError extends Error {
    constructor(messaggio) {
        super(messaggio);
        this.name = "UnsuitableNumberError";
    }
}

function* bin(n) {
    if (n <= 0) {
        throw new UnsuitableNumberError("Il numero passato non e' adatto (deve essere > 0)");
    }
    
    let numeroCorrente = n;
    
    // calcoliamo i bit dal meno significativo al più significativo
    while (numeroCorrente > 0) {
        let bit = numeroCorrente % 2;
        yield bit;
        
        numeroCorrente = Math.floor(numeroCorrente / 2);
    }
}
