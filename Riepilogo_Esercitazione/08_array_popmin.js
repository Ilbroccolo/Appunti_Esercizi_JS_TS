Array.prototype.popMin = function() {
    // se l'array è vuoto, ritorna undefined
    if (this.length === 0) {
        return undefined;
    }
    
    let minimo = this[0];
    let indiceMinimo = 0;
    
    for (let i = 1; i < this.length; i++) {
        if (this[i] < minimo) {
            minimo = this[i];
            indiceMinimo = i;
        }
    }
    
    // rimuoviamo l'elemento minimo dall'array usando splice
    this.splice(indiceMinimo, 1);
    
    return minimo;
};
