/*
Si scriva una classe NodoBinario che rappresenta un nodo di un albero binario. Il costruttore
prende:
- val (numero),
- left (opzionale),
- right (opzionale).
left e right, se forniti, devono essere NodoBinario oppure null, altrimenti lanciare TypeError. Se
val non è un numero, lanciare TypeError. Un nodo è foglia se ha entrambi i figli null.
Si scriva un generatore foglieConProfondita(radice) che:
- prende la radice di un albero (oppure null);
- produce una sequenza di coppie [profondita, valore], dove valore è il campo val di un nodo
foglia e profondita la profondità di tale nodo foglia;
- visita l’albero in preordine;
Si assume che radice ha profondità 0.
Se l’albero è vuoto allora foglieConProfondita non produce nulla.
Si aggiunga al prototipo della classe Map un metodo incrementa(key, amount):
- se la chiave key non è presente, inserisce la coppia chiave->valore data da key->amount;
- se la chiave key è presente, incrementa il corrispettivo valore della quantità data da amount;
- ritorna la Map stessa;
Si aggiunga alla classe Map un metodo statico sommaFogliePerProfondita(radice) che
usando il generatore foglieConProfondita restituisca una nuova Map tale che:
- le chiavi sono le profondità
- i valori sono la somma dei valori delle foglie a quella profondità
- se radice è null allora restituisce una Map vuota.
Attenzione: sommaFogliePerProfondita non deve modificare l’albero.
*/

class NodoBinario {
    constructor(val, left = null, right = null) {
        if (typeof val !== "number") {
            throw new TypeError("val deve essere numero");
        }
        if (left !== null && !(left instanceof NodoBinario)) {
            throw new TypeError("left non valido");
        }
        if (right !== null && !(right instanceof NodoBinario)) {
            throw new TypeError("right non valido");
        }
        this.val = val;
        this.left = left;
        this.right = right;
    }
    // Un nodo è foglia se non ha figli
    get isLeaf() {
        return this.left === null && this.right === null;
    }
}
// Generatore per visitare le foglie in preordine
function* foglieConProfondita(nodo, profondita = 0) {
    if (nodo === null) return;
    // Se è foglia, produce la coppia [profondita, valore]
    if (nodo.isLeaf) {
        yield [profondita, nodo.val];
    } else {
        // Visita preordine: sinistra poi destra
        yield* foglieConProfondita(nodo.left, profondita + 1);
        yield* foglieConProfondita(nodo.right, profondita + 1);
    }
}
Map.prototype.incrementa = function (key, amount) {
    if (!this.has(key)) {
        this.set(key, amount);
    }
    else {
        this.set(key, this.get(key) + amount);
    }
    return this;
};
Map.sommaFogliePerProfondita = function (radice) {
    let risultato = new Map();
    if (radice === null) return risultato;
    for (let [profondita, valore] of foglieConProfondita(radice)) {
        risultato.incrementa(profondita, valore);
    }
    return risultato;
};