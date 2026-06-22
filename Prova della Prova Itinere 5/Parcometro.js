/*
Si scriva una classe Parcometro che rappresenta un parcometro personale con credito
protetto.
Il costruttore prende due argomenti:
- targa, una stringa non vuota;
- credito, un numero non negativo (default 0).
Se i parametri non sono validi, il costruttore deve lanciare un’eccezione di tipo TypeError.
La classe deve consentire l’accesso in sola lettura al credito corrente disponibile e o`rire i
seguenti metodi:
- ricarica(euro, motivo) che aggiunge euro al credito;
- paga(euro, motivo) che sottrae euro dal credito;
I metodi ricarica e paga devono lanciare TypeError se euro non è un numero strettamente
positivo, oppure motivo non è una stringa.
Il metodo paga deve inoltre lanciare un’eccezione custom CreditoInsu`iciente se euro è
maggiore del credito disponibile.
I metodi ricarica e paga devono istanziare oggetti della classe Movimento con le seguenti
proprietà:
- tipo ("R" = ricarica, "S" = spesa),
- euro (numero ≥ 0),
- motivo (stringa),
- data (istanza Date).
Parcometro fornisce il metodo storico(k) che restituisce un array con gli ultimi k movimenti
e`ettuati (default k = 5), ordinati dal più recente al meno recente.
Attenzione: modificare gli oggetti restituiti da storico non deve alterare le istanze della classe
Movimento.
Una operazione è una coppia [p,m] dove p è un riferimento ad una istanza di Parcometro, m è
un riferimento ad una istanza di Movimento associato a p. Ogni operazione e`ettuata dalle
istanze della classe Parcometro deve essere registrata in un Set privato che rappresenta il
registro globale della classe Parcometro. La classe Parcometro deve inoltre o`rire un metodo
statico registro() che restituisce un Set di tutte le operazioni [p,m] e`ettuate su tutte le istanze
create.
Attenzione: cancellare elementi dal Set restituito da registro() non deve cancellare elementi
dal registro globale della classe Parcometro
*/

class CreditoInsufficiente extends Error {
    constructor(message = "Credito insufficiente") {
        super(message);
        this.name = "CreditoInsufficiente";
    }
}
class Movimento {
    constructor(t, e, m, d) {
        this.tipo = t // "R" ricarica oppure "S" spesa
        this.euro = e // e>=0
        this.motivo = m // stringa
        this.data = d// date
    }
}
class Parcometro {
    #targa
    #movimenti = []
    #creditoCorrente = 0
    constructor(t, c = 0) {
        if (typeof t != "string" || t === "") throw new TypeError("Deve essere stringa non vuota!")
        if (typeof c != "number" || c < 0) throw new TypeError("Deve essere numero non negativo!")
        this.#targa = t
        this.#creditoCorrente = c
    }
    get credito() { return this.#creditoCorrente }
    static check(e, m) {
        if (typeof m != "string") throw new TypeError("Deve essere stringa!")
        if (!Number.isFinite(e) || e <= 0) throw new TypeError("Deve essere numero positivo!")
    }
    static #registri = new Set()
    static registro() {
        return new Set(this.#registri)
    }

    ricarica(euro, motivo) {
        Parcometro.check(euro, motivo)
        this.#creditoCorrente += euro
        let mov = new Movimento("R", euro, motivo, new Date())
        this.#movimenti.push(mov)
        Parcometro.#registri.add([this, mov])
    }
    paga(euro, motivo) {
        Parcometro.check(euro, motivo)
        if (euro > this.#creditoCorrente) throw new CreditoInsufficiente
        this.#creditoCorrente -= euro
        let mov = new Movimento("S", euro, motivo, new Date())
        this.#movimenti.push(mov)
        Parcometro.#registri.add([this, mov])
    }
    storico(k = 5) {
        return [...this.#movimenti.slice(- k).map((x) => ({ ...x }))].reverse()
    }
}