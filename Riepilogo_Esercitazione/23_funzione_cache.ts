class CachedFunction<T, U> {
    funzioneOriginale: (valore: T) => U;
    limiteCache: number;
    // la mappa associa l'input (di tipo t) a una tupla [risultato di tipo u, numero di riutilizzi]
    mappaCache: Map<T, [U, number]>;

    constructor(f: (valore: T) => U, cache_limit: number) {
        this.funzioneOriginale = f;
        this.limiteCache = cache_limit;
        this.mappaCache = new Map<T, [U, number]>();
    }

    
    get_cache(v: T): [U, number] | undefined {
        if (this.mappaCache.has(v)) {
            let datiCache = this.mappaCache.get(v);
            if (datiCache !== undefined) {
                return [datiCache[0], datiCache[1]];
            }
        }
        
        return undefined;
    }

    
    get_value(v: T): U {
        let datiCache = this.mappaCache.get(v);

        if (datiCache !== undefined) {
            let valoreSalvato = datiCache[0];
            let riutilizziEffettuati = datiCache[1];

            // se non abbiamo ancora raggiunto o superato il limite di riutilizzi consentiti
            if (riutilizziEffettuati < this.limiteCache) {
                this.mappaCache.set(v, [valoreSalvato, riutilizziEffettuati + 1]);
                return valoreSalvato;
            }
        }

        let nuovoValore = this.funzioneOriginale(v);
        
        this.mappaCache.set(v, [nuovoValore, 0]);
        
        return nuovoValore;
    }
}

class CachedNumericFunction extends CachedFunction<number, number> {
    constructor(f: (valore: number) => number, cache_limit: number) {
        super(f, cache_limit);
    }
}
