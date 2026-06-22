function memo(f) {
    // uso una map per salvare i risultati calcolati
    let memoria = new Map();

    // creiamo la nuova funzione con cache
    let g = function(x) {
        // se abbiamo già calcolato il risultato per questo argomento x, lo ritorna
        if (memoria.has(x)) {
            return memoria.get(x);
        }
        
        let risultato = f(x);
        
        memoria.set(x, risultato);
        
        return risultato;
    };

    // metodo per svuotare la cache
    g.clear = function() {
        memoria.clear();
    };

    // metodo per ottenere il numero di elementi salvati
    g.size = function() {
        return memoria.size;
    };

    Object.defineProperty(g, "dimcache", {
        get: function() {
            return memoria.size;
        },
        // non definiamo il 'set' in modo che sia accessibile solo in lettura
        enumerable: true
    });

    return g;
}
