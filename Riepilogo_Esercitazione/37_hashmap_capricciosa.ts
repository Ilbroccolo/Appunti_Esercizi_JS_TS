// esercizio 37

class CapriciousHashMap<K, V> {
    m: number;
    h: (k: K) => number;
    tabella: (V | undefined)[];

    constructor(m: number, h: (k: K) => number) {
        this.m = m;
        this.h = h;
        this.tabella = [];
        
        for (let i = 0; i < this.m; i++) {
            this.tabella.push(undefined);
        }
    }

    put(k: K, v: V): boolean {
        let posizione = this.h(k) % this.m;

        if (this.tabella[posizione] === undefined) {
            this.tabella[posizione] = v;
            return true;
        }

        return false;
    }

    get(k: K): V | undefined {
        let posizione = this.h(k) % this.m;
        return this.tabella[posizione];
    }

    delete(k: K): void {
        let posizione = this.h(k) % this.m;
        this.tabella[posizione] = undefined;
    }
}
