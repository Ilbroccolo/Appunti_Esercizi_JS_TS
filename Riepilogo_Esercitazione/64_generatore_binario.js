class UnsuitableNumberError extends Error {
    constructor(messaggio) {
        super(messaggio);
        this.name = "UnsuitableNumberError";
    }
}

function* bin(n) {
    // controlliamo che il numero non sia minore o uguale a zero
    if (n <= 0) {
        throw new UnsuitableNumberError("Il numero deve essere strettamente maggiore di zero");
    }
    
    let numeroCorrente = n;
    
    while (numeroCorrente > 0) {
        let resto = numeroCorrente % 2;
        yield resto;
        
        numeroCorrente = Math.floor(numeroCorrente / 2);
    }
}
