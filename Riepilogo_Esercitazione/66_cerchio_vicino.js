class Cerchio {
    constructor(centro, raggio) {
        if (!Array.isArray(centro) || centro.length !== 2) {
            throw new TypeError("Il centro non è un array di 2 coordinate");
        }
        
        // le coordinate e il raggio devono essere numeri
        if (typeof centro[0] !== 'number' || typeof centro[1] !== 'number' || typeof raggio !== 'number') {
            throw new TypeError("Coordinate e raggio devono essere di tipo number");
        }
        
        if (raggio < 0) {
            throw new RangeError("Il raggio non può essere un numero negativo");
        }
        
        this.centro = centro;
        this.raggio = raggio;
    }
}

function vicino(punto, cerchi) {
    // se l'array dei cerchi è vuoto o non definito
    if (cerchi === undefined || cerchi.length === 0) {
        return undefined;
    }
    
    let cerchioPiuVicino = null;
    let distanzaMinima = Infinity; 
    
    for (let i = 0; i < cerchi.length; i++) {
        let cerchioCorrente = cerchi[i];
        
        let diffX = punto[0] - cerchioCorrente.centro[0];
        let diffY = punto[1] - cerchioCorrente.centro[1];
        let distanzaCentro = Math.sqrt((diffX * diffX) + (diffY * diffY));
        
        let distanzaReale = distanzaCentro - cerchioCorrente.raggio;
        
        // vediamo se questo cerchio è il più vicino trovato finora
        if (distanzaReale < distanzaMinima) {
            distanzaMinima = distanzaReale;
            cerchioPiuVicino = cerchioCorrente;
        }
    }
    
    // se il punto si trova all'esterno del cerchio più vicino (distanzaminima > 0)
    // estendiamo il cerchio aumentandone il raggio finché non tocca il punto
    if (distanzaMinima > 0) {
        cerchioPiuVicino.raggio = cerchioPiuVicino.raggio + distanzaMinima;
    }
    
    return cerchioPiuVicino;
}
